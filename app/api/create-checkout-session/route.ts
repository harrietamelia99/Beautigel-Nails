import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

// Map our tier/frequency combos to Stripe Price IDs (set these in your .env.local)
// You'll create one recurring price per tier in the Stripe dashboard
const PRICE_ID_MAP: Record<string, string | undefined> = {
  essential: process.env.STRIPE_PRICE_ESSENTIAL,   // e.g. price_xxxxx
  signature: process.env.STRIPE_PRICE_SIGNATURE,
  vip:       process.env.STRIPE_PRICE_VIP,
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      tier: string
      frequency: string
      selectedStyles: string[]
    }

    const { tier, frequency, selectedStyles } = body

    const priceId = PRICE_ID_MAP[tier]
    if (!priceId) {
      return NextResponse.json(
        { error: `No Stripe Price ID configured for tier: ${tier}. Add STRIPE_PRICE_${tier.toUpperCase()} to .env.local` },
        { status: 400 }
      )
    }

    const origin = req.headers.get('origin') ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: {
        tier,
        frequency,
        selectedStyles: selectedStyles.join(', '),
      },
      subscription_data: {
        metadata: {
          tier,
          frequency,
          selectedStyles: selectedStyles.join(', '),
        },
      },
      success_url: `${origin}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/subscribe`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB'],
      },
      custom_text: {
        submit: {
          message: `Your ${frequency} box of gel nail wraps · pause, skip or cancel anytime.`,
        },
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[create-checkout-session]', err)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
