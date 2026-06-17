import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, Info, ExternalLink, Ban, HelpCircle, ShieldAlert, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disclaimer | DriverWise',
  description: 'Important limitations of the information on DriverWise: educational use only, no affiliation with vendors, no warranties.',
}

export default function Disclaimer() {
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
            <span className="font-medium text-slate-900">Disclaimer</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              Legal
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Disclaimer
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
              What you can — and cannot — expect from the information published on this site.
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
          <div className="mb-12 rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
              <p className="text-lg leading-8 text-slate-700 font-medium">
                Please read this disclaimer carefully. It explains important limitations of the information published on DriverWise, our relationship with third-party providers, and the extent of our liability.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Info className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. General Disclaimer</h2>
              </div>
              <p className="leading-8 text-slate-600">
                DriverWise is an independent, third-party educational website about device drivers. We are not affiliated with, endorsed by, or officially connected to any operating-system vendor, platform operator, hardware manufacturer, or software developer unless explicitly stated. All information is provided for general informational and educational purposes only.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Information Accuracy</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Details displayed here — including driver descriptions, version references, feature descriptions, and system requirements — are sourced from publicly available information and may not reflect the most current status of any product. Always verify current information directly with the relevant official source before downloading or purchasing any software.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Ban className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. No Endorsement</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Referencing or featuring any third-party software does not constitute an endorsement, recommendation, or guarantee. We organise content based on publicly available metadata and cannot verify every claim made by software developers.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <ExternalLink className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Third-Party Links</h2>
              </div>
              <p className="leading-8 text-slate-600">
                This site contains links to external websites and app marketplaces for your convenience. We have no control over their content, policies, or practices and accept no responsibility for them. The inclusion of any link does not imply endorsement.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. No Professional Advice</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Nothing here constitutes professional, legal, financial, medical, or technical advice. Content is for general reference only. For decisions about software installation or system configuration, consult a qualified technician or the documentation provided by your hardware manufacturer.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <ShieldAlert className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Limitation of Liability</h2>
              </div>
              <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <p className="leading-8 text-slate-700">
                  To the fullest extent permitted by law, DriverWise, its officers, directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the site, any reliance on information displayed, or any software you discover as a result of using the site.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">7. Changes to This Disclaimer</h2>
              <p className="leading-8 text-slate-600">
                We may update this disclaimer from time to time. Continued use of DriverWise after changes constitutes acceptance of the updated version.
              </p>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8. Contact</h2>
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
            <Link href="/privacy" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Privacy Policy →</p>
              <p className="mt-1 text-sm text-slate-500">How we handle your data</p>
            </Link>
            <Link href="/terms" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Terms of Use →</p>
              <p className="mt-1 text-sm text-slate-500">Rules for using this site</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
