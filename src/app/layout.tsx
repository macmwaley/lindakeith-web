import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LindaKeith Security Limited | Professional Security Services Kenya',
    template: '%s | LindaKeith Security Limited',
  },
  description:
    'LindaKeith Security Limited provides professional manned guarding, CCTV monitoring, access control, and security consultancy services across Nairobi, Ruiru, Thika, and Juja, Kenya.',
  keywords: [
    'security company Kenya',
    'security services Nairobi',
    'security guards Ruiru',
    'corporate security solutions Kenya',
  ],
  metadataBase: new URL('https://www.lindakeith.co.ke'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.lindakeith.co.ke',
    siteName: 'LindaKeith Security Limited',
    title: 'LindaKeith Security Limited | Professional Security Services Kenya',
    description:
      'Professional security solutions designed to safeguard businesses, residential communities, institutions, and critical infrastructure across Kenya.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LindaKeith Security Limited',
    description: 'Professional security services across Nairobi, Ruiru, Thika & Juja, Kenya.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'LindaKeith Security Limited',
              description: 'Professional security services in Kenya',
              url: 'https://www.lindakeith.co.ke',
              telephone: '+254700000000',
              email: 'info@lindakeith.co.ke',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ruiru',
                addressRegion: 'Kiambu County',
                addressCountry: 'KE',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}