export function ReviewsSection() {
  return (
    <div className="border-t border-nude pt-10">
      <h2 className="section-heading text-xl text-charcoal mb-8">
        Reviews
      </h2>

      {/* Empty state */}
      <div className="text-center py-16 border border-dashed border-nude rounded-2xl">
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
              style={{ color: '#b4cbe6' }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="font-sans text-sm tracking-widest uppercase text-charcoal mb-2">
          Be the first to review
        </p>
        <p className="text-mocha text-xs max-w-xs mx-auto leading-relaxed">
          Share your experience and help other customers discover Beautigel Nails.
        </p>
        <button className="btn-secondary mt-6 text-xs">
          Write a Review
        </button>
      </div>
    </div>
  )
}
