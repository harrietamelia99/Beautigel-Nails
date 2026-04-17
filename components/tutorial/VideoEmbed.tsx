interface VideoEmbedProps {
  src?: string
  title: string
  placeholder?: boolean
}

export function VideoEmbed({ src, title, placeholder = false }: VideoEmbedProps) {
  if (!src || placeholder) {
    return (
      <div className="relative w-full aspect-video bg-nude rounded-2xl overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-mocha/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          className="w-12 h-12 text-mocha/40 mb-4"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" className="text-mocha/30" />
        </svg>
        <p className="font-sans text-xs tracking-widest uppercase text-mocha/50">{title}</p>
        <p className="text-mocha/40 text-[10px] mt-1">Video coming soon</p>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  )
}
