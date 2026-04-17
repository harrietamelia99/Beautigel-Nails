interface PreOrderBadgeProps {
  estimatedShipDate?: string | null
  className?: string
  size?: 'sm' | 'md'
}

export function PreOrderBadge({
  estimatedShipDate,
  className = '',
  size = 'sm',
}: PreOrderBadgeProps) {
  const textSize = size === 'sm' ? 'text-[9px]' : 'text-xs'

  return (
    <div className={`inline-flex flex-col items-start gap-0.5 ${className}`}>
      <span
        className={`bg-charcoal text-ivory px-2.5 py-1 rounded-full ${textSize} tracking-widest uppercase font-medium`}
      >
        Pre-Order
      </span>
      {estimatedShipDate && (
        <span className="text-[9px] text-mocha tracking-wide pl-1">
          Ships {estimatedShipDate}
        </span>
      )}
    </div>
  )
}

export function InStockBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[9px] tracking-widest uppercase font-medium text-white ${className}`}
      style={{ backgroundColor: '#b4cbe6' }}
    >
      In Stock
    </span>
  )
}
