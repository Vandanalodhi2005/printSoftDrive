import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Marquee from '../components/Marquee'
import HomeTabs from '../components/HomeTabs'
import ThemeIcon from '../components/ThemeIcon'

export const metadata: Metadata = {
  title: 'PrintSoftDrive — Device Drivers Explained in Plain English',
  description: 'PrintSoftDrive explains printer, scanner, graphics, audio, Wi-Fi, Bluetooth, and USB drivers in plain English, with calm fixes for common problems.',
}

const drivers = [
  { id: 'printer',   name: 'Printer Drivers',   desc: 'Installation, updates, compatibility and troubleshooting guides.',        icon: 'printer', tag: 'Output' },
  { id: 'scanner',   name: 'Scanner Drivers',   desc: 'Learn how scanners communicate with your operating system.',                    icon: 'scanner', tag: 'Input' },
  { id: 'graphics',  name: 'Graphics Drivers',  desc: 'GPU updates, gaming performance and display optimization.',                             icon: 'graphics', tag: 'Performance' },
  { id: 'audio',     name: 'Audio Drivers',     desc: 'Fix sound issues and understand audio device communication.',                        icon: 'audio', tag: 'Real-time' },
  { id: 'network',   name: 'Network Drivers',   desc: 'Wi-Fi, Ethernet and connectivity troubleshooting resources.',                      icon: 'network', tag: 'Connectivity' },
  { id: 'bluetooth', name: 'Bluetooth Drivers', desc: 'Pairing, connectivity and Bluetooth device support.',                             icon: 'bluetooth', tag: 'Wireless' },
  { id: 'usb',       name: 'USB Drivers',       desc: 'Device recognition, installation and USB troubleshooting.',                            icon: 'usb', tag: 'Plug & Play' },
]

const quickCategories = [
  { id: 'printer', name: 'Printer Drivers', desc: 'Why your device needs special software, what goes wrong, and how to keep output painless across home, office, and shared setups.', icon: 'printer' },
  { id: 'graphics', name: 'Graphics Drivers', desc: 'How GPUs, displays, and modern apps stay in sync — and why a tiny driver update can transform game performance.', icon: 'graphics' },
  { id: 'audio', name: 'Audio Drivers', desc: 'The quiet software shaping every chime, voice call, and music track that comes out of your speakers and headphones.', icon: 'audio' },
  { id: 'network', name: 'Network Drivers', desc: 'The bridge between your operating system and the wired or wireless chip that connects you to the wider internet.', icon: 'network' },
  { id: 'usb', name: 'USB & Devices', desc: 'How keyboards, mice, drives, webcams, and controllers get recognised the instant you plug them in — and what to try when they don\'t.', icon: 'usb' },
  { id: 'printer', name: 'System Drivers', desc: 'The chipset, CPU, and storage drivers you never see — but always feel — making your machine boot fast and run smoothly.', icon: 'system' },
]

const commonProblems = [
  { title: 'Driver Conflicts', desc: 'Driver conflicts occur when two or more drivers compete for the same hardware resource, such as an interrupt request line, an input/output port address range, or memory-mapped region.' },
  { title: 'Outdated Drivers', desc: 'Outdated drivers represent one of the most preventable yet frequently encountered sources of hardware and system problems. As operating systems evolve, they introduce new kernel APIs, security requirements, and interface specifications.' },
  { title: 'Corrupted Driver Files', desc: 'Driver file corruption can occur due to several causes: incomplete driver installation interrupted by a power failure, disk errors writing driver files to storage, malware that intentionally modifies driver binaries, or disk sectors that develop read errors after the driver was written to them.' },
  { title: 'Missing Drivers After OS Install', desc: 'After installing a new operating system, certain hardware components may not be recognized or may function only with basic generic drivers that lack the device\'s full feature set.' },
  { title: 'Incompatible Drivers', desc: 'Incompatible drivers occur when a driver designed for one version of an operating system or hardware model is used with a different version.' },
  { title: 'Signed vs Unsigned Drivers', desc: 'Driver signing is a verification mechanism that uses digital certificates to confirm that a driver package has been tested and certified by its developer, and that the driver files haven\'t been altered since they were signed.' },
]

