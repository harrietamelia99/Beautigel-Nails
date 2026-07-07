import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

interface CartItem {
  name: string
  price: number
  quantity: number
  image?: string | null
}

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json() as { items: CartItem[] }

    if (!items?.length) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    const origin = req.headers.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'https://beautigelnails.uk'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: items.map((item) => ({
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.name,
            // Stripe only accepts public HTTPS image URLs ≤2048 chars
            ...(item.image && item.image.startsWith('https://') && item.image.length <= 2048
              ? { images: [item.image] }
              : {}),
          },
          unit_amount: Math.max(1, Math.round(item.price * 100)),
        },
        quantity: Math.max(1, item.quantity),
      })),
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'gbp' },
            display_name: 'Standard UK Delivery (3–5 days)',
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 495, currency: 'gbp' },
            display_name: 'Express UK Delivery (1–2 days)',
          },
        },
      ],
      custom_text: {
        submit: {
          message: 'Beautigel Nails London · Cruelty-free gel nail wraps',
        },
      },
      success_url: `${origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/products`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('[cart-checkout]', err)
    // Return the real Stripe error message so we can see what's wrong
    const message = err?.message ?? 'Failed to create checkout session'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
