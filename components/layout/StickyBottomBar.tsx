'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function StickyBottomBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ backgroundColor: '#b4cbe6' }}
    >
      <div className="section-padding flex items-center justify-between py-3.5 max-w-7xl mx-auto">
        <p className="text-xs tracking-widest uppercase font-medium text-charcoal">
          <span className="font-black">10% Off Your First Order</span>
          <span className="text-charcoal/50 mx-2">·</span>
          <span className="text-charcoal/70">Use Code: WELCOME10</span>
        </p>
        <Link
          href="/products"
          className="bg-charcoal text-ivory text-xs tracking-widest uppercase font-bold px-6 py-2.5 rounded-full hover:bg-charcoal/80 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}
