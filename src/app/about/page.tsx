import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About PrintSoftDrive — Independent, Plain-English Driver Guides',
  description: 'PrintSoftDrive is a small, independent education project: plain-English driver overviews, no downloads, no sponsorships.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-sub" aria-label="About PrintSoftDrive">
        <div className="hero-sub-inner animate-fade-in">
          <span className="hero-sub-tag"><span className="hero-sub-tag-dot"></span> About PrintSoftDrive</span>
          <h1 className="home-hero-title">We Translate the Technical, <br/>So <span className="accent">You Can Get On With Your Day</span></h1>
          <p className="hero-sub-sub">PrintSoftDrive is a small, independent education project with one stubborn belief: technology should not feel intimidating. Every guide here is written for beginners while still being useful for advanced users who want clarity without noise.</p>
          <div className="hero-sub-actions">
            <Link href="/drivers/" className="btn btn-primary">
              <span>Browse Driver Topics</span>
            </Link>
            <Link href="/contact/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              <span>Send Us a Question</span>
            </Link>
          </div>
          <div className="hero-sub-bread">
            <Link href="/">Home</Link> &rsaquo; <span>About</span>
          </div>
        </div>
      </section>

      {/* Why PrintSoftDrive Exists */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Why PrintSoftDrive Exists</span>
            <h2>Most technical documentation assumes too much knowledge or buries simple answers under layers of complexity. PrintSoftDrive exists to fix that — by turning confusing driver issues into clear, actionable explanations.</h2>
          </div>
          <div className="cards-3 stagger" style={{ marginTop: '48px' }}>
            <article className="card animate-fade-in">
              <div className="card-icon">
                <Image 
                  src="/assets/images/windows-logo.svg" 
                  alt="Beginner friendly" 
                  width={40} 
                  height={40}
                />
              </div>
              <h3>Beginner-friendly explanations</h3>
            </article>
            <article className="card animate-fade-in">
              <div className="card-icon">
                <Image 
                  src="/assets/images/macos-logo.svg" 
                  alt="No unnecessary jargon" 
                  width={40} 
                  height={40}
                />
              </div>
              <h3>No unnecessary technical jargon</h3>
            </article>
            <article className="card animate-fade-in">
              <div className="card-icon">
                <Image 
                  src="/assets/images/linux-logo.svg" 
                  alt="Real-world troubleshooting" 
                  width={40} 
                  height={40}
                />
              </div>
              <h3>Real-world troubleshooting focus</h3>
            </article>
            <article className="card animate-fade-in">
              <div className="card-icon">⚡</div>
              <h3>Fast, practical solutions</h3>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px', fontSize: '1.5rem', fontWeight: '700' }}>
            Simple. Clear. Useful.
            <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '8px', color: 'var(--text-body)' }}>That’s the PrintSoftDrive promise.</div>
          </div>
        </div>
      </section>

      {/* About PrintSoftDrive */}
      <section className="block">
        <div className="container">
          <div className="split-row">
            <div className="split-image animate-fade-in">
              <Image
                src="/assets/images/home-translator.svg"
                alt="PrintSoftDrive — independent driver education resource"
                width={640}
                height={420}
                style={{ padding: '0', borderRadius: 'var(--radius-xl)', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="split-text animate-fade-in">
              <span className="section-kicker">About PrintSoftDrive</span>
              <h2>A Friendly Voice in a Noisy Tech World</h2>
              <p>We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.</p>
              <p>No sponsorships. No affiliate links. No "instant driver updater" nonsense. Just clear, honest explanations of how things actually work.</p>
              <ul className="check-list" style={{ marginTop: '24px' }}>
                <li>Independent and free to read, always</li>
                <li>Plain-English first, technical accuracy second to none</li>
                <li>Privacy-respecting — no aggressive trackers or sold data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Our Mission</span>
            <h2>Making drivers accessible for everyone</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>Our mission is simple: to demystify device drivers so that anyone, regardless of technical background, can understand, troubleshoot, and maintain their hardware with confidence.</p>
            <p style={{ maxWidth: '800px', margin: '16px auto 0' }}>We believe that technology should feel approachable, not intimidating. That's why every guide we create prioritizes clarity, patience, and practicality over jargon or complexity.</p>
          </div>
          <div className="cards-3 stagger" style={{ marginTop: '48px' }}>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(37,99,235,0.1)"/>
                  <path d="M22 14v16M14 22h16" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Education First</h3>
              <p>We focus on understanding, not just quick fixes</p>
            </article>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(37,99,235,0.1)"/>
                  <path d="M14 18h16M14 26h16M14 22h10" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>No Sponsorships</h3>
              <p>Our advice is always unbiased and independent</p>
            </article>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(37,99,235,0.1)"/>
                  <path d="M16 28c0-4 3.6-7.2 6-7.2c2.4 0 6 3.2 6 7.2c0 4 2.4 5.6 0 5.6c-4.8 0-6-1.6-6-1.6s-1.2 1.6-6 1.6c-2.4 0 0-1.6 0-5.6Z" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="22" cy="14" r="4" fill="var(--primary)"/>
                </svg>
              </div>
              <h3>Beginner-Friendly</h3>
              <p>We assume nothing, explain everything</p>
            </article>
          </div>
        </div>
      </section>

      {/* What drives us */}
      <section className="block">
        <div className="container">
          <div className="split-row" style={{ flexDirection: 'row-reverse' }}>
            <div className="split-image animate-fade-in">
              <Image
                src="/assets/images/knowledge-flow.svg"
                alt="What drives us — driver knowledge flow"
                width={640}
                height={420}
                style={{ padding: '0', borderRadius: 'var(--radius-xl)', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="split-text animate-fade-in">
              <span className="section-kicker">What drives us</span>
              <h2>We've all been there: staring at a confusing error message, not knowing where to turn.</h2>
              <p style={{ marginTop: '16px' }}>PrintSoftDrive exists to be the calm, helpful resource we wish we had in those moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Our Promise</span>
            <h2>What You Can Always Expect</h2>
          </div>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <ul className="check-list" style={{ fontSize: '1.1rem' }}>
              <li>Always plain language, no jargon</li>
              <li>No hidden agendas or sales pitches</li>
              <li>Safety first, always</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Our Story</span>
            <h2>How PrintSoftDrive came to be</h2>
          </div>
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '16px' }}>The spark</h3>
              <p>PrintSoftDrive started with a simple frustration: trying to help a family member fix a printer driver issue, and every search result either assumed too much knowledge or tried to sell something.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '16px' }}>Building the first guides</h3>
              <p>What began as a small collection of notes for friends and family quickly grew. We realized there was a real need for calm, clear explanations of driver basics—what they do, why they matter, and how to fix common issues.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '16px' }}>Growing into a resource</h3>
              <p>Over time, we expanded our coverage to include every major driver category, added a knowledge hub for quick fixes, and launched a blog to explore broader computing concepts in plain English. Today, PrintSoftDrive serves thousands of readers every month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Our Journey</span>
            <h2>Our path so far</h2>
          </div>
          <div className="timeline animate-fade-in" style={{ marginTop: '48px' }}>
            <div className="timeline-item">
              <span className="timeline-year">2021</span>
              <h3>The Beginning</h3>
              <p>Created the first printer driver guides for friends and family</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2022</span>
              <h3>Expanding Coverage</h3>
              <p>Added graphics, audio, and network driver overviews</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2023</span>
              <h3>Knowledge Hub Launch</h3>
              <p>Launched the troubleshooting knowledge hub with symptom-based fixes</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2024</span>
              <h3>Blog Goes Live</h3>
              <p>Started publishing explainers about how computers really work</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2025</span>
              <h3>Today</h3>
              <p>Helping thousands of readers every month with plain-English driver advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">What To Expect</span>
            <h2>What PrintSoftDrive Does — And What It Does Not</h2>
          </div>
          <div className="do-grid" style={{ marginTop: '48px' }}>
            <div className="do-card do-yes animate-fade-in">
              <h3>What We Do</h3>
              <ul className="check-list">
                <li>Explain how drivers work in friendly, plain language</li>
                <li>Cover the full range of hardware categories</li>
                <li>Help you understand the symptoms of common driver issues</li>
                <li>Provide curated, evergreen reference material</li>
                <li>Publish step-by-step fix overviews for every common symptom</li>
                <li>Respect your time, attention, and privacy</li>
              </ul>
            </div>
            <div className="do-card do-no animate-fade-in">
              <h3>What We Do Not</h3>
              <ul className="cross-list">
                <li>Host or distribute any driver downloads</li>
                <li>Provide one-on-one technical support or repair services</li>
                <li>Recommend specific brands, retailers, or paid services</li>
                <li>Run intrusive ads or sell your personal information</li>
                <li>Pretend to be the manufacturer of any device</li>
                <li>Use scare tactics to push downloads or paid tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Editorial Standards</span>
            <h2>How PrintSoftDrive Is Written and Reviewed</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>Every article on this site is written, fact-checked, and reviewed against a clear set of editorial standards designed to keep things accurate, useful, and free of marketing fluff.</p>
          </div>
          <div className="cards-3 stagger" style={{ marginTop: '48px' }}>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(255,185,0,0.15)"/>
                  <rect x="10" y="10" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 22 L20 26 L28 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Researched and Reviewed</h3>
              <p>Every factual claim about how drivers function is grounded in documented operating system specifications, driver development frameworks, or first-hand testing. No copy-pasted forum posts, no AI hallucinations passed off as fact.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(255,185,0,0.15)"/>
                  <circle cx="22" cy="18" r="7" fill="currentColor"/>
                  <path d="M10 36 Q22 28 34 36" fill="currentColor"/>
                </svg>
              </div>
              <h3>Written by Humans</h3>
              <p>Articles are drafted, edited, and signed off by people. We use research tools to gather and verify information, but the writing voice — friendly, calm, occasionally enthusiastic about a particularly elegant piece of engineering — is entirely human.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(255,185,0,0.15)"/>
                  <path d="M22 10 L34 16 L34 28 L22 34 L10 28 L10 16 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="22" cy="22" r="5" fill="currentColor"/>
                </svg>
              </div>
              <h3>Updated as Things Change</h3>
              <p>When operating systems release significant updates that change how a driver behaves, the affected articles are revisited and updated. Driver concepts are evergreen, but specific behaviour evolves — we treat keeping things current as part of the job.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="block">
        <div className="container">
          <div className="split-row" style={{ alignItems: 'center' }}>
            <div className="split-text">
              <span className="section-kicker">Why we exist</span>
              <h2 style={{ marginTop: '10px' }}>
                Most driver advice online falls into two camps: dense documentation or pushy sales pages. We wanted a calm third option.
              </h2>
              <p style={{ marginTop: '16px' }}>
                PrintSoftDrive explains what each kind of driver actually does, in plain English, and walks through the most common problems with patience instead of jargon. We don't host downloads, we don't run a help desk, and we don't take sponsorships from the companies we write about. That independence is the whole point — it's what lets us stay neutral and honest.
              </p>
            </div>
            <div className="split-image">
              <Image 
                src="/assets/images/system-what.svg" 
                alt="Why PrintSoftDrive exists — driver education" 
                width={640} 
                height={420}
                style={{ borderRadius: 'var(--radius-xl)', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you'll find here */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">What you'll find here</span>
            <h2>Clear, Useful Content for Everyone</h2>
          </div>
          <div className="cards-3 stagger" style={{ marginTop: '48px' }}>
            <article className="card animate-fade-in">
              <div className="card-icon">
                <Image 
                  src="/assets/images/printer-what.svg" 
                  alt="Driver overviews" 
                  width={36} 
                  height={36}
                />
              </div>
              <h3>Driver Overviews</h3>
              <p>For every major hardware family — graphics, audio, network, USB, system, and output devices.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="card-icon">
                <Image 
                  src="/assets/images/audio-fix.svg" 
                  alt="Knowledge hub" 
                  width={36} 
                  height={36}
                />
              </div>
              <h3>Knowledge Hub</h3>
              <p>Calm, ordered fixes for the symptoms readers ask about most.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="card-icon">
                <Image 
                  src="/assets/images/bluetooth-what.svg" 
                  alt="Friendly blog" 
                  width={36} 
                  height={36}
                />
              </div>
              <h3>Friendly Blog</h3>
              <p>Short explainers about how your computer really works underneath.</p>
            </article>
          </div>
        </div>
      </section>

      {/* What we are not */}
      <section className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">What we are not</span>
            <h2>Transparent About Our Limits</h2>
          </div>
          <div className="cta-card" style={{ marginTop: '48px', background: 'var(--bg-light)', color: 'var(--text-main)', border: 'none' }}>
            <p style={{ color: 'var(--text-body)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              We are not affiliated with any hardware maker, software publisher, or operating-system vendor. We don't sell software, offer paid repairs, or provide one-to-one technical support. When you need to change something on your own machine, the safest source is always the official documentation from your device maker — and we'll always point you there.
            </p>
          </div>
        </div>
      </section>

      {/* A note on our tone */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">A note on our tone</span>
            <h2>Plain English, Always</h2>
          </div>
          <p style={{ maxWidth: '600px', margin: '24px auto 0', textAlign: 'center' }}>
            Friendly, never condescending. If a sentence here ever reads like it was written to impress rather than to help, we got it wrong — and we'd genuinely like to know.
          </p>
        </div>
      </section>

      {/* Get in touch / CTA */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Explore or Get In Touch?</h2>
            <div className="cta-actions">
              <Link href="/drivers/" className="btn btn-primary" style={{ background: '#fff', color: 'var(--navy)' }}>Browse drivers</Link>
              <Link href="/contact/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
