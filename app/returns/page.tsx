import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns & Refunds · Beautigel Nails London',
  description: 'Beautigel Nails London returns and refunds policy. Learn how to return products and request a refund.',
}

export default function ReturnsPage() {
  return (
    <div className="bg-ivory min-h-screen">

      {/* Page Header */}
      <section className="section-padding pt-28 md:pt-32 pb-12 md:pb-20 bg-nude border-b border-nude/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Policies</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">Returns &amp; Refunds</h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm leading-relaxed max-w-xl mx-auto">
            At Beautigel Nails London, we are committed to providing high-quality products and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-10">

          <div className="text-mocha text-sm leading-relaxed">
            <p>Due to the nature of our gel nail wraps and for hygiene reasons, we have the following returns and refunds policy. Please read it carefully before placing your order.</p>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">1. Non-Returnable Items</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p><strong className="text-charcoal font-medium">Opened Products:</strong> Once the packaging of any gel nail wrap product has been opened, we are unable to accept returns or exchanges. This policy is in place to ensure the safety and hygiene of all our customers.</p>
              <p><strong className="text-charcoal font-medium">Used Products:</strong> Products that have been used or partially used are also non-returnable.</p>
              <p><strong className="text-charcoal font-medium">Change of Mind:</strong> Unfortunately, we do not accept returns or exchanges due to a change of mind. We kindly ask that you choose your products carefully. If you have any questions or concerns before making a purchase, please do not hesitate to contact us for assistance.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">2. Eligible Returns</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p><strong className="text-charcoal font-medium">Unopened Products:</strong> If you wish to return an item, it must be in its original, unopened packaging and in the same condition that you received it. Please contact our customer service team within <strong className="text-charcoal font-medium">14 days</strong> of receiving your order to initiate a return.</p>
              <p><strong className="text-charcoal font-medium">Damaged or Defective Products:</strong> In the unlikely event that you receive a damaged or defective product, please contact us within <strong className="text-charcoal font-medium">48 hours</strong> of delivery with photos of the product and packaging. We will arrange for a replacement or a refund.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">3. Return Process</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p><strong className="text-charcoal font-medium">Contact Us:</strong> To initiate a return, please email us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a> with your order number and reason for return. Our team will provide you with instructions on how to proceed.</p>
              <p><strong className="text-charcoal font-medium">Mainland UK:</strong> You can return your parcel using our returns portal anywhere within mainland UK.</p>
              <p><strong className="text-charcoal font-medium">International Returns:</strong> Please send your parcels to the following address:</p>
              <div className="bg-nude/60 rounded-xl p-4 font-sans text-xs text-charcoal leading-relaxed not-italic">
                Beautigel Nails London Returns<br />
                37 Denby Drive<br />
                Baildon, Shipley<br />
                West Yorkshire<br />
                BD17 7PQ
              </div>
              <p><strong className="text-charcoal font-medium">Shipping Costs:</strong> Customers are responsible for return shipping costs. We recommend using a trackable shipping service or purchasing shipping insurance, as we cannot guarantee receipt of your returned item. Please keep your postage receipt until your refund has been processed.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">4. Refunds</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p><strong className="text-charcoal font-medium">Refund Processing:</strong> Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within <strong className="text-charcoal font-medium">5–7 business days</strong>.</p>
              <p><strong className="text-charcoal font-medium">Non-Refundable Items:</strong> Please note that any shipping fees paid at the time of your original order are non-refundable.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">5. Exchanges</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p><strong className="text-charcoal font-medium">Product Exchanges:</strong> If you would like to exchange an unopened product for a different design or style, please follow the return process outlined above. Once your return is received and approved, we will process the exchange.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">6. 30-Day Money Back Guarantee</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>We stand behind the quality of our products. If you are not completely satisfied with your purchase, please contact us within <strong className="text-charcoal font-medium">30 days</strong> of delivery and we will do our best to make it right, whether that is a replacement, exchange, or refund.</p>
              <p>This guarantee applies to products that have been used as directed. Please contact us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a> to discuss your situation.</p>
            </div>
          </div>

          {/* Key points summary */}
          <div className="bg-nude/60 rounded-2xl p-6 md:p-8">
            <h3 className="section-heading text-sm text-charcoal mb-5">Quick Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '✓', label: 'Unopened items', detail: 'Returnable within 14 days' },
                { icon: '✓', label: 'Damaged / defective', detail: 'Contact us within 48 hours' },
                { icon: '✓', label: 'Refund timeline', detail: '5–7 business days once approved' },
                { icon: '✓', label: '30-day guarantee', detail: 'We will make it right' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white" style={{ backgroundColor: '#b4cbe6' }}>
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-charcoal text-xs font-medium">{item.label}</p>
                    <p className="text-mocha text-xs">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-nude rounded-2xl p-8 text-center">
            <p className="label-text mb-3">Need help?</p>
            <h3 className="section-heading text-xl text-charcoal mb-3">We&apos;re Here to Help</h3>
            <p className="text-mocha text-sm mb-6">
              If you have any questions about a return, refund, or your order, please get in touch with our team.
            </p>
            <a href="mailto:customerservice@beautigelnails.com" className="btn-primary inline-flex">
              customerservice@beautigelnails.com
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
