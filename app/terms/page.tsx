import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions · Beautigel Nails London',
  description: 'Terms and conditions for using the Beautigel Nails London website and purchasing our products.',
}

export default function TermsPage() {
  return (
    <div className="bg-ivory min-h-screen">

      {/* Page Header */}
      <section className="section-padding pt-28 md:pt-32 pb-12 md:pb-20 bg-nude border-b border-nude/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Legal</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">Terms &amp; Conditions</h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-10">

          <div className="text-mocha text-sm leading-relaxed">
            <p>Please read these Terms and Conditions carefully before using the Beautigel Nails London website or placing an order. By accessing our website or making a purchase, you agree to be bound by these terms. If you do not agree, please do not use our website.</p>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">1. About Us</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>Beautigel Nails London is a UK-based beauty brand specialising in UV-cured semi-cured gel nail wraps and nail care products.</p>
              <p><strong className="text-charcoal font-medium">Email:</strong> <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a></p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">2. Use of This Website</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>You may use this website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Use the site in any way that breaches applicable local, national, or international law or regulation</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
                <li>Reproduce, duplicate, copy, or resell any part of our website without our express written consent</li>
              </ul>
              <p>We reserve the right to restrict or terminate access to our website at any time without notice.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">3. Products and Pricing</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>All products are subject to availability. We reserve the right to discontinue any product at any time.</p>
              <p>Prices are displayed in British Pounds (GBP) and are inclusive of VAT where applicable. Prices are subject to change without notice. The price you pay is the price shown at the time of checkout.</p>
              <p>Product images are for illustrative purposes only. While we make every effort to display colours and finishes accurately, the appearance of products may vary slightly due to the settings of your screen or device.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">4. Placing an Order</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>When you place an order, you are making an offer to purchase products from us. We will send you an order confirmation email, which confirms receipt of your order. This does not constitute acceptance of your order.</p>
              <p>Acceptance of your order takes place when we dispatch the goods and send you a dispatch confirmation email. We reserve the right to cancel any order before dispatch, in which case you will receive a full refund.</p>
              <p>You must be 18 years of age or over to place an order on our website.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">5. Payment</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>We accept major credit and debit cards and other payment methods as displayed at checkout. All transactions are processed securely. We do not store your full payment details.</p>
              <p>By submitting your payment information, you confirm that the payment details provided are your own and that you are authorised to use the selected payment method.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">6. Subscriptions</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>If you sign up for a Beautigel Nails London subscription, you agree to recurring charges at the frequency and price selected at the time of sign-up.</p>
              <p>You may pause, skip, or cancel your subscription at any time before your next scheduled billing date. Cancellations requested after a payment has been processed will take effect from the following billing cycle. No refunds will be issued for partially used subscription periods.</p>
              <p>We reserve the right to modify subscription pricing with reasonable notice provided in advance.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">7. Shipping and Delivery</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>Delivery times and shipping costs are set out in our <a href="/shipping" className="text-charcoal underline underline-offset-2">Shipping &amp; Returns Policy</a>. We aim to dispatch all orders promptly, but we cannot guarantee delivery times as these are subject to the carrier's schedule.</p>
              <p>Risk of loss and title for products pass to you upon delivery to the shipping address provided at checkout.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">8. Returns and Refunds</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>Our full returns and refund policy is set out in our <a href="/shipping" className="text-charcoal underline underline-offset-2">Shipping &amp; Returns Policy</a>. Your statutory rights under the Consumer Rights Act 2015 and other applicable UK consumer protection legislation are not affected by these terms.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">9. Intellectual Property</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>All content on this website, including but not limited to text, images, graphics, logos, and product designs, is the property of Beautigel Nails London and is protected by applicable intellectual property laws.</p>
              <p>You may not reproduce, distribute, or use any content from this website without our prior written permission.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">10. Disclaimer of Warranties</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>Our products are intended for cosmetic use only. Please read all product instructions and safety information before use. If you experience any adverse reaction, discontinue use immediately and consult a medical professional.</p>
              <p>To the fullest extent permitted by law, we make no warranties, express or implied, regarding the suitability of our products for any particular purpose beyond their stated cosmetic use.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">11. Limitation of Liability</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>To the maximum extent permitted by applicable law, Beautigel Nails London shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products.</p>
              <p>Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under English law.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">12. Privacy</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>Your use of this website is also governed by our <a href="/privacy" className="text-charcoal underline underline-offset-2">Privacy Policy</a>, which is incorporated into these Terms and Conditions by reference.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">13. Changes to These Terms</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>We reserve the right to update or amend these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Your continued use of the website following any changes constitutes acceptance of the revised terms.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">14. Governing Law</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </div>
          </div>

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">15. Contact Us</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <p><strong className="text-charcoal font-medium">Email:</strong> <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a></p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-nude rounded-2xl p-8 text-center">
            <p className="label-text mb-3">Questions?</p>
            <h3 className="section-heading text-xl text-charcoal mb-3">We&apos;re Here to Help</h3>
            <p className="text-mocha text-sm mb-6">If you have any questions about our terms, policies, or products, get in touch with our team.</p>
            <a href="mailto:customerservice@beautigelnails.com" className="btn-primary inline-flex">
              customerservice@beautigelnails.com
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
