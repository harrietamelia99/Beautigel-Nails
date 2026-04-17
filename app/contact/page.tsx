'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="bg-ivory min-h-screen">

      {/* Page Header */}
      <section className="section-padding pt-28 md:pt-32 py-12 md:py-20 bg-nude border-b border-nude/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Get in Touch</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">Contact Us</h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm leading-relaxed max-w-md mx-auto">
            We'd love to hear from you. Fill in the form below and we'll get back to you within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-14 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">

          {/* Left — contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="label-text mb-3">Email Us</p>
              <a
                href="mailto:customerservice@beautigelnails.com"
                className="text-charcoal text-sm hover:text-blue-accent transition-colors"
              >
                customerservice@beautigelnails.com
              </a>
            </div>

            <div>
              <p className="label-text mb-3">Response Time</p>
              <p className="text-mocha text-sm leading-relaxed">
                We aim to respond to all enquiries within 1–2 business days (Monday to Friday).
              </p>
            </div>

            <div>
              <p className="label-text mb-3">Order Support</p>
              <p className="text-mocha text-sm leading-relaxed">
                For help with an existing order, please include your order number in your message so we can assist you faster.
              </p>
            </div>

            <div>
              <p className="label-text mb-3">Returns</p>
              <p className="text-mocha text-sm leading-relaxed">
                For returns and refund queries, please see our{' '}
                <a href="/shipping" className="text-charcoal underline underline-offset-2 hover:text-blue-accent transition-colors">
                  Returns Policy
                </a>{' '}
                before getting in touch.
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="label-text mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/beautigelnails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mocha hover:text-charcoal transition-colors"
                  style={{ color: '#b4cbe6' }}
                >
                  Instagram
                </a>
                <a
                  href="https://tiktok.com/@beautigelnails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mocha hover:text-charcoal transition-colors"
                  style={{ color: '#b4cbe6' }}
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-nude rounded-2xl px-8 py-14 text-center">
                <div className="mb-4 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#b4cbe6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
                  </svg>
                </div>
                <h2 className="section-heading text-xl text-charcoal mb-3">Message Sent</h2>
                <p className="text-mocha text-sm leading-relaxed max-w-xs mx-auto">
                  Thank you for reaching out. We'll get back to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text block mb-2" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white border border-nude text-charcoal placeholder:text-mocha px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-text block mb-2" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white border border-nude text-charcoal placeholder:text-mocha px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="label-text block mb-2" htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-nude text-charcoal px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-charcoal transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="order">Order enquiry</option>
                    <option value="returns">Returns & refunds</option>
                    <option value="shipping">Shipping & delivery</option>
                    <option value="product">Product question</option>
                    <option value="wholesale">Wholesale / stockist enquiry</option>
                    <option value="press">Press & collaborations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="label-text block mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full bg-white border border-nude text-charcoal placeholder:text-mocha px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-charcoal transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-[10px] text-mocha/60 text-center">
                  By submitting this form you agree to our{' '}
                  <a href="/privacy" className="underline underline-offset-2">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  )
}
