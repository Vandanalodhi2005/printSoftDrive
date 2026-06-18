import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | PrintSoftDrive',
  description: 'How PrintSoftDrive collects, uses, and safeguards your information — explained in plain English.',
}

const sections: {
  title: string
  content: { subtitle?: string; text: string }[]
}[] = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Non-personal data',
        text: 'When you visit PrintSoftDrive, we may automatically collect non-personal information such as browser type and operating system, IP address, pages visited and time spent, and the referring source that brought you here. This information is aggregated and anonymous — it helps us understand which articles are most useful and how readers navigate the site.',
      },
      {
        subtitle: 'Cookies and tracking technologies',
        text: 'We use cookies and similar technologies to keep the site working correctly, measure traffic patterns, and remember user preferences. Cookies are small text files stored on your device by your browser. You can control, disable, or delete cookies at any time through your browser settings. Essential cookies required for basic site functionality cannot be disabled without affecting your experience.',
      },
      {
        subtitle: 'Information you provide voluntarily',
        text: 'If you contact us through our contact form, we collect the name, email address, and message content you provide. This information is used solely to respond to your inquiry and is never shared with third parties for marketing purposes.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        text: 'We use collected data to operate and maintain the site, improve functionality and content quality, analyse general usage trends to understand what readers find helpful, optimise layout and performance across different devices, and protect against misuse or abuse of the service.',
      },
      {
        text: 'We do not sell, rent, or trade personal data to third parties. We do not use your information for automated decision-making or profiling. We do not use your contact information to send unsolicited marketing messages.',
      },
    ],
  },
  {
    title: '3. Legal Basis for Processing',
    content: [
      {
        text: 'Where applicable under data protection law, we process information on the basis of legitimate interest (improving the site and understanding how it is used), consent (for optional cookies and any advertising personalisation), and legal obligation (compliance with applicable laws and regulations).',
      },
      {
        text: 'If you are located in the European Economic Area or United Kingdom, you have rights under the General Data Protection Regulation (GDPR) or UK GDPR, including the right to access, correct, delete, or restrict processing of your personal data.',
      },
    ],
  },
  {
    title: '4. Advertising and Third-Party Services',
    content: [
      {
        text: 'If advertising is shown on this site, it may be served through third-party advertising networks that use cookies to measure ad performance and show relevant advertisements. These networks operate under their own privacy policies. We clearly separate advertising content from editorial content, and paid placements never influence our guides or recommendations.',
      },
      {
        text: 'We may use third-party analytics services such as Google Analytics to understand how the site is used in aggregate. These services process anonymised data and operate under their own privacy frameworks. You can opt out of Google Analytics by using the Google Analytics Opt-out Browser Add-on.',
      },
    ],
  },
  {
    title: '5. Third-Party Links',
    content: [
      {
        text: 'Our articles regularly link to manufacturer support pages, official download sources, and other external websites. These external sites operate under their own privacy policies, which we do not control. We are not responsible for the content, privacy practices, or data collection of any third-party website. We recommend reviewing the privacy policy of any external site before providing personal information.',
      },
    ],
  },
  {
    title: '6. Data Sharing',
    content: [
      {
        text: 'We may share limited, non-identifying aggregated data with analytics providers who help us improve the site. We may disclose information to legal authorities where required by law, valid court order, or to protect the rights, property, or safety of our users or the public.',
      },
      {
        text: 'We do not sell, rent, or share your personal data with advertisers, data brokers, or any third party for commercial purposes.',
      },
    ],
  },
  {
    title: '7. Data Security',
    content: [
      {
        text: 'We use standard security measures including HTTPS encryption on all pages, secure server configurations, and careful data handling practices to protect information from unauthorised access, alteration, or disclosure.',
      },
      {
        text: 'No online system is ever completely secure. While we make every reasonable effort to protect your data, we cannot guarantee absolute security. In the unlikely event of a data breach that affects your rights, we will notify affected users as required by applicable law.',
      },
    ],
  },
  {
    title: '8. Data Retention',
    content: [
      {
        text: 'We retain non-personal usage data only as long as necessary for the purposes described in this policy, typically no more than 14 months for analytics data, after which it is deleted or fully anonymised. Contact form submissions are retained only as long as needed to respond to and resolve the inquiry.',
      },
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      {
        text: 'PrintSoftDrive is not directed at children under the age of 13, and we do not knowingly collect personal data from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately. We will promptly delete any such information from our records.',
      },
    ],
  },
  {
    title: '10. Global Privacy Control (GPC)',
    content: [
      {
        text: 'If your browser or browser extension sends a Global Privacy Control (GPC) signal, we treat it as a request to opt out of interest-based advertising and non-essential tracking where applicable under privacy law.',
      },
    ],
  },
  {
    title: '11. Your Rights',
    content: [
      {
        text: 'Depending on your location, you may have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict processing, opt out of interest-based advertising, and withdraw consent at any time where consent is the legal basis for processing.',
      },
      {
        text: 'To exercise any of these rights, contact us at support@printsoftdrive.com. We will respond within 30 days. We may need to verify your identity before processing requests.',
      },
    ],
  },
  {
    title: '12. Changes to This Policy',
    content: [
      {
        text: 'We may update this Privacy Policy from time to time to reflect changes in technology, legal requirements, or our practices. The "last updated" date at the top of this page reflects the most recent revision. Continued use of PrintSoftDrive after any changes constitutes acceptance of the updated policy. For material changes, we will provide a more prominent notice on the site.',
      },
    ],
  },
  {
    title: '13. Contact',
    content: [
      {
        text: 'If you have any questions, concerns, or requests relating to this Privacy Policy or how we handle your data, please reach out to us. PrintSoftDrive — Email: support@printsoftdrive.com. We aim to respond to all privacy-related inquiries within 5 business days.',
      },
    ],
  },
]

