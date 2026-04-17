'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { CartItem } from './CartItem'
import { formatPrice } from '@/lib/shopify'
import Link from 'next/link'

export function CartDrawer() {
  const { cart, isOpen, closeCart, isLoading, totalQuantity } = useCart()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-nude">
              <div>
                <h2 className="font-sans text-sm tracking-widest uppercase text-charcoal">
                  Your Bag
                </h2>
                {totalQuantity > 0 && (
                  <p className="text-mocha text-xs mt-0.5">
                    {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                  </p>
                )}
              </div>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="text-mocha hover:text-charcoal transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Cart lines */}
            <div className="flex-1 overflow-y-auto px-6">
              {isLoading && (
                <div className="flex items-center justify-center py-10">
                  <div className="w-5 h-5 rounded-full border-2 border-blue-accent border-t-transparent animate-spin" />
                </div>
              )}

              {!isLoading && (!cart || cart.lines.length === 0) ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-5">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b4cbe6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <p className="font-sans text-xs tracking-widest uppercase text-charcoal mb-2">
                    Your bag is empty
                  </p>
                  <p className="text-mocha text-xs mb-8">
                    Discover our range of luxury gel nail wraps.
                  </p>
                  <Link href="/products" onClick={closeCart} className="btn-primary text-xs">
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="py-2">
                  {cart?.lines.map((line) => (
                    <CartItem key={line.id} line={line} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart && cart.lines.length > 0 && (
              <div className="px-6 py-6 border-t border-nude bg-ivory">
                {/* Shipping note */}
                <div className="flex items-center gap-2 mb-4 text-xs text-mocha">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span>Free UK shipping on orders over £40</span>
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-xs tracking-widest uppercase text-charcoal">
                    Subtotal
                  </span>
                  <span className="text-base font-medium text-charcoal">
                    {formatPrice(cart.subtotal, cart.currencyCode)}
                  </span>
                </div>

                {/* Checkout button */}
                <a
                  href={cart.checkoutUrl}
                  className="btn-primary w-full justify-center text-sm py-4"
                >
                  Checkout
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block text-center text-mocha text-[10px] mt-3 tracking-widest uppercase hover:text-charcoal transition-colors"
                >
                  View Full Bag
                </Link>

                <p className="text-center text-mocha text-[10px] mt-2 tracking-wide">
                  Taxes and shipping calculated at checkout
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
