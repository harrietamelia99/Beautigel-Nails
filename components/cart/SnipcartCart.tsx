'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CartItem {
  uniqueId: string
  name: string
  price: number
  quantity: number
  totalPrice: number
  image: string | null
}

declare global {
  interface Window {
    Snipcart: any
    _snipcartOriginalOpen?: () => void
  }
}

export function SnipcartCart() {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  const syncCart = useCallback(() => {
    if (typeof window === 'undefined' || !window.Snipcart) return
    try {
      const state = window.Snipcart.store.getState()
      const cartItems: CartItem[] = state.cart?.items?.items ?? []
      setItems(cartItems)
      setTotal(state.cart?.total ?? 0)
    } catch {}
  }, [])

  useEffect(() => {
    const onReady = () => {
      syncCart()
      window.Snipcart.store.subscribe(syncCart)

      // Intercept Snipcart's native cart open — show our drawer instead
      const originalOpen = window.Snipcart.api.theme.cart.open.bind(
        window.Snipcart.api.theme.cart
      )
      window._snipcartOriginalOpen = originalOpen
      window.Snipcart.api.theme.cart.open = () => {
        syncCart()
        setIsOpen(true)
      }
    }

    const onOpen = () => { syncCart(); setIsOpen(true) }
    document.addEventListener('snipcart.ready', onReady)
    document.addEventListener('beautigel:openCart', onOpen)
    return () => {
      document.removeEventListener('snipcart.ready', onReady)
      document.removeEventListener('beautigel:openCart', onOpen)
    }
  }, [syncCart])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  const updateQty = (uniqueId: string, qty: number) => {
    if (!window.Snipcart) return
    if (qty <= 0) {
      window.Snipcart.api.items.remove(uniqueId)
    } else {
      window.Snipcart.api.items.update({ uniqueId, quantity: qty })
    }
    setTimeout(syncCart, 300)
  }

  const handleCheckout = () => {
    close()
    // Use Snipcart's original open to go straight to checkout
    setTimeout(() => window._snipcartOriginalOpen?.(), 300)
  }

  const totalQty = items.reduce((s, i) => s + i.quantity, 0)

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
            className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-[9998]"
            onClick={close}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[9999] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-nude">
              <div>
                <h2 className="font-sans text-xs tracking-widest uppercase text-charcoal">
                  Your Bag
                </h2>
                {totalQty > 0 && (
                  <p className="text-mocha text-xs mt-0.5">
                    {totalQty} {totalQty === 1 ? 'item' : 'items'}
                  </p>
                )}
              </div>
              <button onClick={close} aria-label="Close cart" className="text-mocha hover:text-charcoal transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b4cbe6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  <p className="font-sans text-xs tracking-widest uppercase text-charcoal mb-2">Your bag is empty</p>
                  <p className="text-mocha text-xs mb-8">Discover our range of luxury gel nail wraps.</p>
                  <Link href="/products" onClick={close} className="btn-primary text-xs">Shop Now</Link>
                </div>
              ) : (
                <div className="py-4 divide-y divide-nude">
                  {items.map((item) => (
                    <div key={item.uniqueId} className="flex gap-4 py-5">
                      <div className="w-20 h-24 bg-nude rounded-lg overflow-hidden shrink-0 relative">
                        {item.image
                          ? <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                          : <div className="w-full h-full flex items-center justify-center text-2xl">💅</div>
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal leading-snug">{item.name}</h3>
                          <button
                            onClick={() => updateQty(item.uniqueId, 0)}
                            aria-label="Remove"
                            className="text-mocha hover:text-charcoal transition-colors shrink-0"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-nude rounded-full overflow-hidden">
                            <button onClick={() => updateQty(item.uniqueId, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-nude transition-colors">−</button>
                            <span className="w-7 text-center text-xs font-medium text-charcoal">{item.quantity}</span>
                            <button onClick={() => updateQty(item.uniqueId, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-nude transition-colors">+</button>
                          </div>
                          <p className="text-sm font-medium text-charcoal">£{item.totalPrice.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-nude bg-ivory">
                <div className="flex items-center gap-2 mb-4 text-xs text-mocha">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span>Free UK shipping on orders over £35</span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-xs tracking-widest uppercase text-charcoal">Total</span>
                  <span className="text-base font-medium text-charcoal">£{total.toFixed(2)}</span>
                </div>
                <button onClick={handleCheckout} className="btn-primary w-full justify-center text-sm py-4">
                  Checkout
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-center text-mocha text-[10px] mt-3 tracking-wide">
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
