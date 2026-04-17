'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  createCart,
  addToCart,
  updateCartLines,
  removeCartLines,
  getCart,
} from '@/lib/shopify'
import { Cart, CartContextType } from '@/lib/types'

const CartContext = createContext<CartContextType | null>(null)

const CART_ID_KEY = 'beautigel_cart_id'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Initialise cart from localStorage on mount
  useEffect(() => {
    const storedCartId = localStorage.getItem(CART_ID_KEY)
    if (storedCartId) {
      getCart(storedCartId).then((existingCart) => {
        if (existingCart) {
          setCart(existingCart)
        } else {
          // Cart expired or invalid — clear
          localStorage.removeItem(CART_ID_KEY)
        }
      })
    }
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const getOrCreateCart = useCallback(async (): Promise<string | null> => {
    const storedCartId = localStorage.getItem(CART_ID_KEY)
    if (storedCartId) return storedCartId

    const newCart = await createCart()
    if (newCart) {
      localStorage.setItem(CART_ID_KEY, newCart.id)
      setCart(newCart)
      return newCart.id
    }
    return null
  }, [])

  const addToCartFn = useCallback(
    async (variantId: string, quantity = 1) => {
      setIsLoading(true)
      try {
        const cartId = await getOrCreateCart()
        if (!cartId) return

        const updatedCart = await addToCart(cartId, [{ merchandiseId: variantId, quantity }])
        if (updatedCart) {
          setCart(updatedCart)
          openCart()
        }
      } finally {
        setIsLoading(false)
      }
    },
    [getOrCreateCart, openCart]
  )

  const updateCartLine = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return
      setIsLoading(true)
      try {
        const updatedCart = await updateCartLines(cart.id, [{ id: lineId, quantity }])
        if (updatedCart) setCart(updatedCart)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const removeCartLine = useCallback(
    async (lineId: string) => {
      if (!cart) return
      setIsLoading(true)
      try {
        const updatedCart = await removeCartLines(cart.id, [lineId])
        if (updatedCart) setCart(updatedCart)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const value: CartContextType = {
    cart,
    isOpen,
    isLoading,
    openCart,
    closeCart,
    addToCart: addToCartFn,
    updateCartLine,
    removeCartLine,
    totalQuantity: cart?.totalQuantity ?? 0,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
