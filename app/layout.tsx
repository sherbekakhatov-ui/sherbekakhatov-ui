import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://miraki-garden.uz'),
  title: {
    default: 'Miraki Garden – Shahrisabz dam olish maskani',
    template: '%s | Miraki Garden',
  },
  description: "Miraki Garden – Shahrisabzda joylashgan zamonaviy dam olish maskani. Tabiat qo'ynida dam oling.",
  icons: {
    icon: '/favicon.png',
  },
  keywords: 'Shahrisabz dam olish maskani, Miraki Garden, Shahrisabz hotel, отдых в Шахрисабзе, resort in Shahrisabz',
  authors: [{ name: 'Miraki Garden' }],
  creator: 'Miraki Garden',
  publisher: 'Miraki Garden',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://miraki-garden.uz',
    languages: {
      'en': 'https://miraki-garden.uz',
      'ru': 'https://miraki-garden.uz',
      'uz': 'https://miraki-garden.uz',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    alternateLocale: ['ru_RU', 'en_US'],
    url: 'https://miraki-garden.uz',
    siteName: 'Miraki Garden',
    title: 'Miraki Garden – Shahrisabz dam olish maskani',
    description: "Miraki Garden – Shahrisabzda joylashgan zamonaviy dam olish maskani. Tabiat qo'ynida dam oling.",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Miraki Garden - Luxury Mountain Resort',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miraki Garden – Shahrisabz dam olish maskani',
    description: "Miraki Garden – Shahrisabzda joylashgan zamonaviy dam olish maskani. Tabiat qo'ynida dam oling.",
    images: ['/images/og-image.jpg'],
  },
  other: {
    'theme-color': '#1a3328',
    'msapplication-TileColor': '#1a3328',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-serif antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
