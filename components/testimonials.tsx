'use client';

import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander M.',
    location: 'Moscow, Russia',
    rating: 5,
    text: {
      en: 'An absolutely magical experience. The mountain views, the fresh air, and the impeccable service made our anniversary unforgettable. The Hobbit Luks suite was beyond our wildest dreams.',
      ru: 'Абсолютно волшебный опыт. Горные виды, свежий воздух и безупречный сервис сделали нашу годовщину незабываемой. Номер Хоббит Люкс превзошел все наши ожидания.',
      uz: "Mutlaqo sehrli tajriba. Tog' manzaralari, toza havo va benuqson xizmat bizning yubileyimizni unutilmas qildi. Hobbit Lyuks xonasi eng yovvoyi orzularimizdan ham oshdi.",
    },
  },
  {
    name: 'Sarah J.',
    location: 'Dubai, UAE',
    rating: 5,
    text: {
      en: 'I have stayed at luxury resorts around the world, but Miraki Garden offers something truly unique. The underground bunker room was an extraordinary experience, and the restaurant was phenomenal.',
      ru: 'Я останавливалась в роскошных курортах по всему миру, но Miraki Garden предлагает что-то действительно уникальное. Подземный бункер был необычайным опытом, а ресторан - феноменальным.',
      uz: "Men dunyodagi hashamatli kurorylarda bo'ldim, lekin Miraki Garden haqiqatan ham noyob narsani taklif qiladi. Yer osti bunkeri ajoyib tajriba edi, restoran esa ajoyib edi.",
    },
  },
  {
    name: 'Dmitry K.',
    location: 'Tashkent, Uzbekistan',
    rating: 5,
    text: {
      en: 'A hidden gem in Shahrisabz. The lavender fields, the vineyard walks, and the peaceful atmosphere provided the perfect escape from city life. Highly recommend for families.',
      ru: 'Скрытая жемчужина в Шахрисабзе. Лавандовые поля, прогулки по виноградникам и мирная атмосфера обеспечили идеальный отдых от городской жизни. Очень рекомендую для семей.',
      uz: "Shahrisabzdagi yashirin gavhar. Lavanda dalalari, uzumzor sayrlari va tinch muhit shahar hayotidan mukammal qochishni ta'minladi. Oilalar uchun juda tavsiya etaman.",
    },
  },
];

export function Testimonials() {
  const { language, t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-[#f5f0e8] relative overflow-hidden">
      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-48 h-48 text-[#1a3328]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-48 h-48 text-[#1a3328]" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={cn(
            'inline-block text-[#d4af37] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-medium mb-4 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.testimonials.subtitle}
          </span>
          <h2 className={cn(
            'text-4xl md:text-5xl lg:text-6xl text-[#1a3328] font-medium mb-6 transition-all duration-700 delay-100',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.testimonials.title}
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                'group relative bg-white p-8 lg:p-10 rounded-sm border border-[#1a3328]/10 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a3328]/10',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#1a3328]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#1a3328]/70 leading-relaxed mb-8 italic">
                {`"${testimonial.text[language]}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a3328]/10 flex items-center justify-center">
                  <span className="text-[#1a3328] font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-[#1a3328] font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-[#1a3328]/50 text-sm font-[family-name:var(--font-montserrat)]">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#d4af37]/0 group-hover:border-[#d4af37]/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
