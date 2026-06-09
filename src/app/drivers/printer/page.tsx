import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Printer Drivers Explained — Queues, 'Offline', Fixes | PrintSoftDrive",
  description: "What a printer driver does, why printers show 'offline' or print gibberish, and the five-step routine that fixes most printing problems. Plain English, no downloads.",
}

export default function PrinterDrivers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">Printer Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Printer drivers</span>
            <h1>The Translator Between Your Document and the <span style={{ color: 'var(--primary)' }}>Printed Page</span></h1>
            <p className="hero-lede">You click Print, and a small chain of software springs into action — formatting the page, queueing the job, and speaking your printer's exact language. Here's how it works, and how to un-jam it when it doesn't.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What a Printer Driver Does</h2>
              <p>A printer driver takes the page your application has laid out and converts it into the page-description language your specific printer understands — where every line, image, and character should land on the paper. It also presents the printer's abilities to you: paper sizes, print quality, double-sided printing, colour or draft mode.</p>
              <p>Between the click and the paper sits the print queue (the spooler), which the driver feeds. Jobs wait their turn there, your application gets to move on instantly, and status — ink levels, paper jams, that blinking light — flows back the other way so you know what's happening.</p>
              <ul className="ticks">
                <li>Converts your document into the printer's page language</li>
                <li>Exposes paper size, quality, and double-sided options</li>
                <li>Queues jobs through the spooler so apps don't wait</li>
                <li>Reports ink, paper, and error status back to you</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/printer-what.svg" alt="Diagram showing how the printer drivers layer carries work from applications to hardware" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/printer-fix.svg" alt="Diagram showing the common symptom and the clean-reinstall fix for printer drivers" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>Why Printers Go “Offline” (and Other Classics)</h2>
              <p>A printer that shows “offline” while sitting right there, a queue that won't move, pages of gibberish symbols, or blank sheets — these are the printing classics, and nearly all of them live in software, not in the machine.</p>
              <p>“Offline” simply means the computer can't reach the printer at that moment — a Wi-Fi hiccup, a sleeping device, or a stuck job blocking the queue. Gibberish output means the job was rendered with the wrong driver, often a near-match model. The reliable cure for both: clear the queue, then reinstall the full driver package for your exact model from the maker's support page.</p>
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
              <li><strong>Clear the print queue</strong> — Open the queue and cancel every document. If a job refuses to leave, restart both the computer and the printer — the queue clears on boot.</li>
              <li><strong>Check the connection</strong> — For USB, reseat the cable. For Wi-Fi, confirm the printer and the computer are on the same network — most printers can print a network status page from their own control panel.</li>
              <li><strong>Set the right default</strong> — Make sure the actual printer — not “Save as PDF” or a duplicate “Copy 1” entry — is set as the default printer.</li>
              <li><strong>Reinstall the maker's driver</strong> — Download the full package for your exact model and operating-system version from the manufacturer's support page, remove the old printer entry, and install fresh.</li>
              <li><strong>Print a test page</strong> — Use the driver's own test-page button. If the test page prints but your document doesn't, the application's print settings are the remaining suspect.</li>
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
            <p>Printers speak in statuses more than codes, but when the printer itself shows a problem in Device Manager, these are the usual suspects:</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th scope="col">Code</th><th scope="col">What it means in plain English</th><th scope="col">The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 28</code></td><td>No driver is installed for the print device.</td><td>Install the full software package for your exact model from the maker's site.</td></tr>
                <tr><td><code>Code 43</code></td><td>A USB-connected printer misbehaved and was stopped.</td><td>Try another cable and port, then reinstall the printer's driver.</td></tr>
                <tr><td><code>Code 45</code></td><td>The printer isn't currently connected.</td><td>Power-cycle the printer and re-check the USB or network connection.</td></tr>
                <tr><td><code>“Error – Printing”</code></td><td>A job is stuck and blocking the queue.</td><td>Cancel all documents in the queue; if it won't clear, restart the computer and the printer.</td></tr>
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
              <summary>My printer shows “offline” but it's switched on. What now?</summary>
              <div className="faq-body">
                <p>“Offline” means the computer can't reach it right now. Confirm the printer and computer are on the same network, power-cycle the printer, clear any stuck jobs in the queue, and make sure it's set as the default printer. Re-running the maker's setup utility re-finds it in stubborn cases.</p>
              </div>
            </details>
            <details>
              <summary>Why does my printer print gibberish or strange symbols?</summary>
              <div className="faq-body">
                <p>The job was rendered with the wrong driver — often one for a near-match model. Install the driver for your exact model, remove lookalike printer entries, clear the queue, and resend the document.</p>
              </div>
            </details>
            <details>
              <summary>Is the generic driver built into my OS good enough?</summary>
              <div className="faq-body">
                <p>For basic printing, yes — and it's wonderfully quick to set up. Install the maker's full package when you want the extras: scanning on multifunction devices, ink-level reporting, duplex defaults, and speciality paper settings.</p>
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
