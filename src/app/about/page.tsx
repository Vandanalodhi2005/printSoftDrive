import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About PrintSoftDrive — Independent, Plain-English Driver Guides',
  description: 'PrintSoftDrive is a small, independent education project: plain-English driver overviews, no downloads, no sponsorships.',
}

const pillars = [
  { title: 'Driver Overviews',  desc: 'Clear, jargon-free guides for every major hardware family — graphics, audio, network, and more.', icon: '📚' },
  { title: 'Knowledge Hub',     desc: 'A calm, ordered space with step-by-step fixes for the symptoms readers ask about most.',           icon: '💡' },
  { title: 'Friendly Blog',     desc: 'Short explainers and deep dives into how your computer really works underneath.',                  icon: '✍️' },
]

export default function About() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>
            <span className="section-kicker">About PrintSoftDrive</span>
            <h1>Translating Technical into<br /><span style={{ color: 'var(--primary)' }}>the Accessible</span></h1>
            <p className="hero-lede">
              PrintSoftDrive is a small, independent education project with one core belief: technology should not feel intimidating.
              We're here to explain the "how" and "why" behind your computer's most invisible components.
            </p>
            <div className="hero-actions">
              <Link href="/drivers/" className="btn btn-primary">Explore Our Guides</Link>
              <Link href="/contact/" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We Exist ── */}
      <section className="block">
        <div className="container">
          <div className="split">
            <div className="animate-fade-in">
              <span className="section-kicker">Our Mission</span>
              <h2>Why We Exist</h2>
              <p style={{ fontSize: '1.12rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.65 }}>
                Most driver advice online falls into two camps: dense engineering docs or pushy sales pages. We wanted a calm third option.
              </p>
              <p>
                PrintSoftDrive explains what each kind of driver actually does, in plain English, and walks through common
                problems with patience instead of jargon. We don't host downloads, we don't run a help desk, and we don't take
                sponsorships from the companies we write about.
              </p>
              <p>
                That independence is what lets us stay neutral and honest. We're not here to sell you anything; we're here to help
                you understand your machine.
              </p>
              <ul className="ticks" style={{ marginTop: '24px' }}>
                <li>No downloads hosted — we point to official sources</li>
                <li>No sponsorships — fully editorially independent</li>
                <li>No jargon — plain English, always</li>
              </ul>
            </div>
            <div className="split-media">
              <Image
                src="/assets/images/home-translator.svg"
                alt="Independence and neutrality illustration"
                width={600}
                height={500}
                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What We Offer</span>
            <h2>Three Pillars of Education</h2>
            <p>Everything we publish fits into one of three categories — all free, all jargon-free.</p>
          </div>
          <div className="grid grid-auto-3">
            {pillars.map(p => (
              <div key={p.title} className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
                <div className="card-icon" style={{ fontSize: '1.75rem', margin: '0 auto 20px' }}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="block">
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image
                src="/assets/images/system-fix.svg"
                alt="Professional and safe approach"
                width={600}
                height={500}
                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="animate-fade-in">
              <span className="section-kicker">Our Promise</span>
              <h2>Plain English, Always</h2>
              <p>
                Friendly, never condescending. If a sentence here ever reads like it was written to impress rather than to help, we got it wrong.
              </p>
              <p>
                We are not affiliated with any hardware maker, software publisher, or operating-system vendor.
                When you need to change something on your machine, we'll always point you to the official device maker's site — the safest source.
              </p>
              <Link href="/contact/" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Suggest a Topic
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <span className="section-kicker" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)' }}>Get Started</span>
            <h2>Ready to explore our guides?</h2>
            <p>Pick a driver family that matches your hardware and start learning today.</p>
            <div className="cta-actions">
              <Link href="/drivers/" className="btn btn-primary">Explore Driver Families</Link>
              <Link href="/knowledge/" className="btn btn-ghost-white">Troubleshooting Hub</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
