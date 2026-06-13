import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Marquee from '../components/Marquee'
import HomeTabs from '../components/HomeTabs'

export const metadata: Metadata = {
  title: 'PrintSoftDrive — Device Drivers Explained in Plain English',
  description: 'PrintSoftDrive explains printer, scanner, graphics, audio, Wi-Fi, Bluetooth, and USB drivers in plain English, with calm fixes for common problems.',
}

const drivers = [
  { id: 'printer',   name: 'Printer Drivers',   desc: 'From the print spooler to the final page — keeping your printing flow seamless.',        icon: '🖨️', tag: 'Output' },
  { id: 'scanner',   name: 'Scanner Drivers',   desc: 'How your scanner talks to imaging apps — and why it sometimes stops.',                    icon: '📄', tag: 'Input' },
  { id: 'graphics',  name: 'Graphics Drivers',  desc: 'The bridge between your GPU and every pixel on your screen.',                             icon: '🖥️', tag: 'Performance' },
  { id: 'audio',     name: 'Audio Drivers',     desc: 'Sample-accurate communication for every sound your system makes.',                        icon: '🔊', tag: 'Real-time' },
  { id: 'network',   name: 'Network Drivers',   desc: 'The invisible cable connecting your computer to the digital world.',                      icon: '📡', tag: 'Connectivity' },
  { id: 'bluetooth', name: 'Bluetooth Drivers', desc: 'Pairing, discovery, and the stack that makes wireless work.',                             icon: '📶', tag: 'Wireless' },
  { id: 'usb',       name: 'USB Drivers',       desc: 'The universal translator for all your plug-and-play devices.',                            icon: '🔌', tag: 'Plug & Play' },
]

const faqs = [
  {
    q: 'Do you provide driver downloads?',
    a: 'No. We are an educational site only. The safest source for any driver is always your hardware manufacturer\'s official support page or your operating system\'s built-in update tool. We explain what to look for, never host files.',
  },
  {
    q: 'Is this site affiliated with any hardware or OS company?',
    a: 'No. PrintSoftDrive is fully independent, with no sponsorship or endorsement from any vendor, which is exactly why we can stay neutral and plain-spoken.',
  },
  {
    q: 'Where should I start?',
    a: 'If something is broken, head to the Knowledge hub and try the universal fixes first. If you\'re just curious, pick the driver family that matches your hardware and read the overview.',
  },
]

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO PRO
      ══════════════════════════════════════════ */}
      <section className="hero-pro">
        <div className="hero-pro-grid-layout">
          {/* Main Hero Content */}
          <div className="hero-pro-content animate-fade-in">
            <span className="hero-pro-tag">
              <span className="hero-pro-dot">✓</span>
              Independent Driver Education
            </span>
            
            <h1 className="hero-pro-title">
              The Quiet Software That<br />
              Makes Your <span className="gradient-text">Device Work.</span>
            </h1>

            <p className="hero-pro-sub">
              Drivers are the invisible translators between your computer and
              everything plugged into it. Learn how they work, troubleshoot issues,
              and find practical solutions explained in simple language.
            </p>

            <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
              <Link href="/drivers/" className="btn btn-primary">
                Explore Drivers
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/knowledge/" className="btn btn-outline">
                Knowledge Help
              </Link>
            </div>

            <div className="hero-pro-stats">
              <div className="hero-pro-stat">
                <span className="hero-pro-stat-num">7</span>
                <span className="hero-pro-stat-label">Driver Categories</span>
              </div>
              <div className="hero-pro-stat-divider" aria-hidden="true"></div>
              <div className="hero-pro-stat">
                <span className="hero-pro-stat-num">500+</span>
                <span className="hero-pro-stat-label">Driver Guides</span>
              </div>
              <div className="hero-pro-stat-divider" aria-hidden="true"></div>
              <div className="hero-pro-stat">
                <span className="hero-pro-stat-num">100%</span>
                <span className="hero-pro-stat-label">Free, Always</span>
              </div>
            </div>
          </div>

          {/* Right Rail */}
          <aside className="hero-rail">
            <section className="hero-rail-discover" aria-labelledby="discoverHeading">
              <h2 className="hero-rail-discover-title" id="discoverHeading">
                Discover More
              </h2>
              <ul className="hero-rail-discover-list" role="list">
                <li>
                  <Link href="/drivers/graphics/">
                    <span className="hero-rail-discover-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>How Display Drivers Render Every Pixel</span>
                  </Link>
                </li>
                <li>
                  <Link href="/drivers/network/">
                    <span className="hero-rail-discover-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M2 9a15 15 0 0 1 20 0M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="12" cy="20" r="1.2" fill="currentColor" />
                      </svg>
                    </span>
                    <span>Why Wi-Fi Drivers Quietly Drop Out</span>
                  </Link>
                </li>
                <li>
                  <Link href="/drivers/audio/">
                    <span className="hero-rail-discover-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M4 9v6h4l5 4V5L8 9H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M16 8a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>The Tiny Software Behind Crisp Audio</span>
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge/">
                    <span className="hero-rail-discover-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M4 17a3 3 0 0 1 3-3h12" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </span>
                    <span>Browse the Full Knowledge Hub</span>
                  </Link>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════════ */}
      <Marquee />

      {/* ══════════════════════════════════════════
          WHAT IS A DRIVER (Tabs)
      ══════════════════════════════════════════ */}
      <HomeTabs />

      {/* ══════════════════════════════════════════
          DRIVER CATEGORIES (Grid)
      ══════════════════════════════════════════ */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What We Cover</span>
            <h2>Explore Driver Categories</h2>
            <p>
              Learn, troubleshoot and understand every major driver category through simple,
              practical explanations.
            </p>
          </div>

          <div className="grid grid-auto-3">
            {drivers.map(d => (
              <Link key={d.id} href={`/drivers/${d.id}/`} className="driver-tile">
                <span className="driver-tile-tag">{d.tag}</span>
                <div className="driver-tile-icon">{d.icon}</div>
                <h3>{d.name}</h3>
                <p className="driver-tile-summary">{d.desc}</p>
                <span className="driver-tile-toggle">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Start Here</span>
            <h2>Common First Questions</h2>
            <p>The questions readers ask most before exploring our guides.</p>
          </div>

          <div className="faq">
            {faqs.map((item, i) => (
              <details key={i}>
                <summary>{item.q}</summary>
                <div className="faq-body"><p style={{ margin: 0 }}>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <section className="block">
        <div className="container">
          <div className="cta-band">
            <span className="section-kicker" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)' }}>Community Driven</span>
            <h2>Want us to explain<br />another driver topic?</h2>
            <p>
              Our friendly overview covers every major hardware category — from the device on
              your desk to the chips inside your laptop. Tell us what to write next.
            </p>
            <div className="cta-actions">
              <Link href="/drivers/" className="btn btn-primary">
                Browse All Topics
              </Link>
              <Link href="/knowledge/" className="btn btn-ghost-white">
                Need Help? Visit Knowledge
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
