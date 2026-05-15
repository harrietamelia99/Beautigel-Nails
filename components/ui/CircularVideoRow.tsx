'use client'

interface Clip {
  label: string
  gradient?: string
}

interface CircularVideoRowProps {
  title?: string
  subtitle?: string
  clips?: Clip[]
}

const DEFAULT_CLIPS: Clip[] = [
  { label: 'Apply & Smooth', gradient: 'linear-gradient(135deg, #e8d5c4 0%, #c4a882 100%)' },
  { label: 'Cure Under Lamp', gradient: 'linear-gradient(135deg, #b4cbe6 0%, #8aafd4 100%)' },
  { label: 'Finished Look', gradient: 'linear-gradient(135deg, #f4a7b9 0%, #e8849a 100%)' },
  { label: 'Close-Up Detail', gradient: 'linear-gradient(135deg, #d4c5b0 0%, #b09880 100%)' },
  { label: 'Gentle Removal', gradient: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)' },
]

export function CircularVideoRow({
  title = 'See It In Action',
  subtitle = 'Video content coming soon',
  clips = DEFAULT_CLIPS,
}: CircularVideoRowProps) {
  return (
    <div className="py-10 md:py-14">
      <div className="text-center mb-8">
        <p className="label-text mb-2">{subtitle}</p>
        <h3 className="section-heading text-xl md:text-2xl text-charcoal">{title}</h3>
      </div>
      <div className="flex items-start justify-center gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide">
        {clips.map((clip) => (
          <div key={clip.label} className="flex flex-col items-center gap-3 shrink-0">
            <div
              className="w-20 h-20 md:w-28 md:h-28 rounded-full relative overflow-hidden group cursor-pointer"
              style={{ background: clip.gradient ?? 'linear-gradient(135deg, #e8d5c4 0%, #c4a882 100%)' }}
            >
              {/* Placeholder shimmer */}
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-white/40 to-transparent" />
              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-90 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="#111">
                    <path d="M0 0l10 6-10 6V0z" />
                  </svg>
                </div>
              </div>
              {/* TBC badge */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                <span className="text-[7px] tracking-widest uppercase bg-white/70 text-charcoal px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
            </div>
            <p className="text-[10px] tracking-wide uppercase text-mocha text-center max-w-[80px] leading-tight">
              {clip.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
