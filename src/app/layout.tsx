import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

export const viewport: Viewport = {
  themeColor: '#072A47',
}

export const metadata: Metadata = {
  title: 'PrintSoftDrive — Device Drivers Explained in Plain English',
  description: 'PrintSoftDrive explains printer, scanner, graphics, audio, Wi-Fi, Bluetooth, and USB drivers in plain English, with calm fixes for common problems. Independent, no downloads.',
  keywords: ['device drivers', 'printer driver', 'scanner driver', 'graphics drivers', 'audio drivers', 'wifi driver', 'bluetooth driver', 'usb drivers'],
  authors: [{ name: 'PrintSoftDrive' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/viewport.jquery.js" strategy="lazyOnload" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollToPlugin.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/SplitText.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/TextPlugin.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.waypoints.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
