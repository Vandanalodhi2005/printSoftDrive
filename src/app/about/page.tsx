import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About PrintSoftDrive — Independent, Plain-English Driver Guides",
  description: "PrintSoftDrive is a small, independent education project: plain-English driver overviews, no downloads, no sponsorships. Learn why we exist and what we cover.",
}

export default function About() {
  return (
    <>
<section className="hero hero-wide theme-amber">
  <div className="container hero-inner">
    <span className="eyebrow"><span className="dot"></span>About PrintSoftDrive</span>
    <h1>We Translate the Technical, So You Can Get On With Your Day</h1>
    <p className="hero-lede">PrintSoftDrive is a small, independent education project with one stubborn belief: technology should not feel intimidating. Every overview here is written to be useful to a complete beginner — and still respected by someone who knows their way around a kernel debugger.</p>
    <div className="hero-actions"><a className="btn btn-primary" href="/drivers/">Browse driver topics <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="btn btn-light" href="/contact/">Send us a question</a></div>
    <nav className="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-current="page">About</li></ol></nav>
  </div>
</section>
<section className="block"><div className="container"><div className="prose" style={{ maxWidth: '760px', margin: '0 auto' }}>
  <h2>Why we exist</h2>
  <p className="lead">Most driver advice online falls into two camps: dense documentation written for engineers, or pushy &quot;speed up your PC&quot; pages trying to sell you something. We wanted a calm third option.</p>
  <p>PrintSoftDrive explains what each kind of driver actually does, in plain English, and walks through the most common problems with patience instead of jargon. We don&apos;t host downloads, we don&apos;t run a help desk, and we don&apos;t take sponsorships from the companies we write about. That independence is the whole point — it&apos;s what lets us stay neutral and honest.</p>
  <h2>What you&apos;ll find here</h2>
  <ul>
    <li><strong>Driver overviews</strong> for every major hardware family — graphics, audio, network, USB, system, and output devices.</li>
    <li><strong>A knowledge hub</strong> with calm, ordered fixes for the symptoms readers ask about most.</li>
    <li><strong>A friendly blog</strong> with short explainers about how your computer really works underneath.</li>
  </ul>
  <h2>What we are not</h2>
  <p>We are not affiliated with any hardware maker, software publisher, or operating-system vendor. We don&apos;t sell software, offer paid repairs, or provide one-to-one technical support. When you need to change something on your own machine, the safest source is always the official documentation from your device maker — and we&apos;ll always point you there.</p>
  <h2>A note on our tone</h2>
  <p>Plain English, always. Friendly, never condescending. If a sentence here ever reads like it was written to impress rather than to help, we got it wrong — and we&apos;d genuinely like to know.</p>
</div>
<div style={{ maxWidth: '760px', margin: '30px auto 0' }} className="hero-actions"><a className="btn btn-primary" href="/contact/">Get in touch <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
</div></section>
<section className="block" style={{ background: '#f5f7fa' }}><div className="container">
  <div className="cta-band">
    <h2>Want us to explain another driver topic?</h2>
    <p>Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop. Tell us what to write next.</p>
    <div className="hero-actions">
      <a className="btn btn-light" href="/drivers/">Browse all topics <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      <a className="btn btn-light" href="/knowledge/">Need help? Visit Knowledge</a>
    </div>
  </div></div></section>
    </>
  )
}
