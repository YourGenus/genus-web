'use client'

import React, { useState } from 'react'

export default function MailchimpForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#4f5f84'
    e.currentTarget.style.outline = 'none'
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#d6dbe7'
  }

  const handleBtnMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#4f5f84'
  }
  const handleBtnMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#1f2430'
  }
  const handleBtnMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(0.98)'
  }
  const handleBtnMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1)'
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const json = await res.json()
      if (!res.ok) {
        setStatus('error')
        setMessage(json.error || 'Subscription failed')
        return
      }
      setStatus('success')
      setMessage('Thanks — check your inbox!')
      setEmail('')
    } catch (err: any) {
      setStatus('error')
      setMessage(err?.message || 'Network error')
    }
  }

  return (
    <div id="mc_embed_shell" style={{ width: '100%' }}>
      <div id="mc_embed_signup">
        <form
          onSubmit={handleSubmit}
          className="validate"
          noValidate
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div id="mc_embed_signup_scroll">
            <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#1f2430', marginBottom: '0.5rem' }}>
              Sign up to get early access
            </h2>
            <p style={{ margin: '0.5rem 0 0 0', color: '#5f6a85', fontSize: '1rem' }}>Be the first to experience Genus</p>
          </div>

          <div className="mc-field-group" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="mce-EMAIL" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#5f6a85', fontWeight: 500 }}>
                Email Address
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  fontSize: '1rem',
                  border: '1px solid #d6dbe7',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  color: '#1f2430',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                aria-label="Email address"
              />
            </div>

            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              disabled={status === 'loading'}
              style={{
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: '#1f2430',
                border: 'none',
                borderRadius: '8px',
                cursor: status === 'loading' ? 'wait' : 'pointer',
                transition: 'background-color 0.2s ease, transform 0.1s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={handleBtnMouseEnter}
              onMouseLeave={handleBtnMouseLeave}
              onMouseDown={handleBtnMouseDown}
              onMouseUp={handleBtnMouseUp}
              aria-busy={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </div>

          <div id="mce-responses" className="clear">
            {message && (
              <div style={{ fontSize: '0.95rem', color: status === 'error' ? '#d32f2f' : '#388e3c' }}>{message}</div>
            )}
          </div>

          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_6bbf0cf6a5e82d78ad39f1769_9ee94aa0e3" tabIndex={-1} defaultValue="" />
          </div>
        </form>
      </div>
    </div>
  )
}
