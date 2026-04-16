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

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#1a3328]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a3328] transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#1a3328] group-hover:text-[#d4af37] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[#1a3328] font-medium text-lg mb-2">Phone</h3>
                  <p className="text-[#1a3328]/60">
                    {t.contact.phone}
                  </p>
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

          {/* Map Placeholder */}
          <div className={cn(
            'transition-all duration-1000 delay-300',
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}>
            <div className="relative aspect-[4/3] bg-[#1a3328]/5 rounded-sm overflow-hidden">
              {/* Map Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a3328]/10 to-[#1a3328]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#1a3328]/30 mx-auto mb-4" />
                  <p className="text-[#1a3328]/50 font-[family-name:var(--font-montserrat)] text-sm tracking-wider">
                    Shahrisabz, Uzbekistan
                  </p>
                </div>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-4 border border-[#d4af37]/20 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
