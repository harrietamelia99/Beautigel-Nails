'use client'

import { useState, useEffect } from 'react'

interface Review {
  id: string
  name: string
  rating: number
  title: string
  body: string
  date: string
  verified: boolean
}

function StarRating({ rating, interactive = false, onChange }: { rating: number; interactive?: boolean; onChange?: (r: number) => void }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? 'button' : undefined}
          onClick={() => interactive && onChange?.(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={interactive ? 'cursor-pointer' : 'cursor-default'}
          tabIndex={interactive ? 0 : -1}
        >
          <svg
            viewBox="0 0 24 24"
            fill={(hovered || rating) >= star ? '#b4cbe6' : 'none'}
            stroke="#b4cbe6"
            strokeWidth="1.5"
            className="w-5 h-5 transition-colors"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  )
}

const STORAGE_KEY = 'beautigel_reviews'

export function ReviewsSection({ productHandle }: { productHandle?: string }) {
  const storageKey = productHandle ? `${STORAGE_KEY}_${productHandle}` : STORAGE_KEY
  const [reviews, setReviews] = useState<Review[]>([])
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', rating: 5, title: '', body: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) setReviews(JSON.parse(stored))
    } catch {}
  }, [storageKey])

  const avgRating = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.rating) e.rating = 'Please select a rating.'
    if (!form.title.trim()) e.title = 'Please add a short title.'
    if (form.body.trim().length < 10) e.body = 'Please write at least 10 characters.'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const newReview: Review = {
      id: Date.now().toString(),
      name: form.name.trim(),
      rating: form.rating,
      title: form.title.trim(),
      body: form.body.trim(),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      verified: false,
    }

    const updated = [newReview, ...reviews]
    setReviews(updated)
    try { localStorage.setItem(storageKey, JSON.stringify(updated)) } catch {}
    setForm({ name: '', rating: 5, title: '', body: '' })
    setErrors({})
    setShowForm(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="border-t border-nude pt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <h2 className="section-heading text-xl text-charcoal">Reviews</h2>
          {reviews.length > 0 && (
            <div className="flex items-center gap-2">
              <StarRating rating={Math.round(avgRating)} />
              <span className="text-mocha text-sm">{avgRating.toFixed(1)} ({reviews.length})</span>
            </div>
          )}
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary text-xs px-5 py-2.5"
          >
            Write a Review
          </button>
        )}
      </div>

      {/* Success banner */}
      {submitted && (
        <div className="mb-6 bg-[#b4cbe6]/20 border border-[#b4cbe6] rounded-2xl px-5 py-4 text-sm text-charcoal text-center">
          Thank you for your review! It has been posted successfully.
        </div>
      )}

      {/* Review form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-10 bg-nude/40 rounded-2xl p-6 md:p-8 space-y-5 border border-nude"
        >
          <h3 className="section-heading text-base text-charcoal">Write Your Review</h3>

          {/* Rating */}
          <div>
            <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Your Rating</label>
            <StarRating rating={form.rating} interactive onChange={(r) => setForm((f) => ({ ...f, rating: r }))} />
            {errors.rating && <p className="text-red-400 text-xs mt-1">{errors.rating}</p>}
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Your Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Sarah"
              className="w-full bg-white border border-nude rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-mocha/40 focus:outline-none focus:border-[#b4cbe6] transition-colors"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Review Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="e.g. Absolutely love these!"
              className="w-full bg-white border border-nude rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-mocha/40 focus:outline-none focus:border-[#b4cbe6] transition-colors"
            />
            {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Body */}
          <div>
            <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Your Review</label>
            <textarea
              value={form.body}
              onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
              rows={4}
              placeholder="Tell us about your experience..."
              className="w-full bg-white border border-nude rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-mocha/40 focus:outline-none focus:border-[#b4cbe6] transition-colors resize-none"
            />
            {errors.body && <p className="text-red-400 text-xs mt-1">{errors.body}</p>}
          </div>

          <div className="flex gap-3 pt-1">
            <button type="submit" className="btn-primary text-xs px-6 py-2.5">
              Submit Review
            </button>
            <button
              type="button"
              onClick={() => { setShowForm(false); setErrors({}) }}
              className="btn-secondary text-xs px-6 py-2.5"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Reviews list */}
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-6 border border-nude/60">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <StarRating rating={review.rating} />
                  <p className="font-medium text-charcoal text-sm mt-2">{review.title}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-mocha">{review.name}</p>
                  <p className="text-xs text-mocha/60 mt-0.5">{review.date}</p>
                </div>
              </div>
              <p className="text-mocha text-sm leading-relaxed">{review.body}</p>
            </div>
          ))}
        </div>
      ) : !showForm ? (
        /* Empty state */
        <div className="text-center py-16 border border-dashed border-nude rounded-2xl">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} viewBox="0 0 24 24" fill="none" stroke="#b4cbe6" strokeWidth="1.5" className="w-6 h-6">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p className="font-sans text-sm tracking-widest uppercase text-charcoal mb-2">Be the first to review</p>
          <p className="text-mocha text-xs max-w-xs mx-auto leading-relaxed">
            Share your experience and help other customers discover Beautigel Nails.
          </p>
        </div>
      ) : null}
    </div>
  )
}
