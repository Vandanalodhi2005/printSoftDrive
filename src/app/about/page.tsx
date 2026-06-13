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
      {/* ── Hero Sub ── */}
      <section className="hero-sub" aria-label="About PrintSoftDrive">
        {/* <div className="hero-sub-floats" aria-hidden="true">
          <div className="hero-sub-float hero-sub-float-1">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div><span>Independent</span><small>No sponsors</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-2">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div><span>Plain English</span><small>Always</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-3">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div><span>Privacy</span><small>Respected</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-4">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div><span>Educational</span><small>Always</small></div>
          </div>
        </div> */}

        <div className="hero-sub-inner animate-fade-in">
          <span className="hero-sub-tag"><span className="hero-sub-tag-dot"></span> About PrintSoftDrive</span>
          <h1 className="home-hero-title">We Translate the Technical, So <span className="accent">You Can Get On</span> With Your Day</h1>
          <p className="hero-sub-sub">PrintSoftDrive is a small, independent education project with one stubborn belief: technology should not feel intimidating. Every overview on this site is written to be useful to a complete beginner — and still respected by someone who knows their way around a kernel debugger.</p>
          <div className="hero-sub-actions">
            <a href="#topics" className="btn btn-primary">
              <span>Browse Driver Topics</span>
            </a>
            <Link href="/contact/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              <span>Send Us a Question</span>
            </Link>
          </div>
          <div className="hero-sub-bread">
            <Link href="/">Home</Link> &rsaquo; <span>About</span>
          </div>
        </div>
      </section>

      {/* ── Mission (3 Columns) ── */}
      <section className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Our Mission</span>
            <h2>Driver Knowledge, Without the Headache</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>
              The world has plenty of forums full of contradictory advice and plenty of dry technical manuals. 
              PrintSoftDrive sits happily in the middle — accurate, friendly, and grounded in real curiosity about how things work.
            </p>
          </div>
          <div className="cards-3 stagger">
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Honest &amp; Independent</h3>
              <p>PrintSoftDrive is not affiliated with any hardware brand or operating system maker. No sponsorships, no paid placements, no nudging you toward one product over another. Just clear explanations and helpful guidance.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Plain Language First</h3>
              <p>If a sentence needs three reference tabs to understand, PrintSoftDrive rewrites it. Technical accuracy without the wall of jargon — that is the bar every overview on this site has to meet.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Privacy Respected</h3>
              <p>PrintSoftDrive does not sell your data, run aggressive trackers, or stuff its pages with ads that follow you around the internet. Read freely — that is the whole point of an educational site.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Our Story (Split Row) ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split-row">
            <div className="split-text animate-fade-in">
              <span className="section-kicker">Our Story</span>
              <h2>Built for the People Who Just Want Things to Work</h2>
              <p>
                PrintSoftDrive started from a simple frustration. Friends and family kept asking the same questions — why is my device not working? 
                Why did my laptop go slow after that update? What even is a driver, really? The answers existed, but they were buried in technical 
                documentation, scattered across forum threads, or written in a tone that quietly made people feel they were not "tech enough" to understand.
              </p>
              <p>
                So PrintSoftDrive was built to be the friendly explainer we always wished we could send people to. Every overview is written by 
                humans who genuinely enjoy this stuff and want you to enjoy it too.
              </p>
            </div>
            <div className="split-image animate-fade-in">
              <Image 
                src="/assets/images/home-translator.svg" 
                alt="A friendly tech support professional helping at a desk" 
                width={640} 
                height={420} 
                style={{ padding: '40px', background: '#fff' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <span className="section-kicker">Our Journey</span>
            <h2>How PrintSoftDrive Grew Up</h2>
            <p>From one frustrated explainer to a full educational hub — here's the short version.</p>
          </div>
          <div className="timeline animate-fade-in">
            <div className="timeline-item">
              <span className="timeline-year">Step One</span>
              <h3>The First Article</h3>
              <p>PrintSoftDrive started as a single long article — "What is a driver, really?" — written one weekend after the same question came up at a family dinner for the third time.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">Step Two</span>
              <h3>The Hardware Library</h3>
              <p>From there we added an overview for every major hardware category — device, graphics, audio, networking — each written to the same plain-language standard.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">Step Three</span>
              <h3>The Knowledge Hub</h3>
              <p>Readers kept asking "but how do I fix it right now?" — so PrintSoftDrive built a dedicated step-by-step fix overview for every common driver symptom.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">Ongoing</span>
              <h3>Growing With Readers</h3>
              <p>New articles come from reader questions. If you have a confused symptom or a topic you wish someone would just explain plainly, drop us a note.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="stats-row animate-fade-in">
            <div className="stats-item"><span className="stats-num">6</span><span className="stats-label">Driver Categories</span></div>
            <div className="stats-item"><span className="stats-num">18</span><span className="stats-label">In-Depth Articles</span></div>
            <div className="stats-item"><span className="stats-num">100%</span><span className="stats-label">Free, Forever</span></div>
            <div className="stats-item"><span className="stats-num">0</span><span className="stats-label">Sponsored Content</span></div>
          </div>
        </div>
      </section>

      {/* ── What we Do / Don't ── */}
      <section className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">What to Expect</span>
            <h2>What PrintSoftDrive Does — And Does Not</h2>
          </div>
          <div className="do-grid">
            <div className="do-card do-yes animate-fade-in">
              <h3>What We Do</h3>
              <ul className="check-list">
                <li>Explain how drivers work in friendly, plain language</li>
                <li>Cover the full range of hardware categories</li>
                <li>Help you understand the symptoms of common driver issues</li>
                <li>Provide curated, evergreen reference material</li>
                <li>Publish step-by-step fix overviews for every common symptom</li>
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial Standards ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Editorial Standards</span>
            <h2>How PrintSoftDrive Is Written</h2>
            <p>Every article on this site is reviewed against a clear set of standards.</p>
          </div>
          <div className="cards-3 stagger">
            <article className="card animate-fade-in">
              <div className="card-icon" style={{ color: 'var(--accent)', marginBottom: '20px' }}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(255,185,0,0.15)"/>
                  <rect x="10" y="10" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 22 L20 26 L28 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Researched and Reviewed</h3>
              <p>Every factual claim about how drivers function is grounded in documented operating system specifications or first-hand testing.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="card-icon" style={{ color: 'var(--accent)', marginBottom: '20px' }}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(255,185,0,0.15)"/>
                  <circle cx="22" cy="18" r="7" fill="currentColor"/>
                  <path d="M10 36 Q22 28 34 36" fill="currentColor"/>
                </svg>
              </div>
              <h3>Written by Humans</h3>
              <p>Articles are drafted and edited by people. We use research tools, but the friendly writing voice is entirely human.</p>
            </article>
            <article className="card animate-fade-in">
              <div className="card-icon" style={{ color: 'var(--accent)', marginBottom: '20px' }}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="10" fill="rgba(255,185,0,0.15)"/>
                  <path d="M22 10 L34 16 L34 28 L22 34 L10 28 L10 16 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="22" cy="22" r="5" fill="currentColor"/>
                </svg>
              </div>
              <h3>Updated as Things Change</h3>
              <p>When operating systems release significant updates that change how a driver behaves, the affected articles are revisited.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="block">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Explore the Overview?</h2>
            <p>Pick a hardware category and start reading — every overview is bite-sized, friendly, and built to actually make sense.</p>
            <div className="cta-actions">
              <Link href="/drivers/" className="btn btn-primary" style={{ background: '#fff', color: 'var(--navy)' }}>Browse Driver Topics</Link>
              <Link href="/contact/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Send Us a Question</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
