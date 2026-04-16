'use client';

import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Mountain, Leaf, Wine, Sparkles } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Mountain, key: 'views' as const },
  { icon: Leaf, key: 'fresh' as const },
  { icon: Wine, key: 'wine' as const },
  { icon: Sparkles, key: 'atmosphere' as const },
];

export function Restaurant() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="restaurant" className="py-24 md:py-32 bg-[#f5f0e8] relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className={cn(
            'relative transition-all duration-1000',
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}>
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                alt="Miraki Garden Restaurant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3328]/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-[#1a3328] p-8 rounded-sm shadow-2xl max-w-xs">
              <div className="text-[#d4af37] text-5xl font-light mb-2">120</div>
              <div className="text-[#f5f0e8]/70 text-sm font-[family-name:var(--font-montserrat)] tracking-wider uppercase">
                Seats Available
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#d4af37]/30 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div className={cn(
            'transition-all duration-1000 delay-300',
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}>
            <span className="inline-block text-[#d4af37] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-medium mb-4">
              {t.restaurant.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1a3328] font-medium mb-6">
              {t.restaurant.title}
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-[#d4af37]" />
              <div className="w-2 h-2 rotate-45 border border-[#d4af37]" />
            </div>
            <p className="text-[#1a3328]/70 text-lg leading-relaxed mb-10">
              {t.restaurant.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.key}
                    className={cn(
                      'flex items-center gap-4 transition-all duration-500',
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    )}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1a3328]/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1a3328]" />
                    </div>
                    <span className="text-[#1a3328] text-sm font-[family-name:var(--font-montserrat)] tracking-wider">
                      {t.restaurant.features[feature.key]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="#booking"
              className="inline-block px-10 py-4 bg-[#1a3328] text-[#f5f0e8] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-medium hover:bg-[#2a4338] transition-all duration-300"
            >
              {t.restaurant.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
