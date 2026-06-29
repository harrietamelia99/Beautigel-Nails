'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const BLUE = '#b4cbe6'

function SuccessContent() {
  const params = useSearchParams()
  const sessionId = params.get('session_id')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Brief delay so the animation feels intentional
    const t = setTimeout(() => setReady(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`flex flex-col items-center text-center max-w-md mx-auto transition-all duration-700 ${
        ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Tick circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-sm"
        style={{ backgroundColor: BLUE + '33' }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <p className="label-text mb-3" style={{ color: BLUE }}>Welcome to the Club</p>
      <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-5 leading-snug">
        You&apos;re now a Beautigel Member
      </h1>
      <p className="text-mocha text-base leading-relaxed mb-8">
        Your subscription is confirmed. Your first box will be on its way soon — we&apos;ll send you a
        dispatch confirmation by email.
      </p>

      {/* What happens next */}
      <div className="w-full bg-nude/60 rounded-2xl p-6 text-left mb-8 space-y-4">
        <p className="section-heading text-xs text-charcoal mb-2">What happens next</p>
        {[
          { n: '1', text: 'Check your inbox for a confirmation email with your order details.' },
          { n: '2', text: 'We&apos;ll pick and pack your chosen styles and dispatch within 1–2 business days.' },
          { n: '3', text: 'Your next delivery will be charged and dispatched automatically based on your chosen frequency.' },
          { n: '4', text: 'You can pause, skip or cancel anytime by contacting us at customerservice@beautigelnails.com.' },
        ].map((step) => (
          <div key={step.n} className="flex gap-4 items-start">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] font-bold mt-0.5"
              style={{ backgroundColor: BLUE }}
            >
              {step.n}
            </div>
            <p
              className="text-sm text-mocha leading-relaxed"
              dangerouslySetInnerHTML={{ __html: step.text }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Link href="/products" className="btn-primary flex-1 justify-center">
          Continue Shopping
        </Link>
        <Link href="/" className="btn-ghost flex-1 justify-center">
          Back to Home
        </Link>
      </div>

      {sessionId && (
        <p className="text-[10px] text-mocha/40 mt-6 tracking-wide">
          Reference: {sessionId.slice(-12).toUpperCase()}
        </p>
      )}
    </div>
  )
}

export default function SubscribeSuccess() {
  return (
    <div className="bg-ivory min-h-screen flex items-center justify-center section-padding py-32">
      <Suspense fallback={
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: BLUE, borderTopColor: 'transparent' }} />
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </div>
  )
}
