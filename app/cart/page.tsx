'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/shopify'

const BLUE = '#b4cbe6'
const FREE_SHIPPING_THRESHOLD = 35

export default function CartPage() {
  const { cart, isLoading, updateCartLine, removeCartLine } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const subtotal = parseFloat(cart?.subtotal ?? '0')
  const shippingFree = subtotal >= FREE_SHIPPING_THRESHOLD
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal

  const handlePromo = (e: React.FormEvent) => {
    e.preventDefault()
    if (promoCode.toUpperCase() === 'WELCOME10') setPromoApplied(true)
  }

  if (isLoading) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center bg-ivory">
        <div className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: BLUE, borderTopColor: 'transparent' }} />
      </div>
    )
  }

  // Empty state
  if (!cart || cart.lines.length === 0) {
    return (
      <div className="pt-32 min-h-screen bg-ivory flex flex-col items-center justify-center text-center px-6">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <h1 className="section-heading text-2xl text-charcoal mb-3">Your Bag is Empty</h1>
        <p className="text-mocha text-sm mb-8 max-w-xs">Looks like you haven't added anything yet. Discover our range of salon-quality gel nail wraps.</p>
        <Link href="/products" className="btn-primary">Shop Now</Link>
      </div>
    )
  }

  return (
    <div className="bg-ivory min-h-screen">
      <div className="section-padding pt-24 md:pt-32 pb-16 max-w-7xl mx-auto">

        {/* Page title */}
        <div className="mb-10">
          <p className="label-text mb-2">Your Selections</p>
          <h1 className="section-heading text-3xl md:text-4xl text-charcoal">
            Your Bag
          </h1>
          <p className="text-mocha text-xs mt-2">{cart.totalQuantity} {cart.totalQuantity === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* ── Left: Items ── */}
          <div className="lg:col-span-2">

            {/* Free shipping progress */}
            <div className="bg-nude rounded-2xl px-5 py-4 mb-8">
              {shippingFree ? (
                <p className="text-xs text-charcoal tracking-wide flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={BLUE}><path d="M20 6h-2.18c.07-.44.18-.86.18-1.3 0-2.76-2.24-5-5-5S8 1.94 8 4.7c0 .44.11.86.18 1.3H6C4.9 6 4 6.9 4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>
                  You've unlocked free UK shipping!
                </p>
              ) : (
                <>
                  <p className="text-xs text-mocha mb-2">
                    Add <span className="font-medium text-charcoal">£{remaining.toFixed(2)}</span> more for free UK shipping
                  </p>
                  <div className="h-1.5 bg-nude/60 rounded-full overflow-hidden border border-nude">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%`, backgroundColor: BLUE }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Cart lines */}
            <div className="divide-y divide-nude">
              {cart.lines.map((line) => (
                <div key={line.id} className="flex gap-5 py-6">
                  {/* Image */}
                  <Link href={`/products/${line.productHandle}`} className="shrink-0">
                    <div className="w-24 h-28 bg-nude rounded-2xl overflow-hidden relative">
                      {line.image ? (
                        <Image src={line.image.url} alt={line.image.altText ?? line.productTitle} fill sizes="96px" className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-mocha/30 text-3xl">💅</div>
                      )}
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <Link href={`/products/${line.productHandle}`}>
                        <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal leading-snug hover:opacity-70 transition-opacity">
                          {line.productTitle}
                        </h3>
                      </Link>
                      <button
                        onClick={() => removeCartLine(line.id)}
                        aria-label="Remove item"
                        className="text-mocha hover:text-charcoal transition-colors shrink-0"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>

                    {line.variantTitle && line.variantTitle !== 'Default Title' && (
                      <p className="text-mocha text-[10px] tracking-wide mb-3">{line.variantTitle}</p>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      {/* Qty stepper */}
                      <div className="flex items-center border border-nude rounded-full overflow-hidden">
                        <button
                          onClick={() => line.quantity <= 1 ? removeCartLine(line.id) : updateCartLine(line.id, line.quantity - 1)}
                          className="w-9 h-9 flex items-center justify-center text-charcoal hover:bg-nude transition-colors text-sm"
                        >−</button>
                        <span className="w-8 text-center text-xs font-medium text-charcoal">{line.quantity}</span>
                        <button
                          onClick={() => updateCartLine(line.id, line.quantity + 1)}
                          className="w-9 h-9 flex items-center justify-center text-charcoal hover:bg-nude transition-colors text-sm"
                        >+</button>
                      </div>
                      <p className="text-sm font-medium text-charcoal">
                        {formatPrice(line.totalPrice, line.currencyCode)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/products" className="btn-secondary text-xs">Continue Shopping</Link>
            </div>
          </div>

          {/* ── Right: Order Summary ── */}
          <div className="lg:col-span-1">
            <div className="bg-nude rounded-2xl p-6 sticky top-28">
              <h2 className="section-heading text-sm text-charcoal mb-6">Order Summary</h2>

              {/* Line totals */}
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-xs text-mocha">
                  <span>Subtotal</span>
                  <span className="text-charcoal font-medium">{formatPrice(cart.subtotal, cart.currencyCode)}</span>
                </div>
                <div className="flex justify-between text-xs text-mocha">
                  <span>Shipping</span>
                  <span className={shippingFree ? 'text-charcoal font-medium' : 'text-mocha'}>
                    {shippingFree ? 'Free' : 'Calculated at checkout'}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-xs">
                    <span className="text-mocha">Discount (WELCOME10)</span>
                    <span className="text-charcoal font-medium">−10%</span>
                  </div>
                )}
              </div>

              <div className="h-px bg-nude/80 border-t border-nude mb-5" />

              {/* Total */}
              <div className="flex justify-between mb-6">
                <span className="label-text text-charcoal">Total</span>
                <span className="text-lg font-light text-charcoal">{formatPrice(cart.total, cart.currencyCode)}</span>
              </div>

              {/* Promo code */}
              {!promoApplied ? (
                <form onSubmit={handlePromo} className="flex gap-0 mb-6">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Discount code"
                    className="flex-1 bg-white border border-nude border-r-0 text-charcoal placeholder:text-mocha px-4 py-2.5 text-xs focus:outline-none focus:border-charcoal transition-colors rounded-l-full"
                  />
                  <button type="submit" className="text-charcoal text-[10px] tracking-widest uppercase font-medium px-4 py-2.5 rounded-r-full border border-nude border-l-0 bg-white hover:bg-nude transition-colors shrink-0">
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-xs text-charcoal mb-6 bg-white rounded-full px-4 py-2.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={BLUE}><path d="M20 6L9 17l-5-5"/></svg>
                  WELCOME10 applied
                </div>
              )}

              {/* Checkout CTA */}
              <a
                href={cart.checkoutUrl}
                className="btn-primary w-full justify-center py-4 text-sm mb-3"
              >
                Proceed to Checkout
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <p className="text-center text-mocha text-[10px] tracking-wide mb-6">
                Taxes and shipping calculated at checkout
              </p>

              {/* Trust strip */}
              <div className="space-y-2.5 pt-5 border-t border-nude">
                {[
                  { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill={BLUE}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'Secure checkout' },
                  { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill={BLUE}><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg>, text: 'Free UK shipping over £35' },
                  { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill={BLUE}><path d="M19 7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 11H5V9h14v9zM1 5h22v2H1z"/></svg>, text: 'Easy returns within 14 days' },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-2.5">
                    {t.icon}
                    <span className="text-[10px] text-mocha tracking-wide">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
