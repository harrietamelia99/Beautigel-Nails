import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')
  if (!sessionId) return NextResponse.json({ amount: 0 })

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    const amount = session.amount_total ? session.amount_total / 100 : 0
    return NextResponse.json({ amount })
  } catch {
    return NextResponse.json({ amount: 0 })
  }
}
