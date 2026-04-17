export function AnnouncementBar() {
  return (
    <div className="py-2.5 text-center text-[10px] tracking-widest uppercase z-50 relative" style={{ backgroundColor: '#b4cbe6', color: '#111111' }}>
      {/* Mobile: shorter message */}
      <span className="md:hidden font-medium">Free shipping £35+ · Code: WELCOME10</span>
      {/* Desktop: full message */}
      <span className="hidden md:inline">
        <span className="font-medium">Free UK Shipping on Orders Over £35</span>
        <span className="text-charcoal/60 mx-3">·</span>
        <span className="font-bold">10% Off Your First Order · Code: WELCOME10</span>
      </span>
    </div>
  )
}
