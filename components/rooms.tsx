'use client';

import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Wifi, Thermometer, Mountain, Wine, TreeDeciduous, Home } from 'lucide-react';

const rooms = [
  {
    key: 'standard' as const,
    price: '1,400,000',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
    amenities: ['wifi', 'ac', 'view'] as const,
  },
  {
    key: 'luks' as const,
    price: '1,800,000',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    amenities: ['wifi', 'ac', 'view', 'terrace'] as const,
  },
  {
    key: 'bunker' as const,
    price: '2,000,000',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop',
    amenities: ['wifi', 'ac', 'underground', 'minibar'] as const,
  },
  {
    key: 'hobbit' as const,
    price: '2,200,000',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    amenities: ['wifi', 'ac', 'underground', 'terrace', 'minibar'] as const,
  },
];

const amenityIcons = {
  wifi: Wifi,
  ac: Thermometer,
  view: Mountain,
  minibar: Wine,
  terrace: TreeDeciduous,
  underground: Home,
};

export function Rooms() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="rooms" className="py-24 md:py-32 bg-[#1a3328] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4af37] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={cn(
            'inline-block text-[#d4af37] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-medium mb-4 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.rooms.subtitle}
          </span>
          <h2 className={cn(
            'text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] font-medium mb-6 transition-all duration-700 delay-100',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.rooms.title}
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
            'max-w-2xl mx-auto text-[#f5f0e8]/70 text-lg md:text-xl leading-relaxed transition-all duration-700 delay-300',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            {t.rooms.description}
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {rooms.map((room, index) => {
            const roomData = t.rooms.types[room.key];
            return (
              <div
                key={room.key}
                className={cn(
                  'group relative bg-[#f5f0e8]/5 backdrop-blur-sm rounded-sm overflow-hidden border border-[#f5f0e8]/10 hover:border-[#d4af37]/50 transition-all duration-500',
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={room.image}
                    alt={roomData.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3328] via-[#1a3328]/20 to-transparent" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-6 right-6 bg-[#d4af37] px-4 py-2 rounded-sm">
                    <span className="text-[#1a3328] text-sm font-[family-name:var(--font-montserrat)] font-semibold">
                      {room.price} UZS
                    </span>
                    <span className="text-[#1a3328]/70 text-xs block font-[family-name:var(--font-montserrat)]">
                      {t.rooms.perNight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl text-[#f5f0e8] font-medium mb-3">
                    {roomData.name}
                  </h3>
                  <p className="text-[#f5f0e8]/60 leading-relaxed mb-6">
                    {roomData.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {room.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity];
                      return (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 text-[#f5f0e8]/50"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-xs font-[family-name:var(--font-montserrat)] tracking-wider">
                            {t.rooms.amenities[amenity]}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      // Set the selected room in sessionStorage
                      sessionStorage.setItem('selectedRoom', room.key);
                      // Scroll to booking section
                      const bookingSection = document.getElementById('booking');
                      if (bookingSection) {
                        bookingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      // Dispatch custom event to notify booking form
                      window.dispatchEvent(new CustomEvent('roomSelected', { detail: room.key }));
                    }}
                    className="w-full text-center py-3 border border-[#d4af37] text-[#d4af37] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-medium hover:bg-[#d4af37] hover:text-[#1a3328] transition-all duration-300"
                  >
                    {t.rooms.bookRoom}
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
