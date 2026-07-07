import Link from 'next/link'

export const metadata = { title: 'Order Confirmed — Beautigel Nails London' }

export default function OrderSuccessPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-nude flex items-center justify-center mx-auto mb-8">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b4cbe6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className="section-heading text-2xl mb-4">Order Confirmed</h1>
        <p className="text-mocha text-sm mb-2">
          Thank you for your order! You'll receive a confirmation email shortly.
        </p>
        <p className="text-mocha text-xs mb-10">
          Your Beautigel nail wraps will be with you within 3–5 working days.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
