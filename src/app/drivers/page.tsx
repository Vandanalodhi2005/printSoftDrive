import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Device Drivers Explained — Every Family | PrintSoftDrive',
  description: 'A plain-English map of every device driver family: printer, scanner, graphics, audio, Wi-Fi & network, Bluetooth, and USB.',
}

const driverFamilies = [
  { id: 'printer', name: 'Printer Drivers', desc: 'Installation, updates, compatibility and troubleshooting guides.', image: '/assets/images/printer-what.svg' },
  { id: 'scanner', name: 'Scanner Drivers', desc: 'Learn how scanners communicate with your operating system.', image: '/assets/images/scanner-what.svg' },
  { id: 'graphics', name: 'Graphics Drivers', desc: 'GPU updates, gaming performance and display optimization.', image: '/assets/images/graphics-what.svg' },
  { id: 'audio', name: 'Audio Drivers', desc: 'Fix sound issues and understand audio device communication.', image: '/assets/images/audio-what.svg' },
  { id: 'network', name: 'Network Drivers', desc: 'Wi-Fi, Ethernet and connectivity troubleshooting resources.', image: '/assets/images/network-what.svg' },
  { id: 'bluetooth', name: 'Bluetooth Drivers', desc: 'Pairing, connectivity and Bluetooth device support.', image: '/assets/images/bluetooth-what.svg' },
  { id: 'usb', name: 'USB Drivers', desc: 'Device recognition, installation and USB troubleshooting.', image: '/assets/images/usb-what.svg' },
  { id: 'chipset', name: 'Chipset Drivers', desc: 'The foundation that connects all your hardware together.', image: '/assets/images/system-what.svg' },
  { id: 'storage', name: 'Storage Drivers', desc: 'SSD, HDD, and external storage performance and reliability.', image: '/assets/images/system-what.svg' },
  { id: 'input', name: 'Input Devices', desc: 'Keyboards, mice, touchpads, and game controller support.', image: '/assets/images/system-what.svg' },
  { id: 'troubleshooting', name: 'Troubleshooting Hub', desc: 'Step-by-step fixes for common driver and device problems.', image: '/assets/images/system-what.svg' },
]

export default function Drivers() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Device Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Driver Overviews</span>
            <h1>Every Driver Family,<br /><span style={{ color: 'var(--primary)' }}>Explained in Plain English</span></h1>
            <p className="hero-lede">
              Drivers are simply translators between your software and your hardware. Explore each driver category to understand what it does, why it matters, and how to keep it working smoothly without getting lost in technical jargon.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="block">
        <div className="container">
          <div className="grid grid-auto-3">
            <div className="card">
              <div className="card-icon">👶</div>
              <h3>Beginner Friendly</h3>
              <p>Learn about printer, graphics, audio, network, chipset, and storage drivers.</p>
            </div>
            <div className="card">
              <div className="card-icon">📚</div>
              <h3>Plain-English Guides</h3>
              <p>No complex terminology — just practical, understandable guidance.</p>
            </div>
            <div className="card">
              <div className="card-icon">💡</div>
              <h3>Maintenance Tips</h3>
              <p>Understand updates, compatibility, and common troubleshooting practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Categories */}
      <section className="block" id="families">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Categories</span>
            <h2>Explore Every Driver Family</h2>
            <p>From printers to chipsets, every hardware category has a guide written in simple, straightforward language.</p>
          </div>
          <div className="grid grid-auto-3">
            {driverFamilies.map((driver, idx) => (
              <Link key={driver.id} href={`/drivers/${driver.id}/`} className="card driver-card">
                <div className="driver-thumb" style={{
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-light)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '16px'
                }}>
                  <Image
                    src={driver.image}
                    alt={driver.name}
                    width={140}
                    height={140}
                    priority={idx < 3}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="section-kicker" style={{ marginTop: '10px', marginBottom: '10px' }}>Guide</div>
                <h3>{driver.name}</h3>
                <p>{driver.desc}</p>
                <div className="more">
                  Read more
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Locations */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Locations</span>
            <h2>Where Do Drivers Actually Live on Your PC?</h2>
            <p>Spoiler: they're not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.</p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <div className="grid grid-auto-3">
              <div className="card">
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <Image
                    src="/deviceManager.webp"
                    alt="Windows Device Manager"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <h3>Inside the Device Manager</h3>
                <p>This is the friendliest place to start on a Windows PC. Right-click the Start button and pick "Device Manager," and a tidy list of every piece of hardware on your machine appears — neatly grouped by category. Click any item and you can see its driver, check its version, update it, roll it back if a recent update caused trouble, or remove it entirely. It's like a backstage pass to the people running the show.</p>
              </div>

              <div className="card">
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <Image
                    src="/settingUpdate.webp"
                    alt="Settings & Updates"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <h3>Through Settings & Updates</h3>
                <p>On modern Windows systems, head to Settings, then Windows Update, then "Advanced options" and look for "Optional updates." Many driver updates quietly arrive here — already tested for your machine. On macOS, drivers are bundled into regular system updates, so just keep your OS current. On Linux, your distribution's package manager (or a built-in "Additional Drivers" tool) does the same job.</p>
              </div>

              <div className="card">
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <Image
                    src="/website.jpg"
                    alt="Hardware Maker's Website"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <h3>The Hardware Maker's Website</h3>
                <p>Every reputable hardware maker keeps a "Support" or "Drivers" section on its official website where you can download the very latest driver for your exact model. This is the go-to spot when you need a brand-new feature, a performance boost, or a fix for a specific bug. Always download directly from the official site — never from a random pop-up — and double-check the driver matches your operating system version.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About PrintSoftDrive */}
      <section className="block">
        <div className="container">
          <div className="split">
            {/* Left Column: Image */}
            <div className="split-media" style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: 'var(--radius-xl)'
            }}>
              <Image
                src="/website.jpg"
                alt="About PrintSoftDrive"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                priority
              />
            </div>
            
            {/* Right Column: Content */}
            <div className="split-content">
              <span className="section-kicker">About PrintSoftDrive</span>
              <h2>A Friendly Voice in a Noisy Tech World</h2>
              <p>
                We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.
              </p>
              <p>
                No sponsorships. No affiliate links. No "instant driver updater" nonsense. Just clear, honest explanations of how things actually work.
              </p>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: '30px 0',
                textAlign: 'left'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '1rem' }}>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '0.9rem',
                    flexShrink: 0 
                  }}>✓</span>
                  <span>Independent and free to read, always</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '1rem' }}>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '0.9rem',
                    flexShrink: 0 
                  }}>✓</span>
                  <span>Plain-English first, technical accuracy second to none</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem' }}>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '0.9rem',
                    flexShrink: 0 
                  }}>✓</span>
                  <span>Privacy-respecting — no aggressive trackers or sold data</span>
                </li>
              </ul>
              
              <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                <Link href="/about" className="btn btn-primary">Read More About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
