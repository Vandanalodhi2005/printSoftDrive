import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link className="flex items-center gap-3" href="/">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-slate-900">
                  DriverWise
                </h2>
                <p className="text-xs text-slate-500">Printer Drivers Hub</p>
              </div>
            </Link>
            <p className="text-sm leading-6 text-slate-600">
              Your trusted resource for understanding printer drivers, troubleshooting
              issues, and finding clear answers without technical complexity.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Site Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link href="/knowledge" className="hover:text-blue-600 transition-colors">Knowledge</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/sitemap" className="hover:text-blue-600 transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Driver Overviews */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Driver Overviews
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/drivers" className="hover:text-blue-600 transition-colors">All Device Drivers</Link></li>
              <li><Link href="/drivers/printer-drivers" className="hover:text-blue-600 transition-colors">Printer Drivers</Link></li>
              <li><Link href="/drivers/scanner-drivers" className="hover:text-blue-600 transition-colors">Scanner Drivers</Link></li>
              <li><Link href="/drivers/graphics-drivers" className="hover:text-blue-600 transition-colors">Graphics Drivers</Link></li>
              <li><Link href="/drivers/audio-drivers" className="hover:text-blue-600 transition-colors">Audio Drivers</Link></li>
              <li><Link href="/drivers/network-drivers" className="hover:text-blue-600 transition-colors">Wi‑Fi & Network</Link></li>
              <li><Link href="/drivers/bluetooth-drivers" className="hover:text-blue-600 transition-colors">Bluetooth Drivers</Link></li>
              <li><Link href="/drivers/usb-drivers" className="hover:text-blue-600 transition-colors">USB Drivers</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Get In Touch
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Have a question or topic suggestion? We would love to hear from you.
              </p>
              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <a href="mailto:hello@driverwise.com" className="hover:text-blue-600 transition-colors">
                    hello@driverwise.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl bg-slate-50 p-6 border border-slate-100">
          <p className="text-xs leading-5 text-slate-500">
            <strong>Disclaimer:</strong> DriverWise is an independent educational resource designed to help users understand printer drivers, setup procedures, compatibility, and troubleshooting methods. Content is provided for informational purposes only and does not represent any printer manufacturer, hardware vendor, or software publisher.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-8">
          <p className="text-sm text-slate-500">
            © {currentYear} DriverWise. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Use</Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/cookie-policy" className="hover:text-blue-600 transition-colors">Cookie Policy</Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/advertising-disclosure" className="hover:text-blue-600 transition-colors">Advertising Disclosure</Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/accessibility" className="hover:text-blue-600 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
