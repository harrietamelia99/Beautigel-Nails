'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PRODUCT_IMAGE = {
  src: '/products/starter-kit.png',
  alt: 'Beautigel Nails starter kit — UV lamp, gel nail wraps and cuticle oil',
}

// Starter Kit contents — price to be confirmed once Shopify kit product is live
const BUNDLES = [
  {
    id: 'starter-kit',
    label: 'The Ultimate Starter Kit',
    price: '[STARTER KIT PRICE TBC]',
    originalPrice: null,
    perSet: '2× Gel Nail Wraps · UV Lamp · Cuticle Oil',
    badge: 'Everything You Need',
    gifts: [
      '2× Gel Nail Wrap boxes (your choice of style)',
      '1× UV Lamp (cures in 60–90 seconds)',
      '1× Cuticle Oil (Strawberry, Peach, Lavender or Rose)',
    ],
  },
]

export function FeaturedKit() {
  const [selected, setSelected] = useState('starter-kit')

  const active = BUNDLES.find((b) => b.id === selected)!

  return (
    <section className="section-py section-padding bg-nude/40 border-t border-nude/60">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-10">
        <p className="label-text mb-3">Build Your Kit</p>
        <h2 className="section-heading text-2xl md:text-3xl lg:text-4xl text-charcoal">The Ultimate Starter Kit</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 items-start">

        {/* Product image — left column on desktop */}
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shrink-0 md:sticky md:top-28">
          <Image
            src={PRODUCT_IMAGE.src}
            alt={PRODUCT_IMAGE.alt}
            width={800}
            height={800}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>

        {/* Right column — kit selector */}
        <div className="w-full md:w-1/2">

        {/* Step 1 */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-7 h-7 rounded-full border border-charcoal flex items-center justify-center text-xs font-bold">1</span>
          <h2 className="section-heading text-xs text-charcoal">The Ultimate Starter Kit</h2>
        </div>

        <div className="space-y-3 mb-10">
          {BUNDLES.map((bundle) => (
            <button
              key={bundle.id}
              onClick={() => setSelected(bundle.id)}
              className={`w-full text-left border rounded-2xl p-4 transition-all ${
                selected === bundle.id
                  ? 'border-charcoal bg-white'
                  : 'border-nude bg-white/60 hover:border-mocha'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {/* Radio */}
                  <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selected === bundle.id ? 'border-charcoal' : 'border-nude'
                  }`}>
                    {selected === bundle.id && (
                      <div className="w-2 h-2 rounded-full bg-charcoal" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-charcoal uppercase tracking-wide">{bundle.label}</span>
                      {bundle.badge && (
                        <span className="text-[10px] bg-ivory border border-nude px-2 py-0.5 tracking-wider uppercase font-medium text-charcoal">
                          {bundle.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-mocha mt-0.5">{bundle.perSet}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-sm text-charcoal">{bundle.price}</p>
                  {bundle.originalPrice && (
                    <p className="text-xs text-mocha line-through">{bundle.originalPrice}</p>
                  )}
                </div>
              </div>

              {/* What&apos;s included */}
              {bundle.gifts.length > 0 && selected === bundle.id && (
                <div className="mt-4 pt-4 border-t border-nude grid grid-cols-2 gap-2">
                  {bundle.gifts.map((gift) => (
                    <div key={gift} className="flex items-center gap-2 text-xs text-charcoal/70">
                      <span className="text-blue-accent font-bold">+</span>
                      {gift}
                    </div>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Step 2 label */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full border border-charcoal flex items-center justify-center text-xs font-bold">2</span>
            <h2 className="section-heading text-xs text-charcoal">Choose Your Wrap Styles</h2>
          </div>
          <span className="text-[10px] tracking-widest uppercase text-mocha">[STYLE COUNT TBC]</span>
        </div>

        {/* CTA */}
        <Link href="/products/starter-kit" className="btn-primary w-full justify-between mt-6">
          <span>Build Your Kit</span>
          <span className="font-bold">{active.price} →</span>
        </Link>

        {/* USPs */}
        <div className="mt-6 border border-nude rounded-2xl p-4 flex items-center gap-4 bg-white">
          <div className="w-12 h-12 rounded-full border-2 border-nude flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-mocha">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-charcoal mb-1">Affordable Luxury. Salon-Quality at Home.</p>
            <p className="text-xs text-mocha leading-relaxed">
              Polished, salon-effect nails from the comfort of home. No cost, time, or damage of regular salon visits.
            </p>
          </div>
        </div>

        </div>{/* end right column */}
      </div>
      </div>
    </section>
  )
}
