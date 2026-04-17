import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Beautigel Nails London collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-ivory min-h-screen">

      {/* Page Header */}
      <section className="section-padding pt-28 md:pt-32 pb-12 md:pb-20 bg-nude border-b border-nude/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Legal</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">Privacy Policy</h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm">Last updated: 27 October 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">1. Who We Are</h2>
            <div className="text-mocha text-sm leading-relaxed space-y-2">
              <p>Welcome to Beautigel Nails ("we", "our", "us"). We operate the online store at beautigelnails.com and are based in the United Kingdom.</p>
              <p>This Privacy Policy explains how we collect, use, and share your personal information when you visit or shop with us.</p>
              <p>If you have any questions, contact us at <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a>.</p>
            </div>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">2. Personal Data We Collect</h2>
            <p className="text-mocha text-sm leading-relaxed mb-4">We collect information needed to run our business and serve you properly:</p>
            <ul className="space-y-3">
              {[
                { label: 'Device data', desc: 'IP address, browser type, time zone, cookie data, and how you browse our site.' },
                { label: 'Order data', desc: 'Name, email, phone number, billing and shipping address, payment information, and what you purchased.' },
                { label: 'Account data', desc: 'If you create an account with us.' },
                { label: 'Support data', desc: 'Any information you provide when contacting us for help.' },
                { label: 'Marketing data', desc: 'Preferences for email updates or offers.' },
              ].map((item) => (
                <li key={item.label} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#b4cbe6' }} />
                  <p className="text-mocha leading-relaxed"><strong className="text-charcoal font-medium">{item.label}:</strong> {item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="text-mocha text-sm leading-relaxed mt-4">We automatically collect some of this through cookies, pixels, and similar technologies (see "Cookies" below).</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">3. How We Use Your Data</h2>
            <p className="text-mocha text-sm leading-relaxed mb-4">We use your personal data to:</p>
            <ul className="space-y-2">
              {[
                'Process and deliver your orders.',
                'Communicate with you about orders, returns, and support.',
                'Send you marketing updates (if you\'ve opted in).',
                'Improve our website, ads, and products.',
                'Detect and prevent fraud.',
                'Comply with legal and tax obligations.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-mocha leading-relaxed">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#b4cbe6' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-mocha text-sm leading-relaxed mt-4 font-medium text-charcoal">We do not sell your data to anyone.</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">4. Who We Share It With</h2>
            <p className="text-mocha text-sm leading-relaxed mb-4">We only share what is necessary to keep the store running smoothly:</p>
            <ul className="space-y-2">
              {[
                { label: 'Shopify', desc: 'which hosts our store.' },
                { label: 'Payment providers', desc: 'Shopify Payments, PayPal, Apple Pay, Klarna.' },
                { label: 'Delivery partners', desc: 'e.g. Royal Mail and couriers.' },
                { label: 'Email & marketing tools', desc: 'Shopify Email / Klaviyo.' },
                { label: 'Analytics & advertising', desc: 'Google Analytics and Meta Pixel.' },
              ].map((item) => (
                <li key={item.label} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#b4cbe6' }} />
                  <p className="text-mocha leading-relaxed"><strong className="text-charcoal font-medium">{item.label}:</strong> {item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="text-mocha text-sm leading-relaxed mt-4">Each of these third parties is contractually required to handle your information securely and lawfully.</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">5. Cookies and Tracking</h2>
            <p className="text-mocha text-sm leading-relaxed mb-4">We use cookies and pixels to:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Keep your shopping cart working.',
                'Understand how visitors use our site.',
                'Personalise ads and offers.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-mocha leading-relaxed">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#b4cbe6' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-mocha text-sm leading-relaxed">You can manage or delete cookies in your browser settings. Blocking some cookies may affect site functionality.</p>
            <p className="text-mocha text-sm leading-relaxed mt-2">Do Not Track: we do not change our data practices when a DNT signal is received, as there is no consistent industry standard yet.</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">6. Legal Basis for Processing (UK GDPR)</h2>
            <p className="text-mocha text-sm leading-relaxed mb-4">We process your data under the following bases:</p>
            <ul className="space-y-3">
              {[
                { label: 'Contract', desc: 'To fulfil your orders and provide services.' },
                { label: 'Consent', desc: 'For marketing emails or optional cookies.' },
                { label: 'Legitimate interests', desc: 'To improve our site and protect against fraud.' },
                { label: 'Legal obligation', desc: 'To meet tax or accounting requirements.' },
              ].map((item) => (
                <li key={item.label} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#b4cbe6' }} />
                  <p className="text-mocha leading-relaxed"><strong className="text-charcoal font-medium">{item.label}:</strong> {item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">7. Data Retention</h2>
            <ul className="space-y-3">
              {[
                { label: 'Order & transaction records', desc: 'Retained for up to 7 years for legal and tax reasons.' },
                { label: 'Marketing data', desc: 'Retained until you unsubscribe or withdraw consent.' },
                { label: 'Analytics & cookie data', desc: 'Retained only for provider-specific retention periods.' },
              ].map((item) => (
                <li key={item.label} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#b4cbe6' }} />
                  <p className="text-mocha leading-relaxed"><strong className="text-charcoal font-medium">{item.label}:</strong> {item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">8. Your Rights</h2>
            <p className="text-mocha text-sm leading-relaxed mb-4">Under the UK Data Protection Act 2018 and UK GDPR, you have the right to:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Access the personal data we hold about you.',
                'Correct or update inaccurate data.',
                'Request deletion of your data ("right to be forgotten").',
                'Withdraw marketing consent at any time.',
                'Object to or restrict certain processing.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-mocha leading-relaxed">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#b4cbe6' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-mocha text-sm leading-relaxed">To exercise any of these rights, email <a href="mailto:customerservice@beautigelnails.com" className="text-charcoal underline underline-offset-2">customerservice@beautigelnails.com</a>. We will respond within 30 days.</p>
            <p className="text-mocha text-sm leading-relaxed mt-2">If you are not satisfied with our response, you can complain to the Information Commissioner&apos;s Office (ICO): <a href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2">ico.org.uk/make-a-complaint</a>.</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">9. Data Security</h2>
            <p className="text-mocha text-sm leading-relaxed">We use Shopify&apos;s secure infrastructure, SSL encryption, and restricted internal access to protect your personal information. If you suspect misuse or unauthorised access, contact us immediately.</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">10. International Transfers</h2>
            <p className="text-mocha text-sm leading-relaxed">Because Shopify and some providers operate globally, your data may be transferred outside the UK (e.g. to Canada or the US). Shopify relies on adequacy decisions and standard contractual clauses to ensure your information remains protected.</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">11. Children</h2>
            <p className="text-mocha text-sm leading-relaxed">Our website is intended for adults (18+). We do not knowingly collect data from minors. If you believe a child has shared personal information with us, contact us and we will remove it.</p>
          </div>

          <div className="h-px bg-nude" />

          <div>
            <h2 className="section-heading text-sm text-charcoal mb-3">12. Updates to This Policy</h2>
            <p className="text-mocha text-sm leading-relaxed">We may revise this Privacy Policy from time to time. Changes will appear here with an updated "Last updated" date.</p>
          </div>

          <div className="h-px bg-nude" />

          {/* Contact CTA */}
          <div className="bg-nude rounded-2xl p-8 text-center">
            <p className="label-text mb-3">Questions?</p>
            <h3 className="section-heading text-xl text-charcoal mb-3">Get in Touch</h3>
            <p className="text-mocha text-sm mb-2">Beautigel Nails London · United Kingdom</p>
            <a href="mailto:customerservice@beautigelnails.com" className="btn-primary inline-flex mt-3">
              customerservice@beautigelnails.com
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
