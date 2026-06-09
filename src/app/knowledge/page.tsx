import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Driver Troubleshooting Knowledge Base | PrintSoftDrive',
  description: 'A calm, ordered walkthrough for common driver problems. Start with four universal fixes, then find your symptom and follow a clear, jargon-free routine.',
}

const symptoms = [
  { id: 'printer',   tag: 'Printer',   title: "Printer stuck or 'offline'",  desc: "Clear the print queue, power-cycle the printer, and reinstall the full driver package.", icon: '🖨️' },
  { id: 'scanner',   tag: 'Scanner',   title: 'Scanner not detected',        desc: "Printing works but scanning doesn't? Install the full multifunction package, not just the print driver.", icon: '📄' },
  { id: 'graphics',  tag: 'Display',   title: 'Screen flickers or goes black', desc: 'Almost always a graphics-driver issue. Roll back or do a clean install of the latest stable version.', icon: '🖥️' },
  { id: 'audio',     tag: 'Audio',     title: 'No sound coming out',         desc: 'Check the default output device first, then reinstall the driver from your manufacturer.', icon: '🔊' },
  { id: 'network',   tag: 'Wi-Fi',     title: 'Wi-Fi drops constantly',      desc: 'Disable aggressive power-saving for the adapter, then update the driver.', icon: '📡' },
  { id: 'bluetooth', tag: 'Bluetooth', title: "Bluetooth won't pair",        desc: "Remove stale entries, re-pair fresh, and turn off the radio's power-saving options.", icon: '📶' },
  { id: 'usb',       tag: 'USB',       title: 'USB device not recognized',   desc: 'Try another cable and port. Reinstall the device driver and USB controller driver.', icon: '🔌' },
]

const universalFixes = [
  { num: 1, title: 'Restart Properly',    desc: 'A full restart (not just sleep) clears stuck driver states and resets every device.' },
  { num: 2, title: 'Check the Physical Link', desc: 'Loose cables or physical switches cause more "driver" problems than the software itself.' },
  { num: 3, title: 'Reseat the Device',   desc: 'Unplug, wait 10 seconds, and plug back into a different port to force a clean re-detect.' },
  { num: 4, title: 'Finish All Updates',  desc: 'Pending OS updates can leave drivers in a half-configured state. Let them finish first.' },
]

const faqs = [
  { q: 'Is a "driver updater" app safe?',    a: 'We recommend avoiding them. They often install unnecessary software and can cause more issues than they fix. Stick to official manufacturer sites for the safest experience.' },
  { q: 'What does "Roll Back Driver" do?',   a: 'It reverts your hardware to the previously installed driver version. This is incredibly useful if a new update introduces bugs or performance issues.' },
  { q: 'Where do I find my hardware model?', a: 'Check the "Device Manager" in Windows or "System Information" on Mac. You can also look for labels on the physical hardware or your laptop/motherboard manufacturer\'s site.' },
]

export default function Knowledge() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Knowledge Base</li>
              </ol>
            </nav>
            <span className="section-kicker">Knowledge Hub</span>
            <h1>Calm Solutions for<br /><span style={{ color: 'var(--primary)' }}>Driver Headaches</span></h1>
            <p className="hero-lede">
              Most driver problems have a simple, ordered fix. Follow our guide to get your hardware back on track without the jargon.
            </p>
            <div className="hero-actions">
              <a href="#symptoms" className="btn btn-primary">Browse by Symptom</a>
              <a href="#universal" className="btn btn-outline">Universal Fixes</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Universal Fixes ── */}
      <section className="block" id="universal">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Step 1 — The Basics</span>
            <h2>Four Universal Fixes to Try First</h2>
            <p>Before diving into complex settings, try these simple steps. They resolve over 70% of common driver issues.</p>
          </div>
          <div className="grid grid-2">
            {universalFixes.map(step => (
              <div key={step.num} className="card step-card">
                <div className="step-num">{step.num}</div>
                <h3 style={{ position: 'relative', zIndex: 1 }}>{step.title}</h3>
                <p style={{ position: 'relative', zIndex: 1, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clean Reinstall ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split">
            <div className="animate-fade-in">
              <span className="section-kicker">Step 2 — Clean Reinstall</span>
              <h2>Still Misbehaving? Reset the Driver.</h2>
              <p>If basics didn't work, the driver software itself might be corrupted. Follow this order for a clean start:</p>
              <ol className="fixsteps" style={{ marginTop: '32px' }}>
                <li><strong>Identify hardware model</strong><p>Find your exact hardware model and OS version.</p></li>
                <li><strong>Download official driver</strong><p>Get the latest driver package from the official manufacturer site.</p></li>
                <li><strong>Uninstall old driver</strong><p>Remove the device and its software in Device Manager.</p></li>
                <li><strong>Clean install & restart</strong><p>Reboot, install the new package, and reboot once more.</p></li>
              </ol>
            </div>
            <div className="split-media">
              <Image
                src="/assets/images/knowledge-flow.svg"
                alt="Troubleshooting flow illustration"
                width={600}
                height={500}
                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Symptoms Grid ── */}
      <section className="block" id="symptoms">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Help by Symptom</span>
            <h2>Find Your Problem, Get a Fix</h2>
            <p>Select your symptom below to see the dedicated troubleshooting routine.</p>
          </div>
          <div className="grid grid-auto-3">
            {symptoms.map(s => (
              <Link key={s.id} href={`/drivers/${s.id}/`} className="card symptom-card">
                <div className="sym-tag">{s.tag}</div>
                <div className="card-icon" style={{ fontSize: '1.5rem', marginBottom: '14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem' }}>{s.title}</h3>
                <p style={{ margin: 0 }}>{s.desc}</p>
                <span className="more" style={{ marginTop: '20px' }}>
                  See Solution
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
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


    </>
  )
}
