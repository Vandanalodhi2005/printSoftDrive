import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer | PrintSoftDrive',
  description: 'Important limitations of the information on PrintSoftDrive: educational use only, no affiliation with vendors, no warranties.',
}

export default function Disclaimer() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Disclaimer</li>
              </ol>
            </nav>
            <span className="section-kicker">Legal</span>
            <h1>Disclaimer</h1>
            <p className="hero-lede">
              What you can — and cannot — expect from the information published on this site.
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="prose policy-content">
            <span className="updated">Last updated: May 21, 2026</span>
            <p className="lead" style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--text-main)' }}>
              Please read this disclaimer carefully. It explains important limitations of the information published on PrintSoftDrive, our relationship with third-party providers, and the extent of our liability.
            </p>

            <h2>1. General Disclaimer</h2>
            <p>PrintSoftDrive is an independent, third-party educational website about device drivers. We are not affiliated with, endorsed by, or officially connected to any operating-system vendor, platform operator, hardware manufacturer, or software developer unless explicitly stated. All information is provided for general informational and educational purposes only.</p>

            <h2>2. Information Accuracy</h2>
            <p>Details displayed here — including driver descriptions, version references, feature descriptions, and system requirements — are sourced from publicly available information and may not reflect the most current status of any product. Always verify current information directly with the relevant official source before downloading or purchasing any software.</p>

            <h2>3. No Endorsement</h2>
            <p>Referencing or featuring any third-party software does not constitute an endorsement, recommendation, or guarantee. We organise content based on publicly available metadata and cannot verify every claim made by software developers.</p>

            <h2>4. Third-Party Links</h2>
            <p>This site contains links to external websites and app marketplaces for your convenience. We have no control over their content, policies, or practices and accept no responsibility for them. The inclusion of any link does not imply endorsement.</p>

            <h2>5. No Professional Advice</h2>
            <p>Nothing here constitutes professional, legal, financial, medical, or technical advice. Content is for general reference only. For decisions about software installation or system configuration, consult a qualified technician or the documentation provided by your hardware manufacturer.</p>

            <h2>6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, PrintSoftDrive, its officers, directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the site, any reliance on information displayed, or any software you discover as a result of using the site.</p>

            <h2>7. Changes to This Disclaimer</h2>
            <p>We may update this disclaimer from time to time. Continued use of PrintSoftDrive after changes constitutes acceptance of the updated version.</p>

            <h2>8. Contact</h2>
            <p><strong>PrintSoftDrive</strong><br />Email: <a href="mailto:support@printsoftdriver.com">support@printsoftdriver.com</a></p>

            <div className="legal-nav-links">
              <Link href="/privacy/" className="legal-nav-link">
                <strong>Privacy Policy</strong>
                <small>How we handle your data</small>
              </Link>
              <Link href="/terms/" className="legal-nav-link">
                <strong>Terms of Use</strong>
                <small>Rules for using this site</small>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
