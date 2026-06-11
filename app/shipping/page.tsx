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
                  <p>Orders placed after 1:00 PM GMT will be processed the next business day (Monday to Friday).</p>
                  <p>Please note that during peak sale periods, there may be slight delays due to increased order volumes. We appreciate your patience and understanding.</p>
                  <p><strong className="text-charcoal font-medium">Order Confirmation:</strong> You will receive an order confirmation email once your order has been successfully placed, and another email when your order is dispatched, along with tracking information (if applicable).</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">2. Shipping Within the UK</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Shipping Rates:</strong> We offer flat-rate shipping within the UK. Shipping costs will be calculated and displayed at checkout.</p>
                  <p><strong className="text-charcoal font-medium">Delivery Time:</strong> Standard delivery within the UK typically takes <strong className="text-charcoal font-medium">2–5 business days</strong>. Expedited options are available for an additional charge, with delivery times ranging from 1–2 business days.</p>
                  <p><strong className="text-charcoal font-medium">Free Shipping:</strong> Orders over £35 qualify for free standard shipping within the UK.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">3. International Shipping</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Shipping Destinations:</strong> We ship worldwide. Please note that delivery times and shipping rates vary depending on the destination.</p>
                  <p><strong className="text-charcoal font-medium">Shipping Rates:</strong> International shipping costs will be calculated at checkout based on the destination and the weight of your order.</p>
                  <p><strong className="text-charcoal font-medium">Delivery Time:</strong> Delivery times vary depending on the destination country. Typically, international shipments take <strong className="text-charcoal font-medium">7–21 business days</strong>.</p>
                  <p><strong className="text-charcoal font-medium">Customs, Duties, and Taxes:</strong> All international orders may be subject to import duties, taxes, and other charges that are not included in our shipping rates. These charges are the buyer's responsibility and must be paid upon receipt of the shipment. Please check with your country's customs office to determine these additional costs before placing your order.</p>
                  <p>Please note that we are unable to ship to P.O. boxes, parcel lockers, or military addresses/bases for international orders.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">4. Tracking Your Order</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Tracking Information:</strong> Once your order has been dispatched, you will receive a tracking number via email. You can track your package through the carrier's website. Please note that tracking availability may vary depending on the destination.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">5. Lost or Damaged Packages</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Lost Packages:</strong> If your package is lost in transit, please contact us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a> as soon as possible. We will work with the carrier to locate your package or issue a replacement if necessary.</p>
                  <p><strong className="text-charcoal font-medium">Damaged Packages:</strong> If your package arrives damaged, please contact us within 48 hours of receipt with photos of the damage. We will arrange for a replacement or refund as needed.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">6. Delivery Issues</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Incorrect Address:</strong> Please ensure that your shipping address is correct at checkout. We are not responsible for orders shipped to incorrect or incomplete addresses provided by the customer. If an order is returned to us due to an incorrect address, additional shipping charges may apply to resend the order.</p>
                  <p><strong className="text-charcoal font-medium">Failed Delivery Attempts:</strong> If a delivery attempt fails due to no one being available to receive the package, the carrier may leave a notice for a redelivery attempt or collection from a local depot. It is the customer's responsibility to follow up on these notices.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">7. Returns and Exchanges</h3>
                <p className="text-mocha text-sm leading-relaxed">For information about returns and exchanges, please refer to our Returns Policy below.</p>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">8. Contact Us</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p>If you have any questions or concerns about your shipment, please contact us at:</p>
                  <p><strong className="text-charcoal font-medium">Email:</strong> <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a></p>
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
              At Beautigel Nails London, we are committed to providing high-quality products and exceptional customer service. However, due to the nature of our gel nail wraps and for hygiene reasons, we have the following returns policy.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">1. Non-Returnable Items</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Opened Products:</strong> Once the packaging of any gel nail wrap product has been opened, we are unable to accept returns or exchanges. This policy is in place to ensure the safety and hygiene of all our customers.</p>
                  <p><strong className="text-charcoal font-medium">Used Products:</strong> Products that have been used or partially used are also non-returnable.</p>
                  <p><strong className="text-charcoal font-medium">Change of Mind:</strong> Unfortunately, we do not accept returns or exchanges due to a change of mind. We kindly ask that you choose your products carefully. If you have any questions or concerns before making a purchase, please do not hesitate to contact us for assistance.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">2. Eligible Returns</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Unopened Products:</strong> If you wish to return an item, it must be in its original, unopened packaging and in the same condition that you received it. Please contact our customer service team within <strong className="text-charcoal font-medium">14 days</strong> of receiving your order to initiate a return.</p>
                  <p><strong className="text-charcoal font-medium">Damaged or Defective Products:</strong> In the unlikely event that you receive a damaged or defective product, please contact us within <strong className="text-charcoal font-medium">48 hours</strong> of delivery with photos of the product and packaging. We will arrange for a replacement or a refund.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">3. Return Process</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Contact Us:</strong> To initiate a return, please email us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a> with your order number and reason for return. Our team will provide you with instructions on how to proceed.</p>
                  <p><strong className="text-charcoal font-medium">Mainland UK:</strong> You can return your parcel using our returns portal anywhere within mainland UK.</p>
                  <p><strong className="text-charcoal font-medium">International Returns:</strong> Please send your parcels to the following address: Beautigel Nails London Returns, 37 Denby Drive, Baildon, Shipley, West Yorkshire, BD17 7PQ. Please note that return shipping costs are the responsibility of the customer, and we are unable to cover these expenses. To ensure the safe return of your item, please use a tracked shipping service.</p>
                  <p><strong className="text-charcoal font-medium">Shipping Costs:</strong> Customers are responsible for the return shipping costs. We recommend using a trackable shipping service or purchasing shipping insurance, as we cannot guarantee receipt of your returned item. Be sure to keep your postage receipt in a secure place until your refund has been processed.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">4. Refunds</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Refund Processing:</strong> Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within <strong className="text-charcoal font-medium">5–7 business days</strong>.</p>
                  <p><strong className="text-charcoal font-medium">Non-Refundable Items:</strong> Please note that any shipping fees paid at the time of your original order are non-refundable.</p>
                </div>
              </div>

              <div>
                <h3 className="section-heading text-sm text-charcoal mb-3">5. Exchanges</h3>
                <div className="text-mocha text-sm leading-relaxed space-y-2">
                  <p><strong className="text-charcoal font-medium">Product Exchanges:</strong> If you would like to exchange an unopened product for a different design or style, please follow the return process outlined above. Once your return is received and approved, we will process the exchange.</p>
                  <p>Thank you for shopping with Beautigel Nails London. If you have any questions about our returns policy, please contact us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a>. We are here to help.</p>
                </div>
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
