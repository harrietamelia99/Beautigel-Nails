'use client'

import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { trackPurchase } from '@/lib/pixel'

// Fetches the Stripe session amount and fires a single Purchase pixel event.
// Uses a ref so it only fires once per page load even in React strict mode.
export function PurchasePixel() {
  const searchParams = useSearchParams()
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    const sessionId = searchParams.get('session_id')
    if (!sessionId) {
      // No session id — fire with unknown value
      trackPurchase({ value: 0 })
      return
    }

    // Fetch the session total from our API so the pixel value is accurate
    fetch(`/api/session-amount?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((data) => trackPurchase({ value: data.amount ?? 0 }))
      .catch(() => trackPurchase({ value: 0 }))
  }, [searchParams])

  return null
}
