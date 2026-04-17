import Link from 'next/link'

const BLUE = '#b4cbe6'

export default function OrderConfirmedPage() {
  return (
    <div className="bg-ivory min-h-screen flex items-center justify-center section-padding py-20">
      <div className="max-w-lg w-full text-center">

        {/* Icon */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: BLUE }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        <p className="label-text mb-3">Thank You</p>
        <h1 className="section-heading text-3xl md:text-4xl text-charcoal mb-4">
          Order Confirmed
        </h1>
        <p className="text-mocha text-sm leading-relaxed mb-2 max-w-sm mx-auto">
          Your order has been placed and we're getting it ready. You'll receive a confirmation email shortly.
        </p>
        <p className="text-mocha text-xs mb-10">Check your spam folder if it doesn't arrive within a few minutes.</p>

        {/* What's next */}
        <div className="bg-nude rounded-2xl p-6 text-left mb-8 space-y-4">
          <p className="label-text text-charcoal mb-2">What Happens Next</p>
          {[
            { step: '1', text: "You'll receive an order confirmation email with your details." },
            { step: '2', text: "We'll prepare and dispatch your order within 1-2 business days." },
            { step: '3', text: "You'll get a shipping notification with tracking information." },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5" style={{ backgroundColor: BLUE }}>
                {s.step}
              </span>
              <p className="text-xs text-mocha leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/products" className="btn-primary">Continue Shopping</Link>
          <Link href="/how-to" className="btn-secondary">How to Apply</Link>
        </div>

        <p className="text-mocha text-xs mt-8">
          Questions? <Link href="/contact" className="text-charcoal underline underline-offset-2 hover:opacity-70 transition-opacity">Contact us</Link>
        </p>

      </div>
    </div>
  )
}
