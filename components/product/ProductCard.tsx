'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/shopify'
import { PreOrderBadge, InStockBadge } from './PreOrderBadge'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false)
  const [adding, setAdding] = useState(false)
  const { addToCart } = useCart()

  const primaryImage = product.images[0]
  const hoverImage = product.images[1] ?? product.images[0]
  const defaultVariant = product.variants[0]

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!defaultVariant || adding) return
    setAdding(true)
    await addToCart(defaultVariant.id)
    setAdding(false)
  }

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container — text overlaid */}
      <div className="relative aspect-square bg-nude rounded-2xl overflow-hidden">

        {/* Primary image */}
        {primaryImage ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText ?? product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover transition-opacity duration-500 ${hovered && hoverImage !== primaryImage ? 'opacity-0' : 'opacity-100'}`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-nude">
            <span className="text-mocha/30 text-5xl">💅</span>
          </div>
        )}

        {/* Hover image */}
        {hoverImage && hoverImage !== primaryImage && (
          <Image
            src={hoverImage.url}
            alt={hoverImage.altText ?? product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {/* Bottom gradient + text */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className="font-sans font-medium text-white uppercase tracking-wider leading-tight mb-0.5 line-clamp-2"
            style={{ fontSize: 'clamp(0.7rem, 1.6vw, 0.8rem)' }}
          >
            {product.title}
          </h3>
          <p className="text-white/70 text-xs font-light">
            {formatPrice(product.price, product.currencyCode)}
            {product.compareAtPrice && (
              <span className="line-through ml-2 text-white/40">
                {formatPrice(product.compareAtPrice, product.currencyCode)}
              </span>
            )}
          </p>
        </div>

        {/* Cart button — top right */}
        <button
          onClick={handleQuickAdd}
          disabled={!defaultVariant?.availableForSale || adding}
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-50 opacity-100 scale-100"
          style={{ backgroundColor: '#b4cbe6' }}
          aria-label="Add to bag"
        >
          {adding ? (
            <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          )}
        </button>

        {/* Pre-order badge */}
        {product.isPreOrder && (
          <div className="absolute top-3 left-3">
            <PreOrderBadge estimatedShipDate={product.estimatedShipDate} />
          </div>
        )}
      </div>
    </Link>
  )
}
