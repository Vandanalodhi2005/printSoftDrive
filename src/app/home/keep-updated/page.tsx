import Seo from '../../../components/Seo';
import Link from 'next/link';

export default function KeepUpdated() {
  return (
    <>
      {/* SEO */}
      <Seo
        title="DriverWise – Your trusted driver resource"
        description="DriverWise – Your trusted resource for understanding printer drivers, troubleshooting issues, and finding clear answers without technical complexity."
      />

      {/* Hero Section with glass effect */}
      <section className="hero-glass py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DriverWise
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            DriverWise – Your trusted resource for understanding printer drivers, troubleshooting issues, and finding clear answers without technical complexity.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-4 md:grid-2 sm:grid-1 gap-8">
            {/* Site Links */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Site Links</h2>
              <ul className="space-y-2">
                <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
                <li><Link href="/about" className="text-blue-600 hover:underline">About</Link></li>
                <li><Link href="/blog" className="text-blue-600 hover:underline">Blog</Link></li>
                <li><Link href="/knowledge" className="text-blue-600 hover:underline">Knowledge</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
                <li><Link href="/sitemap" className="text-blue-600 hover:underline">Sitemap</Link></li>
              </ul>
            </div>

            {/* Driver Overviews */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Driver Overviews</h2>
              <ul className="space-y-2">
                <li><Link href="/drivers" className="text-blue-600 hover:underline">All Device Drivers</Link></li>
                <li><Link href="/drivers/printer" className="text-blue-600 hover:underline">Printer Drivers</Link></li>
                <li><Link href="/drivers/scanner" className="text-blue-600 hover:underline">Scanner Drivers</Link></li>
                <li><Link href="/drivers/graphics" className="text-blue-600 hover:underline">Graphics Drivers</Link></li>
                <li><Link href="/drivers/audio" className="text-blue-600 hover:underline">Audio Drivers</Link></li>
                <li><Link href="/drivers/network" className="text-blue-600 hover:underline">Wi‑Fi & Network</Link></li>
                <li><Link href="/drivers/bluetooth" className="text-blue-600 hover:underline">Bluetooth Drivers</Link></li>
                <li><Link href="/drivers/usb" className="text-blue-600 hover:underline">USB Drivers</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Legal</h2>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-blue-600 hover:underline">Terms of Use</Link></li>
                <li><Link href="/disclaimer" className="text-blue-600 hover:underline">Disclaimer</Link></li>
                <li><Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link></li>
                <li><Link href="/advertising-disclosure" className="text-blue-600 hover:underline">Advertising Disclosure</Link></li>
                <li><Link href="/accessibility" className="text-blue-600 hover:underline">Accessibility</Link></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
              <p className="mb-2">
                Have a question or topic suggestion? We would love to hear from you.
              </p>
              <p className="mb-1">
                Email: <a href="mailto:hello@driverwise.com" className="text-blue-600 hover:underline">hello@driverwise.com</a>
              </p>
              <p className="mb-4">Address: United States</p>
              <p className="text-sm text-gray-600">
                Disclaimer: DriverWise is an independent educational resource designed to help users understand printer drivers, setup procedures, compatibility, and troubleshooting methods. Content is provided for informational purposes only and does not represent any printer manufacturer, hardware vendor, or make.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default function KeepUpdated(){
  return (
    <section className="block">
      <div className="container">
        <Seo title="Keep Drivers Updated - PrintSoftDriver" description="Why keeping drivers updated matters" />
        <h1 className="text-3xl font-semibold mb-4">Keep Drivers Updated</h1>
        <p className="text-slate-700 mb-4">Regular driver maintenance keeps your system stable, secure, and performant.</p>

        <ol className="list-decimal ml-6 text-slate-600">
          <li>Back up first.</li>
          <li>Use built-in OS updaters.</li>
          <li>Visit vendor sites for specialized drivers.</li>
        </ol>
      </div>
    </section>
  )
}
