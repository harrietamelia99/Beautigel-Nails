import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('[stripe-webhook] Signature verification failed:', err)
    return NextResponse.json({ error: 'Webhook signature mismatch' }, { status: 400 })
  }

  const obj = event.data.object as { id?: string; customer?: string; subscription?: string; metadata?: Record<string, string> }

  switch (event.type) {
    case 'checkout.session.completed':
      console.log('[stripe-webhook] Checkout completed:', {
        customer: obj.customer,
        subscription: obj.subscription,
        metadata: obj.metadata,
      })
      break
    case 'invoice.paid':
      console.log('[stripe-webhook] Invoice paid:', obj.id)
      break
    case 'invoice.payment_failed':
      console.warn('[stripe-webhook] Payment failed:', obj.id)
      break
    case 'customer.subscription.deleted':
      console.log('[stripe-webhook] Subscription cancelled:', obj.id)
      break
    default:
      break
  }

  return NextResponse.json({ received: true })
}
