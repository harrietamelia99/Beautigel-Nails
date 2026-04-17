import { Metadata } from 'next'
import { VideoEmbed } from '@/components/tutorial/VideoEmbed'

export const metadata: Metadata = {
  title: 'How To Apply · Tutorial Guide',
  description:
    'Step-by-step tutorials for applying and removing your Beautigel gel nail wraps, using the UV lamp, and caring for your nails with our cuticle oil.',
}

const APPLY_STEPS = [
  {
    number: '01',
    title: 'Prep Your Nails',
    description:
      'Start with clean, dry nails. Push back cuticles, lightly buff the nail surface to remove shine, and wipe with an alcohol prep pad. This ensures maximum adhesion.',
  },
  {
    number: '02',
    title: 'Choose Your Size',
    description:
      'Select the gel wrap that best fits each nail. It should cover the nail from edge to edge without overlapping the skin or cuticle. A slightly smaller size is better than one that\'s too big.',
  },
  {
    number: '03',
    title: 'Peel & Apply',
    description:
      'Peel the wrap from the backing, align at the cuticle edge, and press firmly from the centre outward to remove any air bubbles. Make sure edges are fully pressed down.',
  },
  {
    number: '04',
    title: 'File the Tip',
    description:
      'Fold the excess wrap over the free edge of the nail and file downward in one direction to remove the excess. This seals the wrap and ensures a smooth edge.',
  },
  {
    number: '05',
    title: 'Cure with UV Lamp',
    description:
      'Place your hand under the UV lamp and cure for 60–90 seconds. You\'ll feel a slight warming sensation. This is normal and means the gel is hardening for a long-lasting finish.',
  },
  {
    number: '06',
    title: 'Finish & Admire',
    description:
      'Repeat on all nails. Apply a touch of cuticle oil to nourish the surrounding skin. Step back and admire your salon-quality manicure!',
  },
]

const REMOVE_STEPS = [
  {
    number: '01',
    title: 'Soak a Cotton Pad',
    description:
      'Soak a cotton pad or ball in acetone-based nail polish remover. Avoid non-acetone removers as they won\'t be as effective.',
  },
  {
    number: '02',
    title: 'Wrap Each Nail',
    description:
      'Place the soaked cotton pad on the nail and wrap with foil or a nail clip. Leave for 10–15 minutes to allow the gel to loosen.',
  },
  {
    number: '03',
    title: 'Gently Remove',
    description:
      'Gently push the gel off with a cuticle pusher or orange stick. Do not force or peel. If it doesn\'t come away easily, re-soak for a few more minutes.',
  },
  {
    number: '04',
    title: 'Nourish',
    description:
      'After removal, apply Beautigel Cuticle Oil to replenish moisture and nourish your natural nails. Your nails will be as healthy as ever.',
  },
]

const UV_LAMP_STEPS = [
  {
    number: '01',
    title: 'Plug In',
    description: 'Connect your UV lamp to a power source. The lamp is compatible with standard USB power bricks or mains adapters.',
  },
  {
    number: '02',
    title: 'Position Your Hand',
    description: 'Place your hand flat under the lamp with fingers spread slightly apart for even curing.',
  },
  {
    number: '03',
    title: 'Press & Cure',
    description: 'Press the timer button and hold still for 60–90 seconds. The lamp will automatically switch off when the cycle completes.',
  },
  {
    number: '04',
    title: 'Check & Repeat',
    description: 'The wraps should feel firm and non-tacky. If any areas feel soft, give an additional 30-second cure.',
  },
]

const CUTICLE_OIL_STEPS = [
  {
    number: '01',
    title: 'Apply Daily',
    description: 'For best results, apply cuticle oil daily. Morning or evening works well. Make it part of your skincare routine.',
  },
  {
    number: '02',
    title: 'Dispense & Massage',
    description: 'Apply 1–2 drops to each cuticle and nail bed. Gently massage in circular motions to encourage absorption and stimulate circulation.',
  },
  {
    number: '03',
    title: 'After Washing',
    description: 'Always reapply after washing your hands, as water and soap strip natural oils from the cuticle area.',
  },
]

