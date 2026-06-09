import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Device Drivers Explained — Every Family | PrintSoftDrive',
  description: 'A plain-English map of every device driver family: printer, scanner, graphics, audio, Wi-Fi & network, Bluetooth, and USB.',
}

const driverFamilies = [
  { id: 'printer',   name: 'Printer Drivers',   desc: 'The translator between your document and the page — page languages, the print queue, and why printers go "offline".',                                        icon: '🖨️', image: '/assets/images/printer-what.svg' },
  { id: 'scanner',   name: 'Scanner Drivers',   desc: 'The standard interfaces that let any app drive your scanner, and the multifunction quirk behind "prints but won\'t scan".',                                 icon: '📄', image: '/assets/images/scanner-what.svg' },
  { id: 'graphics',  name: 'Graphics Drivers',  desc: 'Where your GPU meets the real world — software that turns rendering instructions into the frames on your display.',                                         icon: '🖥️', image: '/assets/images/graphics-what.svg' },
  { id: 'audio',     name: 'Audio Drivers',     desc: 'The software behind every sound you hear. Precise, sample-accurate work so music and calls arrive cleanly.',                                                icon: '🔊', image: '/assets/images/audio-what.svg' },
  { id: 'network',   name: 'Wi-Fi & Network',   desc: 'The bridge between your PC and the internet. It moves packets and manages wireless connections.',                                                           icon: '📡', image: '/assets/images/network-what.svg' },
  { id: 'bluetooth', name: 'Bluetooth Drivers', desc: 'Discovery, pairing, and profiles — the software stack that turns a radio into an invisible cable.',                                                        icon: '📶', image: '/assets/images/bluetooth-what.svg' },
  { id: 'usb',       name: 'USB Drivers',       desc: 'The universal translator for plug-and-play. Plug something in and your computer knows what it is.',                                                        icon: '🔌', image: '/assets/images/usb-what.svg' },
]

export default function Drivers() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Device Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Driver Overviews</span>
            <h1>The Map of Modern<br /><span style={{ color: 'var(--primary)' }}>Device Drivers</span></h1>
            <p className="hero-lede">
              Drivers are the invisible translators of your computer.
              Explore our plain-English guides to understand how each hardware family works.
            </p>
            <div className="hero-actions">
              <a href="#families" className="btn btn-primary">Browse All Families</a>
              <Link href="/knowledge/" className="btn btn-outline">Troubleshooting Hub</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Families Grid ── */}
      <section className="block" id="families">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Seven Families</span>
            <h2>Every Major Driver Category</h2>
            <p>Select a category to understand how it works and how to keep it performing at its best.</p>
          </div>
          <div className="grid grid-auto-3">
            {driverFamilies.map((d, idx) => (
              <Link key={d.id} href={`/drivers/${d.id}/`} className="card driver-card">
                <div className="driver-thumb">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    priority={idx < 3}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    style={{ objectFit: 'contain', padding: '20px' }}
                    className="driver-image"
                  />
                </div>
                <div className="card-icon" style={{ fontSize: '1.4rem', marginBottom: '14px' }}>{d.icon}</div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <span className="more">
                  Read Overview
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <span className="section-kicker" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)' }}>Support & Help</span>
            <h2>Need Specific Help?</h2>
            <p>Our troubleshooting hub provides calm, ordered fixes for common driver problems.</p>
            <div className="cta-actions">
              <Link href="/knowledge/" className="btn btn-primary">Troubleshooting Hub</Link>
              <Link href="/contact/" className="btn btn-ghost-white">Suggest a Topic</Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
