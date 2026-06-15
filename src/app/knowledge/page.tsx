import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ThemeIcon from '../../components/ThemeIcon'

export const metadata: Metadata = {
  title: 'Driver Troubleshooting Knowledge Base | PrintSoftDrive',
  description: 'A calm, ordered walkthrough for common driver problems. Start with four universal fixes, then find your symptom and follow a clear, jargon-free routine.',
}

const symptoms = [
  { id: 'printer',   tag: 'Device',    title: 'Device Prints Blank or Garbled Pages',  desc: 'Almost always a device driver issue. Reinstall the latest driver from the device manufacturer, not from a generic listing.', icon: 'printer' },
  { id: 'audio',     tag: 'Audio',     title: 'No Sound Coming Out',                   desc: 'Check default output device first, then reinstall the audio driver from your laptop or motherboard maker.', icon: 'audio-muted' },
  { id: 'network',   tag: 'Wi-Fi',     title: 'Wi-Fi Drops Constantly',                desc: 'Disable aggressive power-saving on the network adapter, then update the driver from the laptop maker.', icon: 'network' },
  { id: 'graphics',  tag: 'Display',   title: 'Screen Flickers or Goes Black',         desc: 'Almost always a graphics driver problem. Roll back to a known-good version or do a clean install.', icon: 'graphics' },
  { id: 'usb',       tag: 'USB',       title: 'USB Device Not Recognised',             desc: 'Try another cable, then another port. If it still fails, reinstall the device-specific driver and the USB controller driver.', icon: 'usb' },
  { id: 'system',    tag: 'System',    title: 'Computer Feels Slow After Update',      desc: 'Re-install the chipset driver and check the GPU driver. Updates sometimes replace tuned drivers with generic ones.', icon: 'turtle' },
]

