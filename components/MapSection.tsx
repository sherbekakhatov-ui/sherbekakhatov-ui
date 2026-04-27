'use client';

import { MapPin, Clock, CalendarDays, Navigation } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="location" className="mt-10">
      {/* Sarlavha */}
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-2">
          Location
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-[#1a3328]">
          Bizni xaritada toping
        </h3>
        <p className="text-sm sm:text-base text-[#1a3328]/60">
          Uloch MFY, Shahrisabz tumani, O‘zbekiston
        </p>
      </div>

      {/* Xarita wrapper */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a3328]/10 bg-[#1a3328]">
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=67.078617%2C39.019220&mode=search&sll=67.079361%2C39.026111&text=39.026111%2C67.079361&z=14.53"
          width="100%"
          height="420"
          frameBorder={0}
          allowFullScreen
          loading="lazy"
          className="block w-full h-[320px] sm:h-[420px]"
          title="Miraki Garden — Shahrisabz xaritasi"
        />

        {/* Yo‘nalish tugmasi */}
        <a
          href="https://yandex.uz/maps/-/CPG45Eo-"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-4 right-4 bottom-4 sm:left-auto sm:right-4 sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1a3328] text-white text-sm font-semibold shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2a4338]"
        >
          <Navigation className="w-4 h-4" />
          Yo‘nalish olish
        </a>
      </div>

      {/* Info qatorlar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div className="flex items-center gap-3 rounded-2xl bg-[#1a3328]/5 px-4 py-3 text-sm text-[#1a3328]/70">
          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>Uloch MFY, Shahrisabz</span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-[#1a3328]/5 px-4 py-3 text-sm text-[#1a3328]/70">
          <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>Shahrisabzdan ~15 daqiqa</span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-[#1a3328]/5 px-4 py-3 text-sm text-[#1a3328]/70">
          <CalendarDays className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>24/7 ochiq</span>
        </div>
      </div>
    </section>
  );
}
