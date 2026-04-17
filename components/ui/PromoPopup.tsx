'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MODEL_IMAGE = {
  src: '/products/cherry-blossom.png',
  alt: 'Cherry Blossom gel nail wraps by Beautigel Nails London',
}

export function PromoPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('promo_dismissed')
    if (!dismissed) {
      const t = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('promo_dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full flex shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fadeInScale 0.25s ease-out' }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 text-charcoal/50 hover:text-charcoal transition-colors z-10"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Left — offer text */}
        <div className="flex-1 px-8 py-10 flex flex-col items-center justify-center text-center">
          <p className="text-[10px] tracking-widest uppercase text-mocha mb-3 font-medium">
            Beautigel Nails
          </p>
          <p className="text-sm text-charcoal mb-2">New here? Get</p>
          <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-3">
            10% Off Your<br />First Order
          </h2>
          <p className="text-xs text-mocha tracking-widest uppercase mb-6">
            Use code: <span className="font-bold text-charcoal">WELCOME10</span>
          </p>
          <Link href="/products" onClick={dismiss} className="btn-primary w-full mb-3">
            Shop Now
          </Link>
          <button
            onClick={dismiss}
            className="text-xs text-mocha underline underline-offset-4 hover:text-charcoal transition-colors"
          >
            No thanks
          </button>
        </div>

        {/* Right — model image */}
        <div className="hidden sm:block w-44 flex-shrink-0 relative" style={{ minHeight: '280px' }}>
          <Image
            src={MODEL_IMAGE.src}
            alt={MODEL_IMAGE.alt}
            fill
            sizes="176px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}