export default function Privacy() {
  return (
    <>
      {/* Hero */}
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
            <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '8px' }}>
              Last updated: May 21, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="block">
        <div className="container">
          <div className="prose">

            {/* Intro */}
            <div style={{
              background: 'var(--primary-soft)',
              border: '1px solid rgba(37,99,235,0.15)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 28px',
              marginBottom: '40px'
            }}>
              <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.75 }}>
                PrintSoftDrive is an independent educational resource. We respect your privacy. This policy explains, in plain English, exactly what information we collect, how we use it, and the choices available to you.
              </p>
            </div>

            {/* All sections */}
            {sections.map((sec, i) => (
              <div key={i} style={{
                marginBottom: '32px',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '28px 32px',
                boxShadow: 'var(--shadow-xs)'
              }}>
                <h2 style={{ marginTop: 0, marginBottom: '18px', fontSize: '1.3rem' }}>{sec.title}</h2>
                {sec.content.map((block, j) => (
                  <div key={j} style={{ marginBottom: j < sec.content.length - 1 ? '18px' : 0 }}>
                    {block.subtitle && (
                      <h3 style={{ fontSize: '1rem', marginBottom: '8px', marginTop: j > 0 ? '18px' : 0 }}>
                        {block.subtitle}
                      </h3>
                    )}
                    <p style={{ margin: 0, lineHeight: 1.8, color: 'var(--text-body)' }}>{block.text}</p>
                  </div>
                ))}
              </div>
            ))}

            {/* Related links */}
            <div className="legal-nav-links">
              <Link href="/terms/" className="legal-nav-link">
                <strong>Terms of Use</strong>
                <small>Rules for using this site</small>
              </Link>
              <Link href="/disclaimer/" className="legal-nav-link">
                <strong>Disclaimer</strong>
                <small>Educational use only</small>
              </Link>
              <Link href="/cookie-policy/" className="legal-nav-link">
                <strong>Cookie Policy</strong>
                <small>Cookies and your choices</small>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
