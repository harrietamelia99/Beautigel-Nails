'use client'

import { useState } from 'react'

export function EmailSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section className="bg-ivory border-t border-nude/60 section-padding py-10 md:py-12">
      <div className="max-w-4xl mx-auto bg-nude rounded-2xl px-8 py-10 md:px-20 md:py-14 text-center">
        <p className="label-text mb-4">Stay in the Loop</p>
        <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-3">
          Join the Beautigel Community
        </h2>
        <p className="text-sm text-mocha leading-relaxed mb-8 max-w-sm mx-auto">
          Be first to hear about new collections, offers, and nail inspiration. Plus get 10% off your first order.
        </p>

        {submitted ? (
          <p className="text-sm text-charcoal font-medium tracking-wide">
            ✓ You&apos;re signed up. Check your inbox for your discount.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white border border-nude border-r-0 text-charcoal placeholder:text-mocha px-4 py-3 text-sm focus:outline-none focus:border-charcoal transition-colors rounded-l-full"
            />
            <button
              type="submit"
              disabled={loading}
              className="text-charcoal text-xs tracking-widest uppercase font-medium px-6 py-3 rounded-r-full transition-colors shrink-0 disabled:opacity-60"
              style={{ backgroundColor: '#b4cbe6' }}
            >
              {loading ? '...' : 'Submit'}
            </button>
          </form>
        )}
        <p className="text-[10px] text-mocha/60 mt-4">By subscribing you agree to receive marketing emails from Beautigel Nails London.</p>
      </div>
    </section>
  )
}
