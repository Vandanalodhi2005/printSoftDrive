import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | PrintSoftDrive',
  description: "The rules for using PrintSoftDrive: a clear summary of what's allowed, what isn't, and how disputes are handled.",
}

export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Terms of Use</li>
              </ol>
            </nav>
            <span className="section-kicker">Legal</span>
            <h1>Terms of Use</h1>
            <p className="hero-lede">
              A clear summary of what's allowed, what's not, and how disputes are handled.
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="prose policy-content">
            <span className="updated">Last updated: May 21, 2026</span>
            <p className="lead" style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--text-main)' }}>
              Please read these Terms of Service carefully before using PrintSoftDrive. They govern your use of this website and explain what the service is, what it does, and your rights and responsibilities as a user.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using PrintSoftDrive (the "Service"), you agree to be bound by these Terms. If you do not agree, please do not use the Service. We reserve the right to modify these Terms at any time; material changes will be communicated via a notice on the website, and the date above will be updated.</p>

            <h2>2. Description of Service</h2>
            <p>PrintSoftDrive is a free, read-only educational website. It publishes articles, overviews, and reference material about device drivers and links to publicly available official resources. The Service does <strong>not</strong> distribute, host, sell, license, or deliver any driver or other software.</p>

            <h2>3. No Purchases or Transactions</h2>
            <p>We do not sell anything and do not process payments or financial transactions of any kind. Any transaction you make after following a link from PrintSoftDrive takes place entirely on a third-party platform governed by that platform's terms.</p>

            <h2>4. Accuracy of Information</h2>
            <p>Information is provided for general informational and educational purposes and is sourced from publicly available data. We do not independently verify, test, or endorse any third-party software. Always verify current information with the relevant provider before downloading or purchasing.</p>

            <h2>5. Permitted Use</h2>
            <p>You may use PrintSoftDrive for lawful, personal, non-commercial browsing and educational purposes. You may not violate applicable law, attempt unauthorised access to our systems, or systematically scrape or extract data without written permission.</p>

            <h2>6. Intellectual Property</h2>
            <p>The PrintSoftDrive name, logo, design, layout, and original written content are protected by applicable intellectual-property laws. You may not copy, reproduce, modify, or distribute our content without prior written consent.</p>

            <h2>7. Third-Party Links</h2>
            <p>The Service provides outbound links to third-party websites governed by their own terms and policies. We have no control over, and accept no responsibility for, their content, policies, or availability.</p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>The Service is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free. Your use of the Service is entirely at your own risk.</p>

            <h2>9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, PrintSoftDrive and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service or any third-party content linked from it.</p>

            <h2>10. Governing Law</h2>
            <p>These Terms are governed by applicable law. Any dispute will be handled in accordance with applicable jurisdiction and legal requirements.</p>

            <h2>11. Contact</h2>
            <p><strong>PrintSoftDrive</strong><br />Email: <a href="mailto:support@printsoftdriver.com">support@printsoftdriver.com</a></p>

            <div className="legal-nav-links">
              <Link href="/privacy/" className="legal-nav-link">
                <strong>Privacy Policy</strong>
                <small>How we handle your data</small>
              </Link>
              <Link href="/disclaimer/" className="legal-nav-link">
                <strong>Disclaimer</strong>
                <small>Educational use only</small>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
