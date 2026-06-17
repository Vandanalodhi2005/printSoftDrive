import Link from 'next/link'
import { ChevronRight, Cookie, Globe, Settings, Shield, Clock, Mail } from 'lucide-react'

export const metadata = {
  title: 'Cookie Policy | DriverWise',
  description: 'Cookies, tracking, and your choices. Learn how DriverWise uses cookies and similar technologies.',
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-slate-900">Cookie Policy</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              Legal
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Cookie Policy
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
              Cookies, Tracking, and Your Choices — a complete breakdown of every cookie this site sets.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
              Last updated: May 21, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Intro */}
          <div className="mb-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <p className="text-lg leading-8 text-slate-700 font-medium">
              This Cookie Policy explains how DriverWise uses cookies and similar technologies, what they are, why we use them, and how you can control them.
            </p>
          </div>

          <div className="space-y-6">
            {/* Section 1 — Cookie types */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Types of Cookies We Use</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Essential cookies — always active',
                    text: 'Required for security, session management, and core functionality. These cannot be disabled.',
                  },
                  {
                    title: 'Analytics cookies — optional',
                    text: 'Help us understand usage patterns such as page views, navigation paths, session duration, and device type.',
                  },
                  {
                    title: 'Preference cookies — optional',
                    text: 'Store settings like display preferences for a more personalised experience.',
                  },
                  {
                    title: 'Advertising and tracking — optional',
                    text: 'Used to show relevant ads and measure campaign performance via partners.',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600 leading-7">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Globe className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. What Are Cookies?</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Cookies are small text files stored on your device. They may be session cookies (deleted when you close your browser) or persistent cookies (stored for a set time), and may be first-party or third-party.
              </p>
            </div>

            {/* Section 3 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Settings className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Managing Cookies</h2>
              </div>
              <p className="leading-8 text-slate-600">
                You can view, manage, or delete cookies through your browser settings. If your browser sends a Global Privacy Control signal, we treat it as an opt-out request for interest-based advertising where applicable.
              </p>
            </div>

            {/* Section 4 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Cookie Consent</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Essential cookies are always active. Optional cookies require consent where required by law, and you may withdraw consent at any time.
              </p>
            </div>

            {/* Section 5 — Retention */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Retention Periods</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Essential cookies', period: 'Session or up to 1 year' },
                  { label: 'Analytics cookies', period: 'Typically up to 14 months' },
                  { label: 'Preference cookies', period: 'Up to 12 months' },
                  { label: 'Advertising cookies', period: '30–90 days depending on provider' },
                ].map((row, i) => (
                  <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">{row.label}</p>
                    <p className="mt-1 text-sm text-slate-600">{row.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">6. Updates to This Policy</h2>
              <p className="leading-8 text-slate-600">
                We may update this Cookie Policy to reflect changes in technology, law, or practices. The &quot;last updated&quot; date shows the latest revision.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. Contact</h2>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6 space-y-2">
                <p className="font-bold text-slate-900">DriverWise Media LLC</p>
                <p className="text-slate-600">
                  Email:{' '}
                  <a href="mailto:hello@driverwise.com" className="text-blue-600 hover:underline">hello@driverwise.com</a>
                  <span className="text-slate-400 ml-2 text-sm">— Subject: Cookie Policy Inquiry</span>
                </p>
                <p className="text-slate-600">Phone: +1 (888) 555-0100</p>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link href="/privacy" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Privacy Policy →</p>
              <p className="mt-1 text-sm text-slate-500">How we handle your data</p>
            </Link>
            <Link href="/advertising-disclosure" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Advertising Disclosure →</p>
              <p className="mt-1 text-sm text-slate-500">How the site is funded</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
