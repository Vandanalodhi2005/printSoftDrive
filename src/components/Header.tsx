'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home',           path: '/' },
  { name: 'All Drivers',    path: '/drivers/' },
  { name: 'Knowledge Base', path: '/knowledge/' },
  { name: 'Blog',           path: '/blog/' },
  { name: 'About',          path: '/about/' },
  { name: 'Contact',        path: '/contact/' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const active = (p: string) =>
    p === '/' ? pathname === '/' : (pathname ?? '').startsWith(p);

  return (
    <>
      <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}`}>
        <div className="container hdr__inner">

          {/* Logo */}
          <Link href="/" className="hdr__logo">
            <Image src="/logo.png" alt="PrintSoftDrive" width={190} height={38} priority
              style={{ height: scrolled ? '28px' : '34px', width: 'auto', transition: 'height .25s ease' }} />
          </Link>

          {/* Desktop nav — pushed to the right via margin-left: auto */}
          <nav className="hdr__nav" aria-label="Main">
            {navLinks.map(l => (
              <Link key={l.name} href={l.path} className={`hdr__link${active(l.path) ? ' hdr__link--active' : ''}`}>
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Hamburger (mobile only) */}
          <div className="hdr__end">
            <button
              className={`hdr__burger${menuOpen ? ' hdr__burger--open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div className={`drawer-bd${menuOpen ? ' drawer-bd--show' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      {/* Mobile drawer */}
      <aside className={`drawer${menuOpen ? ' drawer--open' : ''}`} aria-label="Mobile navigation">
        <div className="drawer__head">
          <Link href="/" className="drawer__logo" onClick={() => setMenuOpen(false)}>
            <Image src="/logo.png" alt="PrintSoftDrive" width={160} height={32} style={{ height: '28px', width: 'auto' }} />
          </Link>
          <button className="drawer__close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <nav className="drawer__nav">
          {navLinks.map(l => (
            <Link key={l.name} href={l.path} className={`drawer__link${active(l.path) ? ' drawer__link--active' : ''}`}>
              <span>{l.name}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          ))}
        </nav>

        <div className="drawer__foot">
          <p className="drawer__note">Independent · No downloads · No jargon</p>
        </div>
      </aside>

      <div className="hdr__spacer" />
    </>
  );
}