export default function Knowledge() {
  return (
    <>
      {/* ── Hero Sub ── */}
      <section className="hero-sub" aria-label="Knowledge Hub" style={{ padding: '120px 0 80px' }}>
        {/* <div className="hero-sub-floats" aria-hidden="true">
          <div className="hero-sub-float hero-sub-float-1">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="6" y="3" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="3" y="9" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="6" y="14" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div><span>Device</span><small>Quick fix</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-2">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12.55a11 11 0 0114 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div><span>Wi-Fi</span><small>Quick fix</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-3">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5zM15 9a3 3 0 010 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div><span>Audio</span><small>Quick fix</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-4">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div><span>Display</span><small>Quick fix</small></div>
          </div>
        </div> */}

        <div className="hero-sub-inner animate-fade-in">
          <span className="hero-sub-tag"><span className="hero-sub-tag-dot"></span> Knowledge Hub</span>
          <h1 className="home-hero-title">Take a Breath. <span className="accent">Most Driver Problems</span> Have a Simple Fix.</h1>
          <p className="">A calm, ordered walkthrough for every common driver problem. Every symptom on this page links to a dedicated step-by-step fix overview — with images, plain-English explanations, and zero jargon walls.</p>
          <div className="hero-sub-actions">
            <a href="#symptoms" className="btn btn-primary">
              <span>Jump to Symptoms</span>
            </a>
            <a href="#universal" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              <span>Try Universal Fixes First</span>
            </a>
          </div>
          <div className="hero-sub-bread">
            <Link href="/">Home</Link> &rsaquo; <span>Knowledge</span>
          </div>
        </div>
      </section>

      {/* ── Universal First Steps ── */}
      <section id="universal" className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Step 1 — The Universal Fixes</span>
            <h2>Try These Four Things First, Every Time</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>Before you blame the driver, blame the boring stuff. These four steps fix more problems than anything else combined.</p>
          </div>
          <ol className="steps-grid">
            <li className="step-card animate-fade-in">
              <span className="step-num">1</span>
              <h3>Restart, Properly</h3>
              <p>A full restart, not just closing the lid. It clears stuck driver state and resets every device on the system. Try this first, always.</p>
            </li>
            <li className="step-card animate-fade-in">
              <span className="step-num">2</span>
              <h3>Check the Cable or Wireless Link</h3>
              <p>Loose USB cables, a Bluetooth toggle that flicked off, a Wi-Fi network silently switched — physical and wireless layers cause more "driver" problems than drivers themselves.</p>
            </li>
            <li className="step-card animate-fade-in">
              <span className="step-num">3</span>
              <h3>Reseat the Device</h3>
              <p>Unplug, wait ten seconds, plug back into a different port if possible. This forces the operating system to re-detect the device and reload the driver cleanly.</p>
            </li>
            <li className="step-card animate-fade-in">
              <span className="step-num">4</span>
              <h3>Check for Pending Updates</h3>
              <p>An interrupted operating system update can leave drivers in an in-between state. Let any pending updates finish, then restart again.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── Driver-Specific (Clean Reinstall) ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Step 2 — Driver-Specific Fixes</span>
            <h2>Still Misbehaving? Reset the Driver</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>If the universal fixes did not solve it, the driver itself probably needs a reset. The order matters.</p>
          </div>
          <div className="split-row">
            <div className="split-text animate-fade-in">
              <h3>The Clean Reinstall, Step by Step</h3>
              <ol className="ordered-steps">
                <li>Identify the exact device and the maker of the chip inside it.</li>
                <li>Visit the official manufacturer support page and download the latest driver for your operating system version.</li>
                <li>In your operating system's device manager, uninstall the existing driver — and tick the option to remove the driver software too, if offered.</li>
                <li>Restart the computer.</li>
                <li>Run the freshly downloaded driver installer.</li>
                <li>Restart again, then test.</li>
              </ol>
              <p>This sequence resolves the vast majority of stubborn driver problems. The reason it works so well is that it removes any leftovers from previous installs that might be silently fighting with the new version.</p>
            </div>
            <div className="split-image animate-fade-in">
              <Image 
                src="/assets/images/knowledge-flow.svg" 
                alt="A laptop showing diagnostic information" 
                width={640} 
                height={420} 
                style={{ padding: '40px', background: '#fff' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Symptoms Grid Pro ── */}
      <section id="symptoms" className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-kicker">Quick Help by Symptom</span>
            <h2>Find Your Problem, Get a Dedicated Fix</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>Each card opens a full step-by-step overview with images, common causes, and an ordered fix routine.</p>
          </div>
          <div className="symptom-grid-pro">
            {symptoms.map((s, index) => (
              <article key={index} className="symptom-card-pro animate-fade-in">
                <div className="symptom-card-pro-head">
                  <div className="symptom-card-pro-icon">
                    <ThemeIcon type={s.icon} size={40} />
                  </div>
                  <span className="symptom-card-pro-tag">{s.tag}</span>
                </div>
                <div className="symptom-card-pro-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={`/drivers/${s.id}/`} className="symptom-card-pro-link">
                    Open the fix overview
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety Note ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="callout animate-fade-in">
            <h2>A Quick Note on Safety</h2>
            <p>Always download drivers from your hardware manufacturer's official website. Avoid third-party "driver updater" tools that promise instant fixes — they often install bundles you do not need, and occasionally cause the very problems they claim to solve.</p>
            <p>If you are not comfortable making changes to your system, ask a trusted technician. There is no shame in it. The same way most people happily call a plumber, calling someone who knows their way around a computer is perfectly sensible.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="block">
        <div className="container">
          <div className="cta-card animate-fade-in">
            <h2>Still Stuck? Tell Us About It</h2>
            <p>If you have worked through these steps and your problem persists, drop us a line. We may not be able to solve it for you, but we love adding new symptoms and fixes to our overviews.</p>
            <div className="cta-actions">
              <Link href="/contact/" className="btn btn-primary" style={{ background: '#fff', color: 'var(--navy)' }}>Send a Message</Link>
              <Link href="/blog/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Read the Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
