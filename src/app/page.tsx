import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PrintSoftDrive — Device Drivers Explained in Plain English',
  description: 'PrintSoftDrive explains printer, scanner, graphics, audio, Wi-Fi, Bluetooth, and USB drivers in plain English, with calm fixes for common problems.',
}

const drivers = [
  { id: 'printer',   name: 'Printer Drivers',   desc: 'From the print spooler to the final page — keeping your printing flow seamless.',        icon: '🖨️' },
  { id: 'scanner',   name: 'Scanner Drivers',   desc: 'How your scanner talks to imaging apps — and why it sometimes stops.',                    icon: '📄' },
  { id: 'graphics',  name: 'Graphics Drivers',  desc: 'The bridge between your GPU and every pixel on your screen.',                             icon: '🖥️' },
  { id: 'audio',     name: 'Audio Drivers',     desc: 'Sample-accurate communication for every sound your system makes.',                        icon: '🔊' },
  { id: 'network',   name: 'Network Drivers',   desc: 'The invisible cable connecting your computer to the digital world.',                      icon: '📡' },
  { id: 'bluetooth', name: 'Bluetooth Drivers', desc: 'Pairing, discovery, and the stack that makes wireless work.',                             icon: '📶' },
  { id: 'usb',       name: 'USB Drivers',       desc: 'The universal translator for all your plug-and-play devices.',                            icon: '🔌' },
]

const features = [
  { title: 'Plain English Guides',     desc: 'No jargon. Just clear explanations of how your devices communicate.' },
  { title: 'Calm Troubleshooting',     desc: 'Step-by-step solutions for common driver-related headaches.' },
  { title: 'Independent & Trusted',    desc: 'We provide knowledge, not downloads. Fully independent education.' },
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
          HERO
      ══════════════════════════════════════════ */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-inner animate-fade-in">
            <div className="hero-badge">
              <span className="hero-badge-dot">✓</span>
              Trusted Driver Knowledge Base
            </div>

            <h1 className="home-hero-title">
              Printer Drivers,<br />
              <span className="gradient-text">Explained Clearly.</span>
            </h1>

            <p className="home-hero-desc">
              Learn how printer drivers work, troubleshoot issues, and find practical 
              solutions explained in simple language.
            </p>

            <div className="hero-actions">
              <Link href="/drivers/" className="btn btn-primary">
                Explore Drivers
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/knowledge/" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* decorative rings */}
        <div className="hero-rings" aria-hidden="true">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="stats-bar" style={{ borderRadius: 0, border: 'none', background: 'transparent' }}>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Driver Guides</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Printer Models</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Knowledge Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          KNOWLEDGE CENTER PROMO
      ══════════════════════════════════════════ */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="kc-grid">
            <div className="kc-text">
              <span className="kicker"><span className="kicker-dot" />Driver Knowledge Center</span>
              <h2>Guides &amp; Troubleshooting</h2>
              <p>From printer setup to advanced driver diagnostics — everything in one calm, organised hub.</p>
              <ul className="kc-chips">
                {['Printer Setup Guides', 'Driver Installation Help', 'Error Fix Tutorials', 'Compatibility Resources'].map(t => (
                  <li key={t} className="kc-chip">{t}</li>
                ))}
              </ul>
              <div className="kc-stat">
                <span className="kc-stat-num">1000+</span>
                <span className="kc-stat-lbl">Monthly Readers</span>
              </div>
            </div>
            <div className="kc-visual">
              <Image
                src="/assets/images/knowledge-flow.svg"
                alt="Knowledge centre illustration"
                width={560}
                height={460}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DRIVER CATEGORIES
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
              <Link key={d.id} href={`/drivers/${d.id}/`} className="card cat-card">
                <div className="card-icon">{d.icon}</div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <span className="more">
                  Explore Guide
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY DRIVERS MATTER (split)
      ══════════════════════════════════════════ */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split">
            <div className="animate-fade-in">
              <span className="section-kicker">Why Drivers Matter</span>
              <h2>The bridge between<br />software and hardware.</h2>
              <p>
                Every click, print command, and device action needs a driver working behind
                the scenes. Drivers translate instructions between your operating system and
                physical hardware.
              </p>
              <ul className="ticks">
                {features.map(f => (
                  <li key={f.title}>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '2px', color: 'var(--text-main)' }}>{f.title}</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.93rem' }}>{f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="img-wrapper">
                <Image
                  src="/assets/images/home-translator.svg"
                  alt="Driver translation between software and hardware"
                  width={560}
                  height={480}
                  style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                />
              </div>
              {/* floating mini-stats */}
              <div className="float-stats">
                <div className="float-stat">
                  <span className="float-num">7</span>
                  <span className="float-lbl">Driver Families</span>
                </div>
                <div className="float-stat">
                  <span className="float-num">40+</span>
                  <span className="float-lbl">Plain-English Guides</span>
                </div>
                <div className="float-stat">
                  <span className="float-num">0</span>
                  <span className="float-lbl">Downloads Hosted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="block">
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
      <section className="block" style={{ paddingTop: 0 }}>
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
