'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Calendar, Users, Home, User, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const roomTypes = [
  { key: 'standard', price: '1,400,000 UZS' },
  { key: 'luks', price: '1,800,000 UZS' },
  { key: 'bunker', price: '2,000,000 UZS' },
  { key: 'hobbit', price: '2,200,000 UZS' },
];

interface FormData {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  fullName: string;
  phone: string;
}

interface FormErrors {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
  fullName?: string;
  phone?: string;
}

export function Booking() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const [formData, setFormData] = useState<FormData>({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: '',
    fullName: '',
    phone: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Listen for room selection from Rooms component
  useEffect(() => {
    const handleRoomSelected = (event: CustomEvent<string>) => {
      const roomKey = event.detail;
      const room = roomTypes.find(r => r.key === roomKey);
      if (room) {
        const roomName = t.rooms.types[roomKey as keyof typeof t.rooms.types].name;
        setFormData(prev => ({ ...prev, roomType: roomName }));
        // Clear any room type error
        setErrors(prev => ({ ...prev, roomType: undefined }));
      }
    };

    // Check sessionStorage on mount
    const savedRoom = sessionStorage.getItem('selectedRoom');
    if (savedRoom) {
      const room = roomTypes.find(r => r.key === savedRoom);
      if (room) {
        const roomName = t.rooms.types[savedRoom as keyof typeof t.rooms.types].name;
        setFormData(prev => ({ ...prev, roomType: roomName }));
      }
      sessionStorage.removeItem('selectedRoom');
    }

    window.addEventListener('roomSelected', handleRoomSelected as EventListener);
    return () => {
      window.removeEventListener('roomSelected', handleRoomSelected as EventListener);
    };
  }, [t]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.checkIn) newErrors.checkIn = t.booking.form.required;
    if (!formData.checkOut) newErrors.checkOut = t.booking.form.required;
    if (!formData.guests) newErrors.guests = t.booking.form.required;
    if (!formData.roomType) newErrors.roomType = t.booking.form.required;
    if (!formData.fullName) newErrors.fullName = t.booking.form.required;
    if (!formData.phone) newErrors.phone = t.booking.form.required;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          guests: parseInt(formData.guests),
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          checkIn: '',
          checkOut: '',
          guests: '1',
          roomType: '',
          fullName: '',
          phone: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#1a3328] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className={cn(
              'inline-block text-[#d4af37] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-medium mb-4 transition-all duration-700',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              {t.booking.subtitle}
            </span>
            <h2 className={cn(
              'text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] font-medium mb-6 transition-all duration-700 delay-100',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              {t.booking.title}
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
              'max-w-xl mx-auto text-[#f5f0e8]/70 text-lg leading-relaxed transition-all duration-700 delay-300',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              {t.booking.description}
            </p>
          </div>

          {/* Booking Form */}
          <div className={cn(
            'bg-[#f5f0e8]/5 backdrop-blur-sm border border-[#f5f0e8]/10 rounded-sm p-8 md:p-12 transition-all duration-700 delay-400',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
                <p className="text-[#f5f0e8] text-xl leading-relaxed">
                  {t.booking.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Date Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm font-[family-name:var(--font-montserrat)] tracking-wider mb-3">
                      <Calendar className="w-4 h-4 inline-block mr-2" />
                      {t.booking.form.checkIn}
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.checkIn}
                      onChange={handleChange('checkIn')}
                      className={cn(
                        'w-full bg-transparent border-b-2 py-3 text-[#f5f0e8] focus:outline-none transition-colors',
                        errors.checkIn ? 'border-red-400' : 'border-[#f5f0e8]/30 focus:border-[#d4af37]'
                      )}
                    />
                    {errors.checkIn && (
                      <p className="text-red-400 text-xs mt-2">{errors.checkIn}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm font-[family-name:var(--font-montserrat)] tracking-wider mb-3">
                      <Calendar className="w-4 h-4 inline-block mr-2" />
                      {t.booking.form.checkOut}
                    </label>
                    <input
                      type="date"
                      min={formData.checkIn || today}
                      value={formData.checkOut}
                      onChange={handleChange('checkOut')}
                      className={cn(
                        'w-full bg-transparent border-b-2 py-3 text-[#f5f0e8] focus:outline-none transition-colors',
                        errors.checkOut ? 'border-red-400' : 'border-[#f5f0e8]/30 focus:border-[#d4af37]'
                      )}
                    />
                    {errors.checkOut && (
                      <p className="text-red-400 text-xs mt-2">{errors.checkOut}</p>
                    )}
                  </div>
                </div>

                {/* Guests and Room Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm font-[family-name:var(--font-montserrat)] tracking-wider mb-3">
                      <Users className="w-4 h-4 inline-block mr-2" />
                      {t.booking.form.guests}
                    </label>
                    <select
                      value={formData.guests}
                      onChange={handleChange('guests')}
                      className={cn(
                        'w-full bg-transparent border-b-2 py-3 text-[#f5f0e8] focus:outline-none transition-colors appearance-none cursor-pointer',
                        errors.guests ? 'border-red-400' : 'border-[#f5f0e8]/30 focus:border-[#d4af37]'
                      )}
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num} className="bg-[#1a3328] text-[#f5f0e8]">
                          {num}
                        </option>
                      ))}
                    </select>
                    {errors.guests && (
                      <p className="text-red-400 text-xs mt-2">{errors.guests}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm font-[family-name:var(--font-montserrat)] tracking-wider mb-3">
                      <Home className="w-4 h-4 inline-block mr-2" />
                      {t.booking.form.roomType}
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={handleChange('roomType')}
                      className={cn(
                        'w-full bg-transparent border-b-2 py-3 text-[#f5f0e8] focus:outline-none transition-colors appearance-none cursor-pointer',
                        errors.roomType ? 'border-red-400' : 'border-[#f5f0e8]/30 focus:border-[#d4af37]'
                      )}
                    >
                      <option value="" className="bg-[#1a3328] text-[#f5f0e8]/50">
                        {t.booking.form.selectRoom}
                      </option>
                      {roomTypes.map((room) => (
                        <option key={room.key} value={t.rooms.types[room.key as keyof typeof t.rooms.types].name} className="bg-[#1a3328] text-[#f5f0e8]">
                          {t.rooms.types[room.key as keyof typeof t.rooms.types].name} - {room.price}
                        </option>
                      ))}
                    </select>
                    {errors.roomType && (
                      <p className="text-red-400 text-xs mt-2">{errors.roomType}</p>
                    )}
                  </div>
                </div>

                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm font-[family-name:var(--font-montserrat)] tracking-wider mb-3">
                      <User className="w-4 h-4 inline-block mr-2" />
                      {t.booking.form.fullName}
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange('fullName')}
                      className={cn(
                        'w-full bg-transparent border-b-2 py-3 text-[#f5f0e8] focus:outline-none transition-colors',
                        errors.fullName ? 'border-red-400' : 'border-[#f5f0e8]/30 focus:border-[#d4af37]'
                      )}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-2">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm font-[family-name:var(--font-montserrat)] tracking-wider mb-3">
                      <Phone className="w-4 h-4 inline-block mr-2" />
                      {t.booking.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      placeholder="+998 XX XXX XX XX"
                      className={cn(
                        'w-full bg-transparent border-b-2 py-3 text-[#f5f0e8] focus:outline-none transition-colors placeholder:text-[#f5f0e8]/30',
                        errors.phone ? 'border-red-400' : 'border-[#f5f0e8]/30 focus:border-[#d4af37]'
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-2">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 rounded-sm">
                    <AlertCircle className="w-5 h-5" />
                    <p>{t.booking.form.error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#d4af37] text-[#1a3328] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-semibold hover:bg-[#c9a430] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t.booking.form.submitting}
                    </>
                  ) : (
                    t.booking.form.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
