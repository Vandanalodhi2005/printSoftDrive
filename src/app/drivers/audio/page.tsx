import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Audio Drivers Explained — Sound & Voice | Driver Info Hub",
  description: "What an audio driver does, why sound glitches happen, and how to fix common audio issues. Plain English, no downloads."
}

export default function AudioDrivers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page">Audio Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Audio drivers</span>
            <h1 className="hero-title">The Soundtrack Between Your PC and Speakers</h1>
            <p className="hero-lede">
              Every beep, music track, or voice chat you hear is translated from digital data into electrical signals by the audio driver.
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What an Audio Driver Does</h2>
              <p>
                An audio driver tells the operating system how to talk to the sound hardware – the chip that produces analog waveforms for your speakers or headphones. It handles formats, sample rates, and volume control, and bridges applications (like music players or video calls) to the hardware.
              </p>
              <ul className="ticks">
                <li>Translates digital audio streams into hardware signals</li>
                <li>Manages channels, sample rates, and mixing</li>
                <li>Provides volume, mute, and device selection APIs</li>
                <li>Enables special features like surround sound or voice activation</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/audio-what.svg" alt="Audio driver data flow" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/audio-fix.svg" alt="Common audio driver fixes" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>Typical Sound Issues & Fixes</h2>
              <ul className="ticks">
                <li>No sound – reinstall the driver from the hardware maker</li>
                <li>Static or crackling – update to the latest driver and check audio format settings</li>
                <li>Wrong device – ensure the correct output device is selected in system sound settings</li>
                <li>Latency in voice chat – use the high‑performance driver mode and disable audio enhancements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="prose">
            <span className="section-kicker" style={{ textAlign: 'center' }}>Step‑by‑step guide</span>
            <h2 style={{ textAlign: 'center' }}>Fix Audio in Five Simple Steps</h2>
            <ol className="fixsteps">
              <li><strong>Identify the hardware</strong> – open Device Manager → Sound, video and game controllers and note the exact model.</li>
              <li><strong>Download the correct driver</strong> – get it from the manufacturer’s website or your PC maker’s support page.</li>
              <li><strong>Uninstall the old driver</strong> – in Device Manager, uninstall and tick “Delete the driver software”.</li>
              <li><strong>Install the new driver</strong> – run the installer, choose a clean install if offered.</li>
              <li><strong>Restart and verify</strong> – reboot, then play a test sound and check that the correct device is selected.</li>
            </ol>
            <p className="note-soft">
              If anything feels beyond your comfort level, a local technician can run this routine in minutes. No special tools required.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
