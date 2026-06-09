'use client';

import Link from 'next/link';
import Image from 'next/image';

const year = new Date().getFullYear();

const cols = [
  {
    title: 'Resources',
    links: [
      { label: 'Home',           href: '/' },
      { label: 'All Drivers',    href: '/drivers/' },
      { label: 'Knowledge Base', href: '/knowledge/' },
      { label: 'Driver Blog',    href: '/blog/' },
    ],
  },
  {
    title: 'Driver Guides',
    links: [
      { label: 'Printer Drivers',   href: '/drivers/printer/' },
      { label: 'Graphics Drivers',  href: '/drivers/graphics/' },
      { label: 'Audio Drivers',     href: '/drivers/audio/' },
      { label: 'Network Drivers',   href: '/drivers/network/' },
      { label: 'Bluetooth Drivers', href: '/drivers/bluetooth/' },
      { label: 'USB Drivers',       href: '/drivers/usb/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',       href: '/about/' },
      { label: 'Contact',        href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Use',   href: '/terms/' },
      { label: 'Disclaimer',     href: '/disclaimer/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr__topline" aria-hidden="true" />

      <div className="container">
        <div className="ftr__grid">

          {/* Brand */}
          <div className="ftr__brand">
            <Link href="/" className="ftr__logo-link">
              <Image src="/logo1.png" alt="PrintSoftDrive" width={180} height={36}
                style={{ height: '32px', width: 'auto' }} />
            </Link>
            <p className="ftr__tagline">
              Your plain-English guide to device drivers. We translate the technical
              so you can master your hardware with confidence.
            </p>
            <div className="ftr__badge">
              <span className="ftr__badge-dot" aria-hidden="true" />
              Independent · No Downloads
            </div>
          </div>

          {/* Columns */}
          <div className="ftr__cols">
            {cols.map(col => (
              <div key={col.title} className="ftr__col">
                <p className="ftr__col-title">{col.title}</p>
                <ul className="ftr__col-list">
                  {col.links.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className="ftr__link">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="ftr__divider" />

        <div className="ftr__bottom">
          <p className="ftr__copy">© {year} PrintSoftDrive. All rights reserved.</p>
          <nav className="ftr__legal" aria-label="Legal">
            <Link href="/privacy/"    className="ftr__legal-link">Privacy</Link>
            <span className="ftr__sep" aria-hidden="true">·</span>
            <Link href="/terms/"      className="ftr__legal-link">Terms</Link>
            <span className="ftr__sep" aria-hidden="true">·</span>
            <Link href="/disclaimer/" className="ftr__legal-link">Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
