'use client'

import { useState } from 'react'
import Link from 'next/link'

export const metadata = undefined // client component — metadata set via layout

const CATEGORIES = [
  {
    id: 'product',
    label: 'The Product',
    faqs: [
      {
        q: 'What are semi-cured gel nail wraps?',
        a: 'Semi-cured gel nail wraps are pre-shaped gel strips that are partially cured in a factory. Once applied to your nails and exposed to a UV lamp, they fully cure and harden to give you a salon-quality gel manicure at home.',
      },
      {
        q: 'Why do Beautigel wraps use UV curing?',
        a: 'UV curing is what transforms our gel wraps from flexible strips into a hard, chip-resistant shell. This creates a stronger, more protective layer that can last up to 4 weeks — significantly longer than non-UV alternatives. It also creates a protective barrier that is ideal for anyone recovering from acrylic nail damage.',
      },
      {
        q: 'How long do Beautigel gel wraps last?',
        a: 'With proper application and aftercare, our UV-cured gel wraps can last up to 4 weeks. Wear time can vary depending on nail prep, lifestyle, and how well the edges are sealed.',
      },
      {
        q: 'Are the gel wraps HEMA-free?',
        a: 'Yes. Our gel wraps are HEMA-free, vegan, and cruelty-free. We use a skin-safe adhesive and a flexible base coat designed to be gentle on natural nails.',
      },
      {
        q: 'Are the wraps safe for natural nails?',
        a: 'Yes. Our gel wraps are designed to protect and support the natural nail. They are particularly well-suited for customers whose nails have been weakened or damaged by long-term acrylic use, as the hard shell helps protect the natural nail while it grows out.',
      },
      {
        q: 'Is UV exposure safe?',
        a: 'UV exposure during gel curing is minimal and considered safe for cosmetic use when used as directed. The curing time is short (typically 60 seconds), and the UV output is localised to your nails. If you have any specific skin sensitivities, consult a medical professional before use.',
      },
    ],
  },
  {
    id: 'application',
    label: 'Application & Removal',
    faqs: [
      {
        q: 'What do I need to apply the gel wraps?',
        a: 'You will need: the gel nail wrap kit, a UV lamp, a nail file, and a cuticle pusher. Our Starter Kit includes a free UV lamp so you have everything you need to get started.',
      },
      {
        q: 'How long does it take to apply?',
        a: 'Most customers complete a full set in 20–30 minutes once they are familiar with the process. The first time may take a little longer as you get used to applying and curing.',
      },
      {
        q: 'Do I need to prep my nails?',
        a: 'Yes — nail prep is key to a long-lasting wear. Gently push back your cuticles, lightly buff the nail surface, and clean with a lint-free wipe before applying. Avoid getting any oils or moisturiser on your nails before application.',
      },
      {
        q: 'How do I remove the gel wraps?',
        a: 'Soak a cotton pad in acetone-based nail polish remover, place it on the nail, and wrap with foil or a nail clip. Leave for 10–15 minutes to allow the gel to loosen. Gently push off with a cuticle pusher — do not force or peel. Finish with cuticle oil to nourish.',
      },
      {
        q: 'Can I peel the wraps off?',
        a: 'We do not recommend peeling. Forcing the wraps off can damage the nail surface. Always follow the acetone soak method for safe, gentle removal.',
      },
      {
        q: 'How many sets are in one kit?',
        a: 'Each kit contains one full set of gel nail wraps — enough for one complete manicure plus a few extra sizes for flexibility.',
      },
    ],
  },
  {
    id: 'orders',
    label: 'Orders & Shipping',
    faqs: [
      {
        q: 'How long does delivery take?',
        a: 'UK standard delivery typically takes 2–5 business days. Expedited options are available at checkout with 1–2 business day delivery. International orders typically take 7–21 business days.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! All UK orders over £35 qualify for free standard shipping. Free UK shipping is also included with all Starter Kit orders.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship worldwide. Shipping costs and delivery times vary by destination and are calculated at checkout. Please note that international orders may be subject to local import duties and taxes.',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes. Once your order has been dispatched, you will receive a tracking number by email so you can follow your parcel through the carrier\'s website.',
      },
      {
        q: 'I entered the wrong address — what do I do?',
        a: 'Please contact us as soon as possible at customerservice@beautigelnails.com. We will do our best to update the address before dispatch, but we cannot guarantee changes once an order has been processed.',
      },
    ],
  },
  {
    id: 'returns',
    label: 'Returns & Refunds',
    faqs: [
      {
        q: 'What is your returns policy?',
        a: 'Due to hygiene reasons, we are unable to accept returns on opened or used products. Unopened items can be returned within 14 days of receipt. For full details, please see our Returns & Refunds policy.',
      },
      {
        q: 'My order arrived damaged — what should I do?',
        a: 'Please contact us within 48 hours of delivery with photos of the damage at customerservice@beautigelnails.com. We will arrange a replacement or refund as quickly as possible.',
      },
      {
        q: 'Do you offer a money back guarantee?',
        a: 'Yes. We offer a 30-day money back guarantee. If you are not satisfied with your purchase, contact us within 30 days of delivery and we will do our best to resolve it.',
      },
      {
        q: 'How long does a refund take?',
        a: 'Once we receive and inspect your return, refunds are processed within 5–7 business days back to your original payment method. Original shipping fees are non-refundable.',
      },
    ],
  },
  {
    id: 'subscription',
    label: 'Subscribe & Save',
    faqs: [
      {
        q: 'What is the Beautigel subscription?',
        a: 'Our Subscribe & Save membership lets you receive your favourite gel wrap sets on a flexible schedule (every 3, 4, 6 or 8 weeks) with an exclusive member discount applied to every order.',
      },
      {
        q: 'How much can I save with a subscription?',
        a: 'Savings depend on your chosen tier: Essential (2 sets) saves 15%, Signature (3 sets) saves 20%, and VIP (4 sets) saves 25% on every order.',
      },
      {
        q: 'Can I choose my nail designs each delivery?',
        a: 'Yes. You can select or update your chosen styles before each delivery date, so you are never stuck with the same design.',
      },
      {
        q: 'Can I pause or cancel my subscription?',
        a: 'Absolutely. You can pause, skip, or cancel your subscription at any time before your next billing date with no questions asked. We believe subscriptions should feel flexible and stress-free.',
      },
      {
        q: 'Does the subscription include the UV lamp and cuticle oil?',
        a: 'The free UV lamp and cuticle oil are included with first-time Starter Kit / bundle orders only. The subscription is designed as an ongoing membership for customers who already have their kit.',
      },
      {
        q: 'How do subscription payments work?',
        a: 'Subscription payments are processed automatically on your chosen delivery schedule. You will receive an email reminder before each billing date. Payments are handled securely through Shopify\'s subscription infrastructure.',
      },
    ],
  },
  {
    id: 'account',
    label: 'Account & General',
    faqs: [
      {
        q: 'Do I need an account to order?',
        a: 'No, you can check out as a guest. However, creating an account makes it easier to track orders, manage subscriptions, and access order history.',
      },
      {
        q: 'How do I contact Beautigel Nails London?',
        a: 'You can reach us at customerservice@beautigelnails.com or via our contact form. We aim to respond to all enquiries within 1–2 business days.',
      },
      {
        q: 'Are your products cruelty-free and vegan?',
        a: 'Yes. All Beautigel products are vegan and cruelty-free. We do not test on animals and our formulas contain no animal-derived ingredients.',
      },
      {
        q: 'Where is Beautigel Nails London based?',
        a: 'We are a UK-based brand delivering salon-quality gel nails to customers across the UK and worldwide.',
      },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-nude last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-sans text-sm font-medium text-charcoal group-hover:text-[#b4cbe6] transition-colors pr-2">
          {q}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? '#b4cbe6' : 'transparent', border: `1.5px solid ${open ? '#b4cbe6' : '#d4c9be'}` }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={open ? 'white' : '#9a8c81'} strokeWidth="2.5" className={`w-3 h-3 transition-transform ${open ? 'rotate-45' : ''}`}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-mocha text-sm leading-relaxed pb-5 pr-10">{a}</p>
      )}
    </div>
  )
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('product')
  const active = CATEGORIES.find((c) => c.id === activeCategory)!

  return (
    <div className="bg-ivory min-h-screen">

      {/* Page Header */}
      <section className="section-padding pt-28 md:pt-32 pb-12 md:pb-20 bg-nude border-b border-nude/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Support</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">Frequently Asked Questions</h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about Beautigel Nails London. Can't find your answer? Get in touch and we'll help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* Category sidebar */}
            <aside className="lg:w-52 shrink-0">
              <p className="label-text mb-4">Categories</p>
              <nav className="flex flex-row flex-wrap lg:flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left text-sm px-4 py-2.5 rounded-xl transition-all ${
                      activeCategory === cat.id
                        ? 'font-medium text-charcoal'
                        : 'text-mocha hover:text-charcoal'
                    }`}
                    style={activeCategory === cat.id ? { backgroundColor: '#b4cbe620', color: '#3d3530' } : {}}
                  >
                    {cat.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* FAQs */}
            <div className="flex-1 min-w-0">
              <h2 className="section-heading text-xl text-charcoal mb-6">{active.label}</h2>
              <div className="bg-white rounded-2xl px-6 md:px-8 border border-nude/60">
                {active.faqs.map((faq) => (
                  <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-nude rounded-2xl p-8 md:p-10 text-center">
            <p className="label-text mb-3">Still have questions?</p>
            <h3 className="section-heading text-xl text-charcoal mb-3">We&apos;re Here to Help</h3>
            <p className="text-mocha text-sm mb-6 max-w-md mx-auto">
              Our team is happy to help with anything not covered above. Send us a message and we will get back to you within 1–2 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="mailto:customerservice@beautigelnails.com" className="btn-secondary">
                customerservice@beautigelnails.com
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
