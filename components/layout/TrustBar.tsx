export function TrustBar() {
  return (
    <div className="bg-ivory border-b border-nude/60 py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between text-[11px] tracking-widest uppercase text-mocha">
        <span>Free UK Shipping on Orders Over £35</span>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="#00B67A" className="w-3.5 h-3.5 shrink-0">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          [REVIEW COUNT TBC] Happy Customers
        </span>
        <span>100% Cruelty-Free &amp; Vegan</span>
      </div>
    </div>
  )
}
