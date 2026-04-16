'use client';

import { useLanguage } from '@/lib/language-context';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3328]/60 via-[#1a3328]/40 to-[#1a3328]/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a3328]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#1a3328]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
          <div className="w-16 h-px bg-[#d4af37]" />
          <div className="w-2 h-2 rotate-45 border border-[#d4af37]" />
          <div className="w-16 h-px bg-[#d4af37]" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#f5f0e8] mb-6 tracking-wide animate-fade-up animation-delay-100">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-[#d4af37] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-light mb-8 animate-fade-up animation-delay-200">
          {t.hero.subtitle}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-[#f5f0e8]/80 text-lg md:text-xl leading-relaxed mb-12 animate-fade-up animation-delay-300">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
          <Link
            href="#booking"
            className="px-10 py-4 bg-[#d4af37] text-[#1a3328] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-semibold hover:bg-[#c9a430] transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20"
          >
            {t.nav.bookNow}
          </Link>
          <Link
            href="#about"
            className="px-10 py-4 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-medium hover:bg-[#f5f0e8]/10 hover:border-[#f5f0e8]/50 transition-all duration-300"
          >
            {t.hero.explore}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-up animation-delay-600">
        <span className="text-[#f5f0e8]/60 text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
          {t.hero.scroll}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#f5f0e8]/60 to-transparent relative">
          <ChevronDown className="w-4 h-4 text-[#d4af37] absolute -bottom-2 left-1/2 -translate-x-1/2 animate-bounce" />
        </div>
      </div>

      {/* Side Decorations */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent" />
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent" />
      </div>
    </section>
  );
}
