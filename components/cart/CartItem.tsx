'use client'

import Image from 'next/image'
import { CartLine } from '@/lib/types'
import { formatPrice } from '@/lib/shopify'
import { useCart } from '@/context/CartContext'

interface CartItemProps {
  line: CartLine
}

export function CartItem({ line }: CartItemProps) {
  const { updateCartLine, removeCartLine } = useCart()

  const handleDecrement = () => {
    if (line.quantity <= 1) {
      removeCartLine(line.id)
    } else {
      updateCartLine(line.id, line.quantity - 1)
    }
  }

  const handleIncrement = () => {
    updateCartLine(line.id, line.quantity + 1)
  }

  const handleRemove = () => removeCartLine(line.id)

  return (
    <div className="flex gap-4 py-5 border-b border-nude last:border-b-0">
      {/* Image */}
      <div className="w-20 h-24 bg-nude rounded-2xl overflow-hidden shrink-0 relative">
        {line.image ? (
          <Image
            src={line.image.url}
            alt={line.image.altText ?? line.productTitle}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-mocha/50 text-2xl">
            💅
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-sans text-xs tracking-wide uppercase text-charcoal leading-snug line-clamp-2">
            {line.productTitle}
          </h3>
          <button
            onClick={handleRemove}
            aria-label="Remove item"
            className="text-mocha hover:text-charcoal transition-colors shrink-0 mt-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Variant */}
        {line.variantTitle && line.variantTitle !== 'Default Title' && (
          <p className="text-mocha text-[10px] tracking-wide mb-3">{line.variantTitle}</p>
        )}

        {/* Quantity + Price row */}
        <div className="flex items-center justify-between">
          {/* Stepper */}
          <div className="flex items-center border border-nude rounded-full overflow-hidden">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-nude transition-colors text-sm"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center text-xs font-medium text-charcoal">
              {line.quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-nude transition-colors text-sm"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Price */}
          <p className="text-sm font-medium text-charcoal">
            {formatPrice(line.totalPrice, line.currencyCode)}
          </p>
        </div>
      </div>
    </div>
  )
}
