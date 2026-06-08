import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Device Drivers Explained — Every Family | PrintSoftDrive",
  description: "A plain-English map of every device driver family: printer, scanner, graphics, audio, Wi-Fi &amp; network, Bluetooth, and USB. Choose a category for a calm overview.",
}

export default function Drivers() {
  return (
    <>
      
<section className="hero hero-wide theme-ember">
  <div className="container hero-inner">
    <span className="eyebrow"><span className="dot"></span>Driver overviews</span>
    <h1>Every Driver Family, Explained in Plain English</h1>
    <p className="hero-lede">Drivers are just translators between your software and your hardware. Here is the full map — choose a category to read a calm, jargon-light overview of what it does and how to keep it healthy.</p>
    
    <nav className="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-current="page">Device Drivers</li></ol></nav>
  </div>
</section><section className="block"><div className="container"><div className="grid grid-2">
  <a className="card" href="/drivers/printer/">
      <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 8V4h10v4M7 16H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-3"/><rect x="7" y="13" width="10" height="7" rx="1"/><path d="M17 11h.5"/></svg></span>
      <h3>Printer Drivers</h3><p>The translator between your document and the page — page languages, the print queue, and why printers go 'offline'.</p>
      <span className="more">Read the overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a className="card" href="/drivers/scanner/">
      <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 14h16M3 18a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M6 14l8-9 5 5-3 4"/></svg></span>
      <h3>Scanner Drivers</h3><p>The standard interfaces that let any app drive your scanner, and the multifunction quirk behind 'prints but won't scan'.</p>
      <span className="more">Read the overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a className="card" href="/drivers/graphics/">
      <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="9" cy="12" r="2.4"/><path d="M14 9h4M14 12h4M14 15h4"/></svg></span>
      <h3>Graphics Drivers</h3><p>Where your GPU meets the real world — software that turns rendering instructions into the frames on your display. The most common cause of flicker, black screens, and stutter.</p>
      <span className="more">Read the overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a className="card" href="/drivers/audio/">
      <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12c2 0 2-5 4-5s2 10 4 10 2-10 4-10 2 5 4 5"/></svg></span>
      <h3>Audio Drivers</h3><p>The software behind every sound you hear. Precise, sample-accurate work so music, calls, and notifications arrive cleanly and in sync.</p>
      <span className="more">Read the overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a className="card" href="/drivers/network/">
      <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0"/><circle cx="12" cy="19" r="1.2"/></svg></span>
      <h3>Wi-Fi &amp; Network Drivers</h3><p>The bridge between your PC and the internet. It moves packets, manages wireless connections, and is behind most dropped or sluggish Wi-Fi.</p>
      <span className="more">Read the overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a className="card" href="/drivers/bluetooth/">
      <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 7.5l11 9L12 21V3l5.5 4.5-11 9"/></svg></span>
      <h3>Bluetooth Drivers</h3><p>Discovery, pairing, and profiles — the software stack that turns a short-range radio into an invisible cable for all your gadgets.</p>
      <span className="more">Read the overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a className="card" href="/drivers/usb/">
      <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="4" r="1.6"/><path d="M12 6v14M12 20l-4-4M8 16v-2.5M12 14l4-3M16 11h2"/></svg></span>
      <h3>USB Drivers</h3><p>The universal translator for plug-and-play. Plug something in and within a second your computer knows what it is and how to talk to it.</p>
      <span className="more">Read the overview <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
</div></div></section><section className="block"><div className="container">
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
