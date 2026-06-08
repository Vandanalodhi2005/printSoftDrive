import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-bg"></div>
        <div className="container">
          <div className="home-hero-inner">
            <div className="eyebrow"><span className="dot"></span>Device Driver Education</div>
            <h1 className="home-hero-title">
              <span className="home-hero-sub">PRINT SOFT</span>
              DRIVE
            </h1>
            <p className="home-hero-desc">
              Every screen you see, sound you hear, and file you save passes through a driver first.
              We explain the whole quiet system in language anyone can follow.
            </p>
            <div className="hero-actions">
              <Link href="/drivers/" className="btn btn-primary">
                Browse All Drivers
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <Link href="/knowledge/" className="btn btn-light">
                Troubleshooting Hub
              </Link>
            </div>
          </div>
        </div>
        <div className="home-hero-orb home-hero-orb-1"></div>
        <div className="home-hero-orb home-hero-orb-2"></div>
      </section>



      {/* About */}
      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <div className="section-kicker" style={{ textAlign: 'left' }}>Why a driver matters</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800, color: '#000D44', margin: '0 0 16px' }}>A translator between two worlds</h2>
              <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 16 }}>
                Your applications speak in general terms — "play this sound," "draw this window," "send this file." Your hardware only understands very specific electrical instructions. A driver sits in the middle and translates, in real time, both directions.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                <div className="home-feat"><span className="home-feat-dot"></span><span>Clear overviews of what each driver type actually does</span></div>
                <div className="home-feat"><span className="home-feat-dot"></span><span>Calm, ordered fixes for the most common symptoms</span></div>
                <div className="home-feat"><span className="home-feat-dot"></span><span>No downloads, no sponsorships, fully independent</span></div>
              </div>
              <p style={{ color: '#666', lineHeight: 1.7, marginBottom: 24, fontSize: '.95rem' }}>
                When that translation is healthy you never think about it. When it slips, you get the stutters, silences, and dropped connections.
              </p>
              <Link href="/knowledge/" className="btn btn-primary">
                Troubleshooting Hub
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div>
              <div className="home-visual-grid">
                <div className="home-visual-card home-visual-blue">
                  <div className="home-visual-icon">🖨️</div>
                  <div>Printer Drivers</div>
                </div>
                <div className="home-visual-card home-visual-orange">
                  <div className="home-visual-icon">🖥️</div>
                  <div>Graphics Drivers</div>
                </div>
                <div className="home-visual-card home-visual-teal">
                  <div className="home-visual-icon">🔊</div>
                  <div>Audio Drivers</div>
                </div>
                <div className="home-visual-card home-visual-dark">
                  <div className="home-visual-icon">📡</div>
                  <div>Wi-Fi Drivers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Cards */}
      <section className="block" style={{ background: '#f5f7fa' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">What we cover</div>
            <h2>Seven driver families, one calm explanation each</h2>
            <p>Choose a category for a plain-English overview of what the driver does and how to keep it healthy.</p>
          </div>
          <div className="grid grid-3">
            <Link className="card" href="/drivers/printer/">
              <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8V4h10v4M7 16H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-3"/><rect x="7" y="13" width="10" height="7" rx="1"/><path d="M17 11h.5"/></svg></span>
              <h3>Printer Drivers</h3>
              <p>From a click to a printed page: the spooler, the page language, and the cure for 'offline'.</p>
              <span className="more">Read Overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>
            <Link className="card" href="/drivers/scanner/">
              <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h16M3 18a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M6 14l8-9 5 5-3 4"/></svg></span>
              <h3>Scanner Drivers</h3>
              <p>How one scanner serves every imaging app you own — and why printing can work while scanning doesn't.</p>
              <span className="more">Read Overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>
            <Link className="card" href="/drivers/graphics/">
              <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="9" cy="12" r="2.4"/><path d="M14 9h4M14 12h4M14 15h4"/></svg></span>
              <h3>Graphics Drivers</h3>
              <p>The software conversation between your OS, your GPU, and every frame on your screen.</p>
              <span className="more">Read Overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>
            <Link className="card" href="/drivers/audio/">
              <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12c2 0 2-5 4-5s2 10 4 10 2-10 4-10 2 5 4 5"/></svg></span>
              <h3>Audio Drivers</h3>
              <p>Sample-accurate work happening in the background every time something plays sound.</p>
              <span className="more">Read Overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>
            <Link className="card" href="/drivers/network/">
              <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0"/><circle cx="12" cy="19" r="1.2"/></svg></span>
              <h3>Wi-Fi &amp; Network</h3>
              <p>The bridge between your PC and the internet. Behind most dropped or sluggish Wi-Fi.</p>
              <span className="more">Read Overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>
            <Link className="card" href="/drivers/bluetooth/">
              <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 7.5l11 9L12 21V3l5.5 4.5-11 9"/></svg></span>
              <h3>Bluetooth Drivers</h3>
              <p>Discovery, pairing, and profiles — the stack that turns a radio into an invisible cable.</p>
              <span className="more">Read Overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>
            <Link className="card" href="/drivers/usb/">
              <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="1.6"/><path d="M12 6v14M12 20l-4-4M8 16v-2.5M12 14l4-3M16 11h2"/></svg></span>
              <h3>USB Drivers</h3>
              <p>The universal translator for plug-and-play — your computer knows what you just plugged in.</p>
              <span className="more">Read Overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block">
        <div className="container">
          <div className="cta-band">
            <h2>Not sure where to start?</h2>
            <p>Head to our troubleshooting hub for calm, ordered fixes for the most common driver problems — no jargon, no downloads required.</p>
            <div className="hero-actions">
              <Link href="/knowledge/" className="btn btn-light">
                Troubleshooting Hub
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <Link href="/blog/" className="btn btn-light">Read the Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
