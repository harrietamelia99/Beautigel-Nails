'use client'

import { useState, useMemo } from 'react'
import { Product } from '@/lib/types'
import { ProductCard } from './ProductCard'

const CATEGORIES = [
  { label: 'All', value: '' },
  { label: 'Gel Wraps', value: 'Gel Wraps' },
  { label: 'Starter Kit', value: 'Starter Kit' },
  { label: 'UV Lamp', value: 'UV Lamp' },
  { label: 'Cuticle Oil', value: 'Cuticle Oil' },
]

interface ProductGridProps {
  products: Product[]
  showFilters?: boolean
  title?: string
  subtitle?: string
}

export function ProductGrid({
  products,
  showFilters = false,
  title,
  subtitle,
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState('')

  const filtered = useMemo(() => {
    if (!activeCategory) return products
    return products.filter(
      (p) =>
        p.productType === activeCategory ||
        p.tags.includes(activeCategory.toLowerCase().replace(' ', '-'))
    )
  }, [products, activeCategory])

  return (
    <div>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {subtitle && <p className="label-text text-mocha mb-4">{subtitle}</p>}
          {title && (
            <h2 className="section-heading text-3xl md:text-4xl text-charcoal">{title}</h2>
          )}
        </div>
      )}

      {/* Filter bar */}
      {showFilters && (
        <div className="flex items-center flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-charcoal text-ivory'
                  : 'border border-nude text-mocha hover:border-charcoal hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-mocha text-sm tracking-wide">No products found.</p>
        </div>
      )}
    </div>
  )
}
