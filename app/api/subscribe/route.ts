// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const email = (body?.email || '').trim()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const apiKey = process.env.MAILCHIMP_API_KEY
    const listId = process.env.MAILCHIMP_LIST_ID
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX // optional, e.g. 'us4'

    if (!apiKey || !listId) {
      return NextResponse.json({ error: 'Mailchimp not configured' }, { status: 500 })
    }

    const dc = serverPrefix || (apiKey.split('-').pop && apiKey.split('-').pop()) || 'us4'
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`

    const payload = {
      email_address: email,
      status: 'subscribed', // use 'pending' for double opt-in
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(`any:${apiKey}`).toString('base64'),
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => ({}))

    if (res.ok) {
      return NextResponse.json({ success: true, id: data.id })
    }

    // Treat "Member Exists" as friendly success
    if (res.status === 400 && data?.title === 'Member Exists') {
      return NextResponse.json({ success: true, exists: true, message: 'Already subscribed' })
    }

    const detail = data?.detail || data?.title || 'Mailchimp error'
    return NextResponse.json({ error: detail, data }, { status: res.status })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 })
  }
}
