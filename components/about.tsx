'use client';

import { useLanguage } from '@/lib/language-context';
import { Mountain, Trees, Home, UtensilsCrossed } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const features = [
  { icon: Mountain, key: 'mountain' as const },
  { icon: Trees, key: 'garden' as const },
  { icon: Home, key: 'accommodation' as const },
  { icon: UtensilsCrossed, key: 'dining' as const },
];

export function About() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#f5f0e8] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1a3328] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a3328] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={cn(
            'inline-block text-[#d4af37] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-medium mb-4 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.about.subtitle}
          </span>
          <h2 className={cn(
            'text-4xl md:text-5xl lg:text-6xl text-[#1a3328] font-medium mb-6 transition-all duration-700 delay-100',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.about.title}
          </h2>
          <div className={cn(
            'flex items-center justify-center gap-4 mb-8 transition-all duration-700 delay-200',
            isInView ? 'opacity-100' : 'opacity-0'
          )}>
            <div className="w-16 h-px bg-[#d4af37]" />
            <div className="w-2 h-2 rotate-45 border border-[#d4af37]" />
            <div className="w-16 h-px bg-[#d4af37]" />
          </div>
          <p className={cn(
            'max-w-3xl mx-auto text-[#1a3328]/70 text-lg md:text-xl leading-relaxed transition-all duration-700 delay-300',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.about.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const featureData = t.about.features[feature.key];
            return (
              <div
                key={feature.key}
                className={cn(
                  'group relative bg-white/80 backdrop-blur-sm p-8 rounded-sm border border-[#1a3328]/10 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#1a3328]/5',
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#1a3328]/5 flex items-center justify-center mb-6 group-hover:bg-[#1a3328] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#1a3328] group-hover:text-[#d4af37] transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl text-[#1a3328] font-medium mb-3">
                  {featureData.title}
                </h3>
                <p className="text-[#1a3328]/60 leading-relaxed">
                  {featureData.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Decorative Image Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            'relative transition-all duration-1000 delay-500',
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
                alt="Miraki Garden mountain landscape"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3328]/30 to-transparent" />
            </div>
            {/* Floating Accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#d4af37]/30 rounded-sm -z-10" />
          </div>

          <div className={cn(
            'relative transition-all duration-1000 delay-700',
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2070&auto=format&fit=crop"
                alt="Miraki Garden vineyard"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3328]/30 to-transparent" />
            </div>
            {/* Floating Accent */}
            <div className="absolute -top-6 -left-6 w-48 h-48 border border-[#d4af37]/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
