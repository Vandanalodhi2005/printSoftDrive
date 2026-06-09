import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Wi-Fi & Network Drivers Explained | PrintSoftDrive",
  description: "Network drivers connect your PC to the internet. Learn what they do and how to fix dropping Wi-Fi, slow speeds, and connections that won't wake from sleep.",
}

export default function NetworkDrivers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">Network Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Wi-Fi & Network drivers</span>
            <h1>The Bridge Between Your <span style={{ color: 'var(--primary)' }}>PC and the Internet</span></h1>
            <p className="hero-lede">Every page you load, every video you stream, and every call you join passes through a network driver before it ever reaches your screen.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What a Network Driver Does</h2>
              <p>A network driver is the software layer that connects your operating system's networking stack to the physical Wi-Fi or Ethernet chip in your machine. It receives packets from the hardware, hands them up to the operating system, and sends outgoing data back down to be transmitted.</p>
              <p>On the wireless side it also manages connecting to access points, handling encryption, and adjusting transmission rates as you move around — all without you noticing.</p>
              <ul className="ticks">
                <li>Moves packets between the OS and the network chip</li>
                <li>Handles wireless association, authentication, and roaming</li>
                <li>Implements features like checksum offload and packet queuing</li>
                <li>Reports link speed, signal strength, and connection health</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/network-what.svg" alt="Diagram showing how the wi-fi & network drivers layer carries work from applications to hardware" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/network-fix.svg" alt="Diagram showing the common symptom and the clean-reinstall fix for wi-fi & network drivers" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>Common Connectivity Frustrations</h2>
              <p>Wi-Fi that drops every few minutes, slow speeds compared to other devices on the same network, or a connection that refuses to come back after sleep — these are the most common driver-related complaints, and among the most easily fixed.</p>
              <p>A fresh driver, paired with a power-management setting that stops the OS from aggressively powering down the network chip, solves most of them. For laptops, your manufacturer's site is almost always the right source, since they tune it for your specific Wi-Fi module.</p>
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
              <li><strong>Identify the adapter</strong> — Device Manager → Network adapters: note the exact name of your Wi-Fi or Ethernet chip.</li>
              <li><strong>Download the current driver first</strong> — From your laptop maker for notebooks, or the chip maker for desktop cards — before you uninstall anything, while you still have internet.</li>
              <li><strong>Uninstall the old driver</strong> — Remove the adapter in Device Manager, ticking the option to delete the driver software.</li>
              <li><strong>Restart and install</strong> — Reboot, run the installer you downloaded, and reconnect to your network.</li>
              <li><strong>Tame power management</strong> — In the adapter's properties, untick "allow the computer to turn off this device to save power" — the single biggest fix for drop-outs.</li>
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
            <p>Next to a misbehaving network adapter, Device Manager shows one of a handful of short codes. Here's the translation.</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th scope="col">Code</th><th scope="col">What it means in plain English</th><th scope="col">The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 10</code></td><td>The network adapter cannot start.</td><td>Reinstall the driver from your laptop or motherboard maker.</td></tr>
                <tr><td><code>Code 31</code></td><td>The driver for the adapter could not be loaded.</td><td>Uninstall the device, restart, then install the current driver.</td></tr>
                <tr><td><code>Code 43</code></td><td>The adapter reported a problem and was stopped.</td><td>Clean driver reinstall; for USB adapters, also try another port.</td></tr>
                <tr><td><code>Code 45</code></td><td>The adapter isn't connected — often seen after sleep.</td><td>Restart, then disable 'allow the computer to turn off this device' in the adapter's power management tab.</td></tr>
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
              <summary>Why is my Wi-Fi slower on my laptop than my phone?</summary>
              <div className="faq-body">
                <p>Often the laptop's network chip is parked in a power-saving mode, or it's running an older driver. Update the driver and disable aggressive power management for the adapter to close the gap.</p>
              </div>
            </details>
            <details>
              <summary>My Wi-Fi disconnects when the laptop sleeps. Is that normal?</summary>
              <div className="faq-body">
                <p>It's common but fixable. The OS powers the network chip down to save battery and the driver doesn't always wake it cleanly. A current driver plus turning off 'allow the computer to turn off this device' usually resolves it.</p>
              </div>
            </details>
            <details>
              <summary>Ethernet works but Wi-Fi doesn't — what does that tell me?</summary>
              <div className="faq-body">
                <p>They use different chips and different drivers, so it points squarely at the wireless adapter's driver or settings rather than your router or the operating system as a whole.</p>
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
