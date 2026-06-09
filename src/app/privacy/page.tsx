import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | PrintSoftDrive',
  description: 'How PrintSoftDrive collects, uses, and safeguards information — in plain English.',
}

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Privacy Policy</li>
              </ol>
            </nav>
            <span className="section-kicker">Legal</span>
            <h1>Privacy Policy</h1>
            <p className="hero-lede">
              Plain-English explanations of what we collect, why we collect it, and the choices you have.
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="prose policy-content">
            <span className="updated">Last updated: May 21, 2026</span>
            <p className="lead" style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--text-main)' }}>
              PrintSoftDrive respects your privacy. This policy explains, in plain English, what we collect, why we collect it, and the choices you have.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Non-personal data</h3>
            <p>When you visit, we may automatically collect non-personal information such as browser type and operating system, IP address, pages visited and time spent, and the referring source that brought you here. This helps us understand which articles are useful.</p>

            <h3>Cookies and tracking technologies</h3>
            <p>We use cookies and similar technologies to keep the site working, measure traffic, and remember preferences. You can control these through your browser settings.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use collected data to operate and maintain the site, improve functionality and content, analyse general usage trends, optimise layout across devices, and protect against misuse. <strong>We do not sell personal data to third parties.</strong></p>

            <h2>3. Legal Basis for Processing</h2>
            <p>Where applicable, we process data on the basis of legitimate interest (improving the site), consent (for optional cookies), and legal obligation (compliance with applicable law).</p>

            <h2>4. Advertising and Third-Party Services</h2>
            <p>If advertising is shown, it may be served through third-party networks that use cookies to measure performance and personalise content. Advertisements are clearly separate from our editorial content and do not influence what we write.</p>

            <h2>5. Third-Party Links</h2>
            <p>We link to external websites, including manufacturer support pages and app stores. Those sites operate under their own privacy policies, which we do not control.</p>

            <h2>6. Data Sharing</h2>
            <p>We may share limited, non-identifying data with analytics providers, and with legal authorities where required by law. We do not sell or rent your personal data.</p>

            <h2>7. Data Security</h2>
            <p>We use standard measures such as HTTPS encryption and careful handling practices. No online system is ever completely secure, and we cannot guarantee absolute security.</p>

            <h2>8. Data Retention</h2>
            <p>We keep non-personal data only as long as needed for the purposes described here, after which it is deleted or anonymised.</p>

            <h2>9. Children's Privacy</h2>
            <p>PrintSoftDrive is not intended for children under 13, and we do not knowingly collect data from them. If you believe a child has provided us information, please contact us and we will remove it.</p>

            <h2>10. Your Rights</h2>
            <p>Depending on where you live, you may have the right to access your data, request deletion, opt out of cookies and advertising, and withdraw consent. To exercise these rights, contact <a href="mailto:support@printsoftdriver.com">support@printsoftdriver.com</a>.</p>

            <h2>11. Changes to This Policy</h2>
            <p>We may update this policy from time to time. The "last updated" date above reflects the latest revision.</p>

            <h2>12. Contact</h2>
            <p><strong>PrintSoftDrive</strong><br />Email: <a href="mailto:support@printsoftdriver.com">support@printsoftdriver.com</a></p>

            <div className="legal-nav-links">
              <Link href="/terms/" className="legal-nav-link">
                <strong>Terms of Use</strong>
                <small>Rules for using this site</small>
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
