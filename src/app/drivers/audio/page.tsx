import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Audio Drivers Explained — Sound & Microphone | PrintSoftDrive",
  description: "How audio drivers carry every sound your computer makes, why you get no sound or a quiet mic, and the simple steps that fix most audio problems.",
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
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">Audio Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Audio drivers</span>
            <h1>The Software Behind Every <span style={{ color: 'var(--primary)' }}>Sound You Hear</span></h1>
            <p className="hero-lede">When music plays, a video call connects, or a notification chimes, an audio driver is doing precise, sample-accurate work in the background to make it happen.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What an Audio Driver Does</h2>
              <p>An audio driver moves streams of digital samples between your applications and the sound hardware, keeping everything in time. It manages sample rates, mixes multiple sources, routes audio to the right output, and applies any hardware effects your device supports.</p>
              <p>Get it right and sound is effortless. Get it slightly wrong and you hear crackles, lag, or a microphone that everyone says is too quiet.</p>
              <ul className="ticks">
                <li>Carries digital audio samples in both directions</li>
                <li>Mixes and routes multiple sound sources</li>
                <li>Manages sample rate, latency, and buffering</li>
                <li>Selects the correct input and output device</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/audio-what.svg" alt="Diagram showing how the audio drivers layer carries work from applications to hardware" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/audio-fix.svg" alt="Diagram showing the common symptom and the clean-reinstall fix for audio drivers" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>Common Sound Problems</h2>
              <p>No sound at all, sound from the wrong device, crackling during calls, or a microphone nobody can hear — almost all of these trace back to the driver or to which device is selected as the default.</p>
              <p>Reinstalling the audio driver from your laptop or motherboard maker, then confirming the right playback and recording devices are set as default, clears up the great majority of everyday audio issues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="prose">
            <span className="section-kicker" style={{ textAlign: 'center' }}>Step-by-step guide</span>
            <h2 style={{ textAlign: 'center' }}>Fix it in five careful steps</h2>
            <ol className="fixsteps">
              <li><strong>Check the default device</strong> — Open your sound settings and confirm the output and input you expect are actually set as the defaults.</li>
              <li><strong>Test with a second app</strong> — If one app is silent but another plays fine, the problem is an app setting, not the driver.</li>
              <li><strong>Reinstall the audio driver</strong> — Uninstall the device in Device Manager, restart, then install the maker's current audio package.</li>
              <li><strong>Check enhancements and levels</strong> — Disable audio enhancements and confirm nothing is muted per-app in the volume mixer.</li>
              <li><strong>Restart and verify</strong> — Reboot, play a test sound, and make a short microphone recording to confirm both directions work.</li>
            </ol>
            <p className="note-soft">If anything here feels out of your depth, that's a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.</p>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Decode the jargon</span>
            <h2>Common Device Manager codes for this category</h2>
            <p>When the audio device misbehaves, Device Manager often shows one of these short status codes. Plain-English translations below.</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th scope="col">Code</th><th scope="col">What it means in plain English</th><th scope="col">The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 10</code></td><td>The audio device cannot start.</td><td>Reinstall the audio driver from your laptop or motherboard maker.</td></tr>
                <tr><td><code>Code 19</code></td><td>The device's configuration information is incomplete or damaged.</td><td>Uninstall the device in Device Manager and let it reinstall on restart.</td></tr>
                <tr><td><code>Code 45</code></td><td>The audio hardware isn't currently connected.</td><td>For USB audio, reconnect or change ports; for built-in audio, restart and check it isn't disabled in firmware settings.</td></tr>
                <tr><td><code>Code 52</code></td><td>The driver's digital signature can't be verified.</td><td>Re-download the official, signed driver from the maker's site and install that.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Quick Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p>The questions readers send us most about this topic.</p>
          </div>
          <div className="faq">
            <details>
              <summary>There's no sound — where do I start?</summary>
              <div className="faq-body">
                <p>Check the output device first: the system may be sending audio to a device that isn't connected. If the right device is selected and still silent, a clean reinstall of the audio driver is the next step.</p>
              </div>
            </details>
            <details>
              <summary>Why is my microphone so quiet on calls?</summary>
              <div className="faq-body">
                <p>Usually a default-device or level setting rather than the hardware. Confirm the correct mic is the default input and that no app has lowered its level; a fresh driver helps when the device disappears entirely.</p>
              </div>
            </details>
            <details>
              <summary>Crackling during calls — is my sound card dying?</summary>
              <div className="faq-body">
                <p>Almost never. Crackle is usually buffering or driver contention, not failing hardware. A fresh audio driver, plus closing heavyweight apps during calls, typically clears it.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="cta-card" style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '80px 40px', textAlign: 'center', color: '#fff' }}>
            <span className="section-kicker" style={{ color: 'var(--primary)' }}>Explore More</span>
            <h2 style={{ color: '#fff' }}>Want us to explain another driver topic?</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 40px' }}>Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn-primary" href="/drivers/">
                Browse all topics
              </Link>
              <Link className="btn btn-light" href="/knowledge/" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Visit Knowledge Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
