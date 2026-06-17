import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText, AlertCircle, Ban, Copyright, Globe, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Use | DriverWise',
  description: "The rules for using DriverWise: a clear summary of what's allowed, what isn't, and how disputes are handled.",
}

export default function Terms() {
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
            <span className="font-medium text-slate-900">Terms of Use</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              Legal
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Terms of Use
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
              A clear summary of what&apos;s allowed, what&apos;s not, and how disputes are handled.
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
              Please read these Terms of Service carefully before using DriverWise. They govern your use of this website and explain what the service is, what it does, and your rights and responsibilities as a user.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              </div>
              <p className="leading-8 text-slate-600">
                By accessing or using DriverWise (the &quot;Service&quot;), you agree to be bound by these Terms. If you do not agree, please do not use the Service. We reserve the right to modify these Terms at any time; material changes will be communicated via a notice on the website, and the date above will be updated.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Description of Service</h2>
              </div>
              <p className="leading-8 text-slate-600">
                DriverWise is a free, read-only educational website. It publishes articles, overviews, and reference material about device drivers and links to publicly available official resources. The Service does <strong>not</strong> distribute, host, sell, license, or deliver any driver or other software.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Ban className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. No Purchases or Transactions</h2>
              </div>
              <p className="leading-8 text-slate-600">
                We do not sell anything and do not process payments or financial transactions of any kind. Any transaction you make after following a link from DriverWise takes place entirely on a third-party platform governed by that platform&apos;s terms.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">4. Accuracy of Information</h2>
              <p className="leading-8 text-slate-600">
                Information is provided for general informational and educational purposes and is sourced from publicly available data. We do not independently verify, test, or endorse any third-party software. Always verify current information with the relevant provider before downloading or purchasing.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">5. Permitted Use</h2>
              <p className="leading-8 text-slate-600">
                You may use DriverWise for lawful, personal, non-commercial browsing and educational purposes. You may not violate applicable law, attempt unauthorised access to our systems, or systematically scrape or extract data without written permission.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Copyright className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Intellectual Property</h2>
              </div>
              <p className="leading-8 text-slate-600">
                The DriverWise name, logo, design, layout, and original written content are protected by applicable intellectual-property laws. You may not copy, reproduce, modify, or distribute our content without prior written consent.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">7. Third-Party Links</h2>
              <p className="leading-8 text-slate-600">
                The Service provides outbound links to third-party websites governed by their own terms and policies. We have no control over, and accept no responsibility for, their content, policies, or availability.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">8. Disclaimer of Warranties</h2>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-8 text-slate-700">
                    The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free. Your use of the Service is entirely at your own risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">9. Limitation of Liability</h2>
              <p className="leading-8 text-slate-600">
                To the fullest extent permitted by law, DriverWise and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service or any third-party content linked from it.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">10. Governing Law</h2>
              <p className="leading-8 text-slate-600">
                These Terms are governed by applicable law. Any dispute will be handled in accordance with applicable jurisdiction and legal requirements.
              </p>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">11. Contact</h2>
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
            <Link href="/disclaimer" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Disclaimer →</p>
              <p className="mt-1 text-sm text-slate-500">Educational use only</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
