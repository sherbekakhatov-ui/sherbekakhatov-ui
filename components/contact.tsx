'use client';

import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f5f0e8] relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={cn(
            'inline-block text-[#d4af37] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-medium mb-4 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.contact.subtitle}
          </span>
          <h2 className={cn(
            'text-4xl md:text-5xl lg:text-6xl text-[#1a3328] font-medium mb-6 transition-all duration-700 delay-100',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.contact.title}
          </h2>
          <div className={cn(
            'flex items-center justify-center gap-4 transition-all duration-700 delay-200',
            isInView ? 'opacity-100' : 'opacity-0'
          )}>
            <div className="w-16 h-px bg-[#d4af37]" />
            <div className="w-2 h-2 rotate-45 border border-[#d4af37]" />
            <div className="w-16 h-px bg-[#d4af37]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className={cn(
            'transition-all duration-1000',
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#1a3328]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a3328] transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#1a3328] group-hover:text-[#d4af37] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[#1a3328] font-medium text-lg mb-2">Address</h3>
                  <p className="text-[#1a3328]/60 leading-relaxed">
                    {t.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone — bosilsa call ochiladi */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#1a3328]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a3328] transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#1a3328] group-hover:text-[#d4af37] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[#1a3328] font-medium text-lg mb-2">Phone</h3>
                  <a
                    href="tel:+998887150709"
                    className="text-[#1a3328]/60 hover:text-[#1a3328] transition-colors duration-300"
                  >
                    {t.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#1a3328]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a3328] transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#1a3328] group-hover:text-[#d4af37] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[#1a3328] font-medium text-lg mb-2">Email</h3>
                  <p className="text-[#1a3328]/60">
                    {t.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="#booking"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a3328] text-[#f5f0e8] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-medium hover:bg-[#2a4338] transition-all duration-300"
              >
                {t.contact.cta}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ✅ Yandex Maps */}
          <div className={cn(
            'transition-all duration-1000 delay-300',
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}>
            <div className="relative rounded-sm overflow-hidden shadow-lg" style={{ aspectRatio: '4/3' }}>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=67.078617%2C39.019220&mode=search&sll=67.079361%2C39.026111&text=39.026111%2C67.079361&z=14.53"
                width="100%"
                height="100%"
                frameBorder={0}
                allowFullScreen
                loading="lazy"
                style={{ display: 'block', position: 'absolute', inset: 0 }}
                title="Miraki Gardens — Shahrisabz xaritasi"
              />

              {/* Yo'nalish tugmasi */}
              <a
                href="https://yandex.uz/maps/-/CPG45Eo-"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: '#1a3328',
                  color: '#f5f0e8',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-montserrat)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                <MapPin className="w-4 h-4" />
                Yo'nalish olish
              </a>
            </div>

            {/* Qo'shimcha info */}
            <div className="flex flex-wrap gap-5 mt-4 text-sm text-[#1a3328]/50">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Uloch MFY, Shahrisabz
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Shahrisabzdan ~15 daqiqa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