const driverTypes = [
  { title: 'Kernel-Mode Drivers', desc: 'Kernel-mode drivers work at the operating system\'s most trusted level, with direct access to hardware, memory, and system resources.', link: '/drivers/printer' },
  { title: 'User-Mode Drivers', desc: 'User-mode drivers operate in a safer, isolated part of the system, separated from the core OS. If something goes wrong, the driver can crash without taking the whole system down.', link: '/drivers/usb' },
  { title: 'Printer & Output Drivers', desc: 'Specialized drivers that handle communication with printers and other output devices.', link: '/drivers/printer' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="block" style={{ 
        paddingTop: '120px', 
        paddingBottom: '100px',
        backgroundImage: 'url(/assets/img/home-1/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,15,30,0.85) 0%, rgba(37,99,235,0.3) 100%)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none' }}>Printer Drivers Hub</span>
            <h1 style={{ 
              marginTop: '24px', 
              marginBottom: '20px', 
              color: '#fff', 
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}>
              Printer Drivers, Explained Clearly.
            </h1>
            <p style={{ 
              fontSize: '1.15rem', 
              color: 'rgba(255,255,255,0.85)', 
              marginBottom: '40px',
              textShadow: '0 1px 4px rgba(0,0,0,0.2)'
            }}>
              Learn how printer drivers work, troubleshoot issues, and find practical solutions explained in simple language.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center', gap: '20px' }}>
              <Link href="/drivers/" className="btn btn-primary" style={{
                background: '#fff',
                color: 'var(--primary)'
              }}>
                Explore Drivers
              </Link>
              <Link href="/knowledge/" className="btn btn-outline" style={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.4)'
              }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="block" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Driver Guides</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Printer Models</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Knowledge Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Center Section */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Knowledge Center</span>
            <h2>Guides & Troubleshooting</h2>
          </div>
          <div className="grid grid-auto-3">
            <Link href="/drivers/printer" className="card">
              <div className="card-icon">
                <ThemeIcon type="printer" size={44} />
              </div>
              <h3>Printer Setup Guides</h3>
              <p>Step-by-step guides for setting up printers on all major operating systems.</p>
            </Link>
            <Link href="/knowledge" className="card">
              <div className="card-icon">
                <ThemeIcon type="usb" size={44} />
              </div>
              <h3>Driver Installation Help</h3>
              <p>Learn how to safely install and update drivers from trusted sources.</p>
            </Link>
            <Link href="/knowledge" className="card">
              <div className="card-icon">
                <ThemeIcon type="settings" size={44} />
              </div>
              <h3>Error Fix Tutorials</h3>
              <p>Troubleshoot common driver errors with clear, actionable steps.</p>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Audio & Sound', 'Wi-Fi & Networking', 'USB & Devices', 'Storage & SSD', 'Bluetooth', 'Chipset & System'].map((tag, i) => (
                <span key={i} style={{ 
                  background: 'var(--primary-soft)', 
                  color: 'var(--primary)', 
                  padding: '6px 16px', 
                  borderRadius: '999px', 
                  fontSize: '13px', 
                  fontWeight: '600',
                  border: '1px solid rgba(37,99,235,0.15)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* What is a Driver Section */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">The Basics</span>
            <h2>So... What Exactly Is a Driver?</h2>
            <p>Understanding drivers doesn't require a computer science degree. Start with these simple ideas.</p>
          </div>
          <HomeTabs />
        </div>
      </section>

      {/* Driver Categories Grid */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What We Cover</span>
            <h2>Explore Driver Categories</h2>
            <p>Learn, troubleshoot and understand every major driver category through simple, practical explanations.</p>
          </div>

          <div className="grid grid-auto-3">
            {drivers.map(d => (
              <Link key={d.id} href={`/drivers/${d.id}/`} className="driver-tile">
                <span className="driver-tile-tag">{d.tag}</span>
                <div className="driver-tile-icon">
                  <ThemeIcon type={d.icon} size={48} />
                </div>
                <h3>{d.name}</h3>
                <p className="driver-tile-summary">{d.desc}</p>
                <span className="driver-tile-toggle">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Between Software & Hardware */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">Why Drivers Matter</span>
              <h2 style={{ marginBottom: '20px' }}>The bridge between software and hardware.</h2>
              <p style={{ marginBottom: '24px' }}>
                Every click, print command, and device action needs a driver working behind the scenes. Drivers translate instructions between your operating system and physical hardware.
              </p>
              <ul className="ticks">
                <li>Understand what drivers actually do</li>
                <li>Fix common device and connectivity issues</li>
                <li>Clear explanations without technical jargon</li>
              </ul>
              <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                <div style={{ flex: 1, background: '#fff', padding: '24px', borderRadius: '14px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>100+</div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Guides</div>
                </div>
                <div style={{ flex: 1, background: '#fff', padding: '24px', borderRadius: '14px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>24/7</div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resources</div>
                </div>
                <div style={{ flex: 1, background: '#fff', padding: '24px', borderRadius: '14px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>Simple</div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explanations</div>
                </div>
              </div>
            </div>
            <div className="split-media">
              <Image
                src="/windows.webp"
                alt="The bridge between software and hardware"
                width={600}
                height={450}
                style={{ borderRadius: 'var(--radius-xl)' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where Do Drivers Live */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Locations</span>
            <h2>Where Do Drivers Actually Live on Your PC?</h2>
            <p>Spoiler: they're not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.</p>
          </div>
          <div className="grid grid-auto-3">
            <div className="card">
              <div className="card-icon">
                <ThemeIcon type="windows" size={44} />
              </div>
              <h3>Inside the Device Manager</h3>
              <p>This is the friendliest place to start on a Windows PC. Right-click the Start button and pick "Device Manager," and a tidy list of every piece of hardware on your machine appears — neatly grouped by category. Click any item and you can see its driver, check its version, update it, roll it back if a recent update caused trouble, or remove it entirely. It's like a backstage pass to the people running the show.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <ThemeIcon type="settings" size={44} />
              </div>
              <h3>Through Settings & Updates</h3>
              <p>On modern Windows systems, head to Settings, then Windows Update, then "Advanced options" and look for "Optional updates." Many driver updates quietly arrive here — already tested for your machine. On macOS, drivers are bundled into regular system updates, so just keep your OS current. On Linux, your distribution's package manager (or a built-in "Additional Drivers" tool) does the same job.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <ThemeIcon type="translator" size={44} />
              </div>
              <h3>The Hardware Maker's Website</h3>
              <p>Every reputable hardware maker keeps a "Support" or "Drivers" section on its official website where you can download the very latest driver for your exact model. This is the go-to spot when you need a brand-new feature, a performance boost, or a fix for a specific bug. Always download directly from the official site — never from a random pop-up — and double-check the driver matches your operating system version.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Know Which Driver */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Identification</span>
            <h2>How to Know Which Driver You're Actually Using</h2>
            <p>Curious which driver is in charge of your sound, your screen, or your network? It only takes a few clicks (or commands) to find out!</p>
          </div>
          <div className="grid grid-auto-3">
            <div className="card">
              <div style={{
                width: '100%',
                height: '160px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-soft)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '24px',
                padding: '5px',
                border: '1px solid rgba(37,99,235,0.1)'
              }}>
                <Image 
                  src="/windows.webp" 
                  alt="Windows logo" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ 
                    objectFit: 'contain',
                    padding: '5px'
                  }}
                  priority 
                />
              </div>
              <h3>On Windows</h3>
              <div style={{ textAlign: 'left' }}>
                <p style={{ marginBottom: '12px' }}><strong>Step 1:</strong> Press <code>Win + X</code> on your keyboard and select <strong>Device Manager</strong> from the menu (or right-click the Start button and choose Device Manager).</p>
                <p style={{ marginBottom: '12px' }}><strong>Step 2:</strong> Expand the category for your device (e.g., "Display adapters" for graphics, "Audio inputs and outputs" for sound, "Network adapters" for Wi-Fi).</p>
                <p style={{ marginBottom: '12px' }}><strong>Step 3:</strong> Right-click on your specific device (like "NVIDIA GeForce RTX 3080" or "Realtek Audio") and choose <strong>Properties</strong> from the context menu.</p>
                <p style={{ marginBottom: '12px' }}><strong>Step 4:</strong> Click on the <strong>Driver</strong> tab at the top of the Properties window. Here you'll see:</p>
                <ul style={{ listStyleType: 'disc', marginLeft: '24px', marginBottom: '12px', color: 'var(--text-body)' }}>
                  <li style={{ marginBottom: '6px' }}><strong>Driver Provider:</strong> Who made the driver (e.g., NVIDIA, Intel, Microsoft)</li>
                  <li style={{ marginBottom: '6px' }}><strong>Driver Date:</strong> When the driver was released</li>
                  <li style={{ marginBottom: '6px' }}><strong>Driver Version:</strong> The exact version number (great for troubleshooting!)</li>
                  <li style={{ marginBottom: '6px' }}><strong>Signer:</strong> Whether the driver is digitally signed</li>
                </ul>
                <p><strong>Pro tip:</strong> From this tab you can also update the driver, roll it back to a previous version, or uninstall it if needed!</p>
              </div>
            </div>
            <div className="card">
              <div style={{
                width: '100%',
                height: '160px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-soft)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '24px',
                padding: '5px',
                border: '1px solid rgba(37,99,235,0.1)'
              }}>
                <Image 
                  src="/mack.webp" 
                  alt="macOS logo" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ 
                    objectFit: 'contain',
                    padding: '5px'
                  }}
                  priority 
                />
              </div>
              <h3>On macOS</h3>
              <div style={{ textAlign: 'left' }}>
                <p style={{ marginBottom: '12px' }}><strong>Step 1:</strong> Click the Apple menu () in the top-left corner of your screen.</p>
                <p style={{ marginBottom: '12px' }}><strong>Step 2:</strong> Select <strong>About This Mac</strong> from the dropdown menu.</p>
                <p style={{ marginBottom: '12px' }}><strong>Step 3:</strong> A window will appear showing your macOS version. Click the <strong>More Info...</strong> button (on newer macOS versions, you may need to click "General" then "About" first).</p>
                <p style={{ marginBottom: '12px' }}><strong>Step 4:</strong> At the bottom of the About window, click <strong>System Report...</strong> (or "System Report" in newer versions).</p>
                <p style={{ marginBottom: '12px' }}><strong>Step 5:</strong> In the System Report window, use the left sidebar to find your device category:</p>
                <ul style={{ listStyleType: 'disc', marginLeft: '24px', marginBottom: '12px', color: 'var(--text-body)' }}>
                  <li style={{ marginBottom: '6px' }}><strong>Graphics/Displays:</strong> For your GPU (under "Hardware" → "Graphics/Displays")</li>
                  <li style={{ marginBottom: '6px' }}><strong>Audio:</strong> For sound drivers (under "Hardware" → "Audio")</li>
                  <li style={{ marginBottom: '6px' }}><strong>Network:</strong> For Wi-Fi/Ethernet (under "Network" → "Wi-Fi" or "Ethernet")</li>
                  <li style={{ marginBottom: '6px' }}><strong>USB:</strong> For USB devices (under "Hardware" → "USB")</li>
                </ul>
                <p><strong>Pro tip:</strong> macOS manages most drivers automatically through system updates, so you'll usually see driver info bundled with your hardware details!</p>
              </div>
            </div>
            <div className="card">
              <div style={{
                width: '100%',
                height: '160px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-soft)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '24px',
                padding: '5px',
                border: '1px solid rgba(37,99,235,0.1)'
              }}>
                <Image 
                  src="/linux.webp" 
                  alt="Linux logo" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ 
                    objectFit: 'contain',
                    padding: '5px'
                  }}
                  priority 
                />
              </div>
              <h3>On Linux</h3>
              <div style={{ textAlign: 'left' }}>
                <p style={{ marginBottom: '12px' }}>Linux gives you powerful terminal commands to inspect your hardware and drivers. Open your terminal (Ctrl+Alt+T on most distros) and try these:</p>
                <p style={{ marginBottom: '12px' }}><strong>1. List PCI devices and their drivers:</strong></p>
                <pre style={{ 
                  background: 'var(--bg-light)', 
                  padding: '5px 5px', 
                  borderRadius: '8px', 
                  fontSize: '0.9rem', 
                  marginBottom: '12px',
                  overflowX: 'auto'
                }}><code>lspci -k</code></pre>
                <p style={{ marginBottom: '12px' }}>This shows all PCI devices (like your GPU, network card, etc.) and which kernel driver is in use for each one. Look for "Kernel driver in use:" lines!</p>
                <p style={{ marginBottom: '12px' }}><strong>2. List USB devices:</strong></p>
                <pre style={{ 
                  background: 'var(--bg-light)', 
                  padding: '5px 5px', 
                  borderRadius: '8px', 
                  fontSize: '0.9rem', 
                  marginBottom: '12px',
                  overflowX: 'auto'
                }}><code>lsusb</code></pre>
                <p style={{ marginBottom: '12px' }}>This gives details about all connected USB devices.</p>
                <p style={{ marginBottom: '12px' }}><strong>3. List loaded kernel modules:</strong></p>
                <pre style={{ 
                  background: 'var(--bg-light)', 
                  padding: '5px 5px', 
                  borderRadius: '8px', 
                  fontSize: '0.9rem', 
                  marginBottom: '12px',
                  overflowX: 'auto'
                }}><code>lsmod</code></pre>
                <p style={{ marginBottom: '12px' }}>This shows all currently loaded driver modules.</p>
                <p style={{ marginBottom: '12px' }}><strong>4. Get detailed system info:</strong></p>
                <pre style={{ 
                  background: 'var(--bg-light)', 
                  padding: '5px 8px', 
                  borderRadius: '8px', 
                  fontSize: '0.9rem', 
                  overflowX: 'auto'
                }}><code>sudo lshw</code></pre>
                <p><strong>Pro tip:</strong> For a more user-friendly experience, many Linux distros also have GUI tools like "System Settings" → "About" or "Hardinfo" (install it with your package manager if needed)!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Troubleshooting</span>
            <h2>Common Driver-Related Problems</h2>
            <p>Understanding these common driver issues helps in diagnosing and resolving hardware and software problems.</p>
          </div>
          <div className="grid grid-auto-2">
            {commonProblems.map((problem, i) => (
              <div key={i} className="card">
                <h3>{problem.title}</h3>
                <p>{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pick a Hardware Category */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Helpful Topics We Cover</span>
            <h2>Pick a Hardware Category and Dive In</h2>
            <p>Each overview is bite-sized, friendly, and written to make sense the very first time you read it.</p>
          </div>
          <div className="grid grid-auto-3">
            {quickCategories.map((cat, i) => (
              <Link key={i} href={`/drivers/${cat.id}/`} className="card">
                <div className="card-icon">
                  <ThemeIcon type={cat.icon} size={44} />
                </div>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <div className="more">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '6px' }}>
                    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About PrintSoftDrive */}
      <section className="block">
        <div className="container">
          <div className="cta-band">
            <span className="section-kicker" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)' }}>About PrintSoftDrive</span>
            <h2 style={{ color: '#fff', marginBottom: '16px' }}>A Friendly Voice in a Noisy Tech World</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 32px' }}>
              We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it.
            </p>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              maxWidth: '600px', 
              margin: '0 auto 32px',
              textAlign: 'left',
              color: 'rgba(255,255,255,0.8)'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>✓</span>
                <span>Independent and free to read, always</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>✓</span>
                <span>Plain-English first, technical accuracy second to none</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>✓</span>
                <span>Privacy-respecting — no aggressive trackers or sold data</span>
              </li>
            </ul>
            <Link href="/about" className="btn btn-ghost-white">
              Read More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Understand Every Type of Driver */}
      <section className="block" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Deep Dive</span>
            <h2>Understand Every Type of Driver</h2>
            <p>Explore the different kinds of drivers that make your hardware work.</p>
          </div>
          <div className="grid grid-auto-3">
            {driverTypes.map((type, i) => (
              <Link key={i} href={type.link} className="card">
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
                <div className="more">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '6px' }}>
                    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
