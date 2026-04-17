import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description: 'Beautigel Nails London shipping policy, delivery times, and returns information.',
}

export default function ShippingPage() {
  return (
    <div className="bg-ivory min-h-screen">

      {/* Page Header */}
      <section className="section-padding pt-28 md:pt-32 pb-12 md:pb-20 bg-nude border-b border-nude/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Policies</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">Shipping &amp; Returns</h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about how we ship your order and our returns process.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-14">

          {/* ── SHIPPING POLICY ── */}
          <div>
            <h2 className="section-heading text-2xl text-charcoal mb-8 pb-4 border-b border-nude">Shipping Policy</h2>

            <div className="space-y-10">

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">1. Processing Time</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p>All orders are processed within 1–2 business days (Monday to Friday). Orders placed on weekends or public holidays will be processed the next business day.</p>
                  <p>Orders placed after 1:00 PM GMT will be processed the next business day.</p>
                  <p>During peak sale periods there may be slight delays due to increased order volumes. We appreciate your patience.</p>
                  <p>You will receive an order confirmation email once your order has been placed, and a dispatch email with tracking information once it has shipped.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">2. Shipping Within the UK</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p>We offer flat-rate shipping within the UK. Shipping costs are calculated and displayed at checkout.</p>
                  <p>Standard delivery typically takes <strong className="text-charcoal font-medium">2–5 business days</strong>. Expedited options are available at checkout with delivery in 1–2 business days.</p>
                  <p><strong className="text-charcoal font-medium">Free standard shipping</strong> on all UK orders over £35.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">3. International Shipping</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p>We ship worldwide. Delivery times and shipping rates vary by destination and are calculated at checkout.</p>
                  <p>International shipments typically take <strong className="text-charcoal font-medium">7–21 business days</strong>.</p>
                  <p>All international orders may be subject to import duties, taxes, and customs charges. These are the buyer's responsibility and must be paid upon receipt. Please check with your country's customs office before ordering.</p>
                  <p>Please note we are unable to ship to P.O. boxes, parcel lockers, or military addresses for international orders.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">4. Tracking Your Order</h3>
                <p className="text-mocha text-sm leading-relaxed">Once your order has been dispatched, you will receive a tracking number by email. You can track your package through the carrier's website. Tracking availability may vary by destination.</p>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">5. Lost or Damaged Packages</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Lost packages:</strong> Please contact us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a> as soon as possible. We will work with the carrier to locate your package or issue a replacement.</p>
                  <p><strong className="text-charcoal font-medium">Damaged packages:</strong> Contact us within 48 hours of receipt with photos of the damage and we will arrange a replacement or refund.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">6. Delivery Issues</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Incorrect address:</strong> Please ensure your shipping address is correct at checkout. We are not responsible for orders shipped to an address provided incorrectly by the customer. If an order is returned to us due to an incorrect address, additional shipping charges may apply.</p>
                  <p><strong className="text-charcoal font-medium">Failed delivery:</strong> If a delivery attempt fails, the carrier may leave a notice for redelivery or collection from a local depot. It is the customer's responsibility to follow up on these notices.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-nude" />

          {/* ── RETURNS POLICY ── */}
          <div>
            <h2 className="section-heading text-2xl text-charcoal mb-8 pb-4 border-b border-nude">Returns Policy</h2>

            <p className="text-mocha text-sm leading-relaxed mb-10">
              At Beautigel Nails London, we are committed to high-quality products and exceptional customer service. Due to the nature of our gel nail wraps and for hygiene reasons, the following policy applies.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">1. Non-Returnable Items</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Opened products:</strong> Once packaging has been opened we are unable to accept returns or exchanges, for the safety and hygiene of all customers.</p>
                  <p><strong className="text-charcoal font-medium">Used products:</strong> Products that have been used or partially used are non-returnable.</p>
                  <p><strong className="text-charcoal font-medium">Change of mind:</strong> We do not accept returns due to a change of mind. Please choose carefully. If you have questions before purchasing, contact us and we will be happy to help.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">2. Eligible Returns</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Unopened products:</strong> Items must be in original, unopened packaging and in the same condition as received. Contact our team within <strong className="text-charcoal font-medium">14 days</strong> of receiving your order to initiate a return.</p>
                  <p><strong className="text-charcoal font-medium">Damaged or defective products:</strong> Contact us within <strong className="text-charcoal font-medium">48 hours</strong> of delivery with photos of the product and packaging. We will arrange a replacement or refund.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">3. Return Process</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p>Email us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a> with your order number and reason for return. Our team will provide instructions on how to proceed.</p>
                  <p><strong className="text-charcoal font-medium">Mainland UK:</strong> You can return your parcel using our returns portal.</p>
                  <p><strong className="text-charcoal font-medium">International returns:</strong> Please send parcels to: Beautigel Nails London Returns, 37 Denby Drive, Baildon, Shipley, West Yorkshire, BD17 7PQ.</p>
                  <p>Return shipping costs are the customer's responsibility. We recommend using a tracked service. Please keep your postage receipt until your refund has been processed.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">4. Refunds</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p>Once we receive and inspect your return, we will notify you of the outcome. If approved, a refund will be applied to your original payment method within <strong className="text-charcoal font-medium">5–7 business days</strong>.</p>
                  <p>Original shipping fees are non-refundable.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">5. Exchanges</h3>
                <p className="text-mocha text-sm leading-relaxed">If you would like to exchange an unopened product for a different design or style, follow the return process above. Once your return is received and approved, we will process the exchange.</p>
              </div>

            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-nude rounded-2xl p-8 text-center">
            <p className="label-text mb-3">Questions?</p>
            <h3 className="section-heading text-xl text-charcoal mb-3">We're Here to Help</h3>
            <p className="text-mocha text-sm mb-6">If you have any questions about your order, shipping, or our returns process, get in touch.</p>
            <a href="mailto:customerservice@beautigelnails.com" className="btn-primary inline-flex">
              customerservice@beautigelnails.com
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
