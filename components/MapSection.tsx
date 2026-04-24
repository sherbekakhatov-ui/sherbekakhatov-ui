'use client'

// ═══════════════════════════════════════════
// components/MapSection.tsx
// ═══════════════════════════════════════════

export default function MapSection() {
  return (
    <div className="mt-10">

      {/* Sarlavha */}
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-1">Bizni xaritada toping</h3>
        <p className="text-sm opacity-60">Uloch MFY, Shahrisabz tumani, O'zbekiston</p>
      </div>

      {/* Xarita wrapper */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=67.078617%2C39.019220&mode=search&sll=67.079361%2C39.026111&text=39.026111%2C67.079361&z=14.53"
          width="100%"
          height="420"
          frameBorder={0}
          allowFullScreen
          loading="lazy"
          style={{ display: 'block' }}
          title="Miraki Gardens — Shahrisabz xaritasi"
        />

        {/* Yo'nalish tugmasi */}
        <a
          href="https://yandex.uz/maps/-/CPG45Eo-"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          style={{ background: '#1a3328' }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          Yo'nalish olish
        </a>
      </div>

      {/* Info qatorlar */}
      <div className="flex flex-wrap gap-5 mt-4 text-sm opacity-60">
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Uloch MFY, Shahrisabz
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          Shahrisabzdan ~15 daqiqa
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          24/7 ochiq
        </span>
      </div>

    </div>
  )
}
