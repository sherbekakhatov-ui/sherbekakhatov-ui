export default function MapSection() {
  return (
    <section className="mt-10">
      <div className="mb-5">
        <h3 className="mb-1 text-xl font-semibold">Bizni xaritada toping</h3>
        <p className="text-sm opacity-60">
          Uloch MFY, Shahrisabz tumani, O&apos;zbekiston
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <iframe
          src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=66.830000%2C39.050000&mode=search&text=Miraki%20Shahrisabz&z=14"
          width="100%"
          height="420"
          className="block border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Miraki Gardens — Shahrisabz xaritasi"
        />

        <a
          href="https://yandex.uz/maps/-/CPG45Eo-"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#1a3328] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
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
            aria-hidden="true"
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          Yo&apos;nalish olish
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-5 text-sm opacity-60">
        <div className="flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Uloch MFY, Shahrisabz
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Shahrisabzdan ~15 daqiqa
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          24/7 ochiq
        </div>
      </div>
    </section>
  )
}
