import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Shield, Eye, Database, Lock, UserCheck, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | DriverWise',
  description: 'How DriverWise collects, uses, and safeguards information — in plain English.',
}

const sections = [
  {
    icon: Database,
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Non-personal data',
        text: 'When you visit, we may automatically collect non-personal information such as browser type and operating system, IP address, pages visited and time spent, and the referring source that brought you here. This helps us understand which articles are useful.',
      },
      {
        subtitle: 'Cookies and tracking technologies',
        text: 'We use cookies and similar technologies to keep the site working, measure traffic, and remember preferences. You can control these through your browser settings.',
      },
    ],
  },
  {
    icon: Eye,
    title: '2. How We Use Your Information',
    content: [
      {
        text: 'We use collected data to operate and maintain the site, improve functionality and content, analyse general usage trends, optimise layout across devices, and protect against misuse. We do not sell personal data to third parties.',
      },
    ],
  },
  {
    icon: Shield,
    title: '3. Legal Basis for Processing',
    content: [
      {
        text: 'Where applicable, we process data on the basis of legitimate interest (improving the site), consent (for optional cookies), and legal obligation (compliance with applicable law).',
      },
    ],
  },
  {
    icon: UserCheck,
    title: '4. Advertising and Third-Party Services',
    content: [
      {
        text: 'If advertising is shown, it may be served through third-party networks that use cookies to measure performance and personalise content. Advertisements are clearly separate from our editorial content and do not influence what we write.',
      },
    ],
  },
  {
    icon: Lock,
    title: '5. Third-Party Links',
    content: [
      {
        text: 'We link to external websites, including manufacturer support pages and app stores. Those sites operate under their own privacy policies, which we do not control.',
      },
    ],
  },
]

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-slate-900">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              Legal
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Privacy Policy
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
              Plain-English explanations of what we collect, why we collect it, and the choices you have.
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
          {/* Intro card */}
          <div className="mb-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <p className="text-lg leading-8 text-slate-700 font-medium">
              DriverWise respects your privacy. This policy explains, in plain English, what we collect, why we collect it, and the choices you have.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, i) => {
              const Icon = section.icon
              return (
                <div key={i} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((block, j) => (
                      <div key={j}>
                        {block.subtitle && (
                          <h3 className="mb-2 font-semibold text-slate-900">{block.subtitle}</h3>
                        )}
                        <p className="leading-8 text-slate-600">{block.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Remaining sections */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">6. Data Sharing</h2>
              <p className="leading-8 text-slate-600">
                We may share limited, non-identifying data with analytics providers, and with legal authorities where required by law. We do not sell or rent your personal data.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">7. Data Security</h2>
              <p className="leading-8 text-slate-600">
                We use standard measures such as HTTPS encryption and careful handling practices. No online system is ever completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">8. Data Retention</h2>
              <p className="leading-8 text-slate-600">
                We keep non-personal data only as long as needed for the purposes described here, after which it is deleted or anonymised.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">9. Children&apos;s Privacy</h2>
              <p className="leading-8 text-slate-600">
                DriverWise is not intended for children under 13, and we do not knowingly collect data from them. If you believe a child has provided us information, please contact us and we will remove it.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">10. Your Rights</h2>
              <p className="leading-8 text-slate-600">
                Depending on where you live, you may have the right to access your data, request deletion, opt out of cookies and advertising, and withdraw consent. To exercise these rights, contact{' '}
                <a href="mailto:support@driverwise.com" className="text-blue-600 hover:underline">support@driverwise.com</a>.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">11. Changes to This Policy</h2>
              <p className="leading-8 text-slate-600">
                We may update this policy from time to time. The &quot;last updated&quot; date above reflects the latest revision.
              </p>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">12. Contact</h2>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="font-bold text-slate-900">DriverWise</p>
                <p className="mt-2 text-slate-600">
                  Email:{' '}
                  <a href="mailto:support@driverwise.com" className="text-blue-600 hover:underline">
                    support@driverwise.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Related legal links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/terms"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Terms of Use →</p>
              <p className="mt-1 text-sm text-slate-500">Rules for using this site</p>
            </Link>
            <Link
              href="/disclaimer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Disclaimer →</p>
              <p className="mt-1 text-sm text-slate-500">Educational use only</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