function StepsList({ steps }: { steps: typeof APPLY_STEPS }) {
  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.number} className="flex gap-5">
          <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#b4cbe6' }}>
            <span className="text-xs font-bold tracking-tight text-white">{step.number}</span>
          </div>
          <div className="pt-2">
            <h3 className="font-sans text-sm tracking-wide uppercase text-charcoal mb-2">{step.title}</h3>
            <p className="text-mocha text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HowToPage() {
  return (
    <div className="pt-20 md:pt-28 bg-ivory">
      {/* Header */}
      <section className="section-padding pt-10 md:pt-16 pb-14 md:pb-20 bg-nude">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Your Guide</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-nude/80" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">
              How To
            </h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm leading-relaxed max-w-md mx-auto">
            Everything you need to know to get the most from your Beautigel gel nail wraps.
            from application to removal and beyond.
          </p>
        </div>
      </section>

      {/* Apply section */}
      <section className="section-padding section-py bg-ivory" id="apply">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="label-text mb-3">Step-by-step</p>
            <h2 className="section-heading text-2xl text-charcoal">How to Apply Your Gel Wraps</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <StepsList steps={APPLY_STEPS} />
            <div className="sticky top-28">
              <VideoEmbed title="How to Apply Gel Nail Wraps" placeholder />
              <p className="text-mocha text-xs text-center mt-3">
                Full tutorial video · coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remove section */}
      <section className="section-padding py-16 bg-nude" id="remove">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="label-text mb-3">Gentle removal</p>
            <h2 className="section-heading text-2xl text-charcoal">How to Remove Your Gel Wraps</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <StepsList steps={REMOVE_STEPS} />
            <div>
              <VideoEmbed title="How to Remove Gel Nail Wraps" placeholder />
              <p className="text-mocha text-xs text-center mt-3">
                Removal tutorial video · coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UV Lamp section */}
      <section className="section-padding py-16 bg-ivory" id="uv-lamp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="label-text mb-3">Tools</p>
            <h2 className="section-heading text-2xl text-charcoal">How to Use the UV Lamp</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <StepsList steps={UV_LAMP_STEPS} />
            <div>
              <VideoEmbed title="How to Use the UV Lamp" placeholder />
              <p className="text-mocha text-xs text-center mt-3">
                UV Lamp tutorial · coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuticle Oil section */}
      <section className="section-padding py-16 bg-nude" id="cuticle-oil">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="label-text mb-3">Nail care</p>
            <h2 className="section-heading text-2xl text-charcoal">How to Use the Cuticle Oil</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <StepsList steps={CUTICLE_OIL_STEPS} />
            <div className="bg-ivory rounded-2xl p-8 border border-nude">
              <p className="label-text text-charcoal mb-5">Key Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Grapeseed Oil',
                  'Amino Acids',
                  'BHA',
                  'Natural Keratin',
                  'Organic Calcium',
                  'Safflower Oil',
                  'Vitamin A',
                  'Vitamin D',
                  'Sesame Oil',
                  'Vitamin B5 (Panthenol)',
                  'Vitamin E',
                  'Thymol',
                ].map((ingredient) => (
                  <span
                    key={ingredient}
                    className="bg-nude text-mocha text-[10px] tracking-wide px-3 py-1 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
              <p className="text-mocha text-xs mt-5 leading-relaxed">
                Cruelty-free, vegan, and non-essential oil formulation. Suitable for all nail types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding py-14 bg-ivory border-t border-nude/60">
        <div className="max-w-3xl mx-auto bg-nude rounded-2xl px-8 py-10 md:px-14 md:py-14 text-center">
          <p className="label-text mb-4">Pro Tips</p>
          <h2 className="section-heading text-2xl text-charcoal mb-8">For Best Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#b4cbe6">
                    <path d="M12 2c0 0-6 6.5-6 10.5a6 6 0 0 0 12 0C18 8.5 12 2 12 2z" />
                  </svg>
                ),
                tip: 'Apply on dry nails. Avoid lotion or oil before application.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b4cbe6" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4" fill="#b4cbe6" stroke="none" />
                    <line x1="12" y1="2" x2="12" y2="5" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="5" y2="12" />
                    <line x1="19" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
                    <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="16.95" y2="7.05" />
                    <line x1="7.05" y1="16.95" x2="4.93" y2="19.07" />
                  </svg>
                ),
                tip: 'Warm your nails slightly before applying for better adhesion',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#b4cbe6">
                    <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
                  </svg>
                ),
                tip: 'Apply cuticle oil daily around the edges to extend wear',
              },
            ].map((tip, i) => (
              <div key={i} className="bg-white border border-nude/60 rounded-2xl p-5">
                <div className="mb-3 flex justify-center">{tip.icon}</div>
                <p className="text-mocha text-xs leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
