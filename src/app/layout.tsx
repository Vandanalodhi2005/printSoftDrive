import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'PrintSoftDrive — Device Drivers Explained in Plain English',
    template: '%s | PrintSoftDrive',
  },
  description: 'PrintSoftDrive explains printer, scanner, graphics, audio, Wi-Fi, Bluetooth, and USB drivers in plain English, with calm fixes for common problems. Independent, no downloads.',
  keywords: ['device drivers', 'printer driver', 'scanner driver', 'graphics drivers', 'audio drivers', 'wifi driver', 'bluetooth driver', 'usb drivers'],
  authors: [{ name: 'PrintSoftDrive' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PrintSoftDrive',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
