import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
})

// Disable Next.js body parsing — Stripe needs the raw body to verify the signature
export const config = { api: { bodyParser: false } }

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

  // Handle events
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.CheckoutSession
      console.log('[stripe-webhook] New subscription checkout completed:', {
        customer: session.customer,
        subscription: session.subscription,
        tier: session.metadata?.tier,
        frequency: session.metadata?.frequency,
        styles: session.metadata?.selectedStyles,
      })
      // TODO: save to database / send confirmation email when ready
      break
    }

    case 'invoice.paid': {
      const invoice = event.data.object as Stripe.Invoice
      console.log('[stripe-webhook] Invoice paid — recurring delivery due:', invoice.id)
      // TODO: trigger fulfilment / dispatch notification
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      console.warn('[stripe-webhook] Payment failed for invoice:', invoice.id)
      // TODO: notify customer
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      console.log('[stripe-webhook] Subscription cancelled:', sub.id)
      // TODO: update customer record
      break
    }

    default:
      // Unhandled event types — safe to ignore
      break
  }

  return NextResponse.json({ received: true })
}
