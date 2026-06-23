export const runtime = 'nodejs' // ensure Buffer is available in serverless Node runtime

import { NextRequest, NextResponse } from 'next/server'

function isValidEmail(email: string) {
  // Simple validation; adjust if you need stricter rules
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({} as any))
    const email = (body?.email || '').trim()
    const honeypot = (body?.hp || '').trim() // client should send honeypot field as "hp"

    if (honeypot) {
      // Bot-like submission — silently succeed to avoid signaling
      return NextResponse.json({ success: true, hidden: true })
    }

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const apiKey = process.env.MAILCHIMP_API_KEY
    const listId = process.env.MAILCHIMP_LIST_ID
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX

    if (!apiKey || !listId) {
      return NextResponse.json({ error: 'Mailchimp not configured' }, { status: 500 })
    }

    // Get data center from supplied env or fallback to API key suffix
    const dc = serverPrefix || (typeof apiKey === 'string' && apiKey.includes('-') ? apiKey.split('-').pop() : 'us4')
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`

    const payload = {
      email_address: email,
      status: 'subscribed', // set 'pending' if you want double opt-in
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

    // Mailchimp common error handling
    if (res.status === 400 && data?.title === 'Member Exists') {
      return NextResponse.json({ success: true, exists: true, message: 'Already subscribed' })
    }

    if (res.status === 400 && data?.detail) {
      return NextResponse.json({ error: data.detail }, { status: 400 })
    }

    const detail = data?.detail || data?.title || 'Mailchimp error'
    return NextResponse.json({ error: detail, data }, { status: res.status })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 })
  }
}
