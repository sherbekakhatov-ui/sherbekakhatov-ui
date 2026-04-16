'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import type { Language } from '@/lib/translations';
import { cn } from '@/lib/utils';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'uz', label: "O'zbek" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#rooms', label: t.nav.rooms },
    { href: '#restaurant', label: t.nav.restaurant },
    { href: '#garden', label: t.nav.garden },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#booking', label: t.nav.booking },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[#1a3328]/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="relative z-10">
          <h1 className={cn(
            'text-2xl md:text-3xl font-medium tracking-wide transition-colors duration-300',
            isScrolled ? 'text-[#f5f0e8]' : 'text-[#f5f0e8]'
          )}>
            Miraki Garden
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm tracking-widest uppercase font-[family-name:var(--font-montserrat)] font-medium transition-colors duration-300 hover:text-[#d4af37]',
                isScrolled ? 'text-[#f5f0e8]/90' : 'text-[#f5f0e8]/90'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={cn(
                'flex items-center gap-2 text-sm tracking-wider uppercase font-[family-name:var(--font-montserrat)] font-medium transition-colors duration-300',
                isScrolled ? 'text-[#f5f0e8]/90' : 'text-[#f5f0e8]/90'
              )}
            >
              {languages.find((l) => l.code === language)?.label}
              <ChevronDown className={cn('w-4 h-4 transition-transform', isLangOpen && 'rotate-180')} />
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#1a3328]/95 backdrop-blur-md rounded-md overflow-hidden shadow-xl min-w-[120px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={cn(
                      'w-full px-4 py-2 text-left text-sm tracking-wider font-[family-name:var(--font-montserrat)] transition-colors',
                      language === lang.code
                        ? 'bg-[#d4af37]/20 text-[#d4af37]'
                        : 'text-[#f5f0e8]/90 hover:bg-[#f5f0e8]/10'
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book Now Button */}
          <Link
            href="#booking"
            className="px-6 py-2.5 bg-[#d4af37] text-[#1a3328] text-sm tracking-widest uppercase font-[family-name:var(--font-montserrat)] font-semibold rounded-sm hover:bg-[#c9a430] transition-colors duration-300"
          >
            {t.nav.bookNow}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 text-[#f5f0e8]"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-[#1a3328] transition-all duration-500 flex flex-col',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-[#f5f0e8] tracking-wider uppercase font-medium hover:text-[#d4af37] transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Language Switcher */}
          <div className="flex gap-4 mt-6">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                }}
                className={cn(
                  'text-sm tracking-wider uppercase font-[family-name:var(--font-montserrat)] transition-colors',
                  language === lang.code
                    ? 'text-[#d4af37]'
                    : 'text-[#f5f0e8]/70 hover:text-[#f5f0e8]'
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Book Button */}
          <Link
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 px-8 py-3 bg-[#d4af37] text-[#1a3328] text-sm tracking-widest uppercase font-[family-name:var(--font-montserrat)] font-semibold rounded-sm"
          >
            {t.nav.bookNow}
          </Link>
        </div>
      </div>
    </header>
  );
}
