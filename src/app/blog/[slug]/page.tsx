import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

/* ============================================================
   ARTICLE DATA — all content from reference site + existing
   ============================================================ */
const posts: Record<string, {
  title: string
  tag: string
  tagColor: string
  date: string
  readTime: string
  desc: string
  sections: { heading: string; body: string }[]
  related: { slug: string; tag: string; title: string; readTime: string }[]
}> = {

  /* ── 1 ── */
  'what-is-a-driver': {
    title: 'What Is a Driver, Really? A Five-Minute Friendly Explainer',
    tag: 'Beginner',
    tagColor: '#16A34A',
    date: 'June 10, 2024',
    readTime: '5 min',
    desc: 'Forget the jargon — a driver is just a translator between your computer and the hardware connected to it.',
    sections: [
      {
        heading: 'The Simple Idea Behind Every Driver',
        body: 'Your software speaks one language, your hardware speaks another, and drivers connect the two. That is the entire concept. Everything else — kernel mode, device stacks, INF files — is just detail built on top of that single idea. Once it clicks, every driver problem you ever encounter becomes easier to think about.',
      },
      {
        heading: 'What a Driver Actually Does',
        body: 'When you click Print, your word processor sends a fairly generic instruction: "print this document." It has no idea whether you own a laser printer or an inkjet, whether it is connected by USB or Wi-Fi, or whether it prints in colour. The driver knows all of those things. It takes that generic instruction, reformats it into the exact command set the printer understands, and sends it down the wire. The same pattern applies to every piece of hardware on your machine — your graphics card, your audio chip, your Wi-Fi adapter. Each one has a driver doing this translation work continuously in the background.',
      },
      {
        heading: 'Why Drivers Sometimes Break',
        body: 'Drivers break for a handful of predictable reasons. An operating system update can change the rules the driver was written to follow. A new version of the driver itself can conflict with something left behind by the old one. Hardware can behave unexpectedly after a long sleep. In almost every case the fix follows the same pattern: clear out anything old, install the current official version from the hardware maker, and restart. That routine solves the majority of driver complaints you will ever encounter.',
      },
      {
        heading: 'Where to Get the Right Driver',
        body: 'The safest source for any driver is always the hardware manufacturer\'s official support page. Search for your exact model, select your operating system version, and download the full package they offer. Your operating system\'s built-in update tool is the second-best option and covers most common hardware automatically. Avoid third-party "driver updater" apps — they add unnecessary software and occasionally install the wrong driver for your hardware.',
      },
    ],
    related: [
      { slug: 'printer-driver-basics',       tag: 'Printer Drivers', title: 'Understanding Printer Driver Basics',         readTime: '5 min' },
      { slug: 'driver-installation-guide',   tag: 'Installation',    title: 'Step-by-Step Driver Installation Guide',      readTime: '8 min' },
      { slug: 'troubleshooting-common-issues', tag: 'Troubleshooting', title: 'Common Printer Issues and Solutions',       readTime: '6 min' },
    ],
  },

  /* ── 2 ── */
  'printer-driver-basics': {
    title: 'Understanding Printer Driver Basics',
    tag: 'Printer Drivers',
    tagColor: '#2563EB',
    date: 'June 1, 2024',
    readTime: '5 min',
    desc: 'Learn the fundamentals of printer drivers and how they work to connect your computer with printing devices.',
    sections: [
      {
        heading: 'What is a Printer Driver?',
        body: 'A printer driver is software that acts as a translator between your operating system and your printer. It converts the instructions from your applications into commands that your printer can understand and execute. Without the correct driver, your computer has no way of knowing how to communicate with your specific printer model — what paper sizes it supports, how to set print quality, or how to manage the print queue.',
      },
      {
        heading: 'Why Drivers Matter',
        body: 'Without a proper driver, your printer cannot communicate with your computer. Drivers ensure that documents are formatted correctly and sent in a way your printer can process, resulting in accurate and efficient printing. The driver also exposes the printer\'s capabilities to your operating system — duplex printing, colour modes, tray selection, and ink-level reporting all flow through the driver layer. A generic or mismatched driver will often print but lose these finer controls.',
      },
      {
        heading: 'Getting Started',
        body: 'To get your printer working, you need to install the correct driver for your specific printer model and operating system. Most manufacturers provide drivers on their support websites, or you can use your operating system\'s built-in driver search feature. Always match the driver to your exact model number and your OS version — a driver for a similar but different model will often cause problems rather than solve them.',
      },
      {
        heading: 'Keeping Your Driver Up to Date',
        body: 'Printer manufacturers regularly release updated drivers to fix bugs, improve compatibility with new operating system versions, and occasionally add new features. Checking for updates once or twice a year is a sensible habit. If your printer starts behaving oddly after a Windows or macOS update, a fresh driver from the manufacturer\'s site is the first thing to try.',
      },
    ],
    related: [
      { slug: 'driver-installation-guide',     tag: 'Installation',    title: 'Step-by-Step Driver Installation Guide',  readTime: '8 min' },
      { slug: 'troubleshooting-common-issues',  tag: 'Troubleshooting', title: 'Common Printer Issues and Solutions',     readTime: '6 min' },
    ],
  },

  /* ── 3 ── */
  'driver-installation-guide': {
    title: 'Step-by-Step Driver Installation Guide',
    tag: 'Installation',
    tagColor: '#059669',
    date: 'May 28, 2024',
    readTime: '8 min',
    desc: 'A comprehensive walkthrough on how to properly install and configure printer drivers on Windows and Mac systems.',
    sections: [
      {
        heading: 'Finding Your Driver',
        body: 'Start by identifying your printer model — it is usually printed on a label on the front or bottom of the device. Visit the manufacturer\'s official support page and look for the Downloads or Drivers section. Select your operating system version carefully: Windows 10 and Windows 11 use different driver builds, and the same is true for different macOS releases. Download the full driver package rather than the minimal install, as the full package includes utilities that help with scanning on multifunction devices and ink-level monitoring.',
      },
      {
        heading: 'Windows Installation',
        body: 'Download the driver file, double-click to run the installer, and follow the on-screen prompts. Connect your printer via USB or network when the installer asks you to — not before. The installer will detect the printer and complete the configuration automatically. Once finished, go to Settings > Bluetooth & devices > Printers & scanners to confirm the printer appears and set it as your default if needed. Print a test page from the driver\'s own utility to verify everything is working before sending a real document.',
      },
      {
        heading: 'Mac Installation',
        body: 'Mac systems include drivers for many common printers through Apple\'s built-in IPP Everywhere and AirPrint support. Go to System Settings > Printers & Scanners, click the Add Printer button, and select your printer from the list. If your printer needs a specific driver for full functionality — especially for scanning — download the latest package from the manufacturer\'s site, install it, then add the printer through the same Printers & Scanners panel. The system will automatically use the manufacturer driver once it is installed.',
      },
      {
        heading: 'Verifying the Installation',
        body: 'After installing, always print a test page. Most drivers include a test page button in the printer\'s properties or preferences panel. If the test page prints correctly, your driver is working. If it prints blank, prints garbled characters, or does not print at all, the most likely cause is a mismatched driver version — return to the manufacturer\'s site, confirm you downloaded the correct model and OS version, and reinstall. Clear the print queue before reinstalling to avoid stuck jobs interfering with the new driver.',
      },
    ],
    related: [
      { slug: 'printer-driver-basics',          tag: 'Printer Drivers', title: 'Understanding Printer Driver Basics',     readTime: '5 min' },
      { slug: 'troubleshooting-common-issues',   tag: 'Troubleshooting', title: 'Common Printer Issues and Solutions',    readTime: '6 min' },
    ],
  },

  /* ── 4 ── */
  'troubleshooting-common-issues': {
    title: 'Common Printer Issues and Solutions',
    tag: 'Troubleshooting',
    tagColor: '#DC2626',
    date: 'May 20, 2024',
    readTime: '6 min',
    desc: 'Discover quick fixes for the most common printer problems and when you need to update your drivers.',
    sections: [
      {
        heading: 'Printer Not Detected',
        body: 'If your system cannot find your printer, first check the USB or network connection. For USB, try a different cable and a different port on your computer. For network printers, confirm that both the printer and the computer are on the same Wi-Fi network — some routers keep 2.4 GHz and 5 GHz devices on separate subnets that cannot see each other. Try reinstalling the driver and restarting both your computer and printer. Update your operating system to ensure compatibility with the driver version you are using.',
      },
      {
        heading: 'Print Quality Issues',
        body: 'Poor print quality often indicates outdated drivers or hardware problems. Update to the latest driver version from the manufacturer\'s site first — driver updates sometimes include improved colour profiles and rendering fixes. If quality is still poor after updating, clean the printer\'s print heads using the maintenance utility included with the driver. Check your paper quality settings in the print dialog and make sure you are not printing draft-quality output on a final document setting.',
      },
      {
        heading: 'Slow Printing',
        body: 'Slow printing can result from driver conflicts or excessive background processes. Update your drivers, clear the print queue, and close unnecessary applications to improve performance. On Windows, check that the print spooler service is running and not stuck. Large documents with embedded high-resolution images can also cause slowness — try reducing image resolution in your application before printing, or switch to printing in draft mode to test whether the driver is the bottleneck.',
      },
      {
        heading: 'Printer Shows Offline',
        body: 'A printer showing as Offline almost always means a temporary communication failure rather than a hardware fault. Power-cycle the printer — turn it completely off, wait 30 seconds, then turn it back on. Clear any stuck jobs in the print queue, then go to your printer settings and untick the "Use Printer Offline" option if it has been checked. On wireless printers, check that the printer\'s IP address has not changed — a dynamic IP lease renewal can break the connection. Reinstalling the driver with a fresh setup routine usually resolves persistent offline status.',
      },
    ],
    related: [
      { slug: 'printer-driver-basics',         tag: 'Printer Drivers', title: 'Understanding Printer Driver Basics',      readTime: '5 min' },
      { slug: 'driver-installation-guide',     tag: 'Installation',    title: 'Step-by-Step Driver Installation Guide',   readTime: '8 min' },
    ],
  },

  /* ── 5 ── */
  'inside-a-graphics-driver-update': {
    title: 'Inside a Graphics Driver Update: What Actually Changes',
    tag: 'Graphics',
    tagColor: '#7C3AED',
    date: 'May 10, 2024',
    readTime: '9 min',
    desc: 'A "minor" graphics driver update can deliver double-digit performance gains in a brand-new game.',
    sections: [
      {
        heading: 'More Than a Bug Fix',
        body: 'A graphics driver update labelled as minor can deliver double-digit performance gains in a brand-new game. This is because the driver is actually a massive piece of software that translates generic rendering instructions into the specific command language of your GPU hardware. Updating it is less like patching a small crack and more like giving the GPU a new and more efficient instruction manual.',
      },
      {
        heading: 'Game-Ready Optimisations',
        body: 'When a new game is released, GPU manufacturers work directly with the game developers to tune how the driver handles that title\'s specific rendering pipeline. This can involve better memory management for that game\'s asset streaming pattern, more efficient shader compilation, and sometimes even correcting rendering artefacts in the game\'s own code at the driver level. The result is that installing a driver released the same week as a big game launch can meaningfully improve performance compared to a driver that is just two months old.',
      },
      {
        heading: 'Stability and Bug Fixes',
        body: 'Beyond game optimisations, driver updates fix crashes, flickering, black screens, and multi-monitor bugs that accumulated since the previous release. If your system has been stable for months, updating aggressively is not always necessary. But if you are experiencing graphical glitches or game crashes, a driver update is the most important first step before anything else.',
      },
      {
        heading: 'How to Update Safely',
        body: 'Download the driver directly from NVIDIA, AMD, or Intel\'s official site for your exact GPU model. On Windows, a clean installation option removes all remnants of the old driver before installing the new one — always choose this when switching major versions. Restart your computer after installation. If the new driver causes problems, both NVIDIA and AMD allow you to roll back to the previous version through Device Manager or their own control panels.',
      },
    ],
    related: [
      { slug: 'printer-driver-basics',        tag: 'Printer Drivers', title: 'Understanding Printer Driver Basics',      readTime: '5 min' },
      { slug: 'troubleshooting-common-issues', tag: 'Troubleshooting', title: 'Common Printer Issues and Solutions',     readTime: '6 min' },
    ],
  },

  /* ── 6 ── */
  'audio-drivers-and-sound-quality': {
    title: 'The Hidden World of Audio Drivers: Why Sound Quality Is Mostly Software',
    tag: 'Audio',
    tagColor: '#D97706',
    date: 'May 5, 2024',
    readTime: '7 min',
    desc: 'Two laptops with the same speakers can sound completely different. The reason is rarely the hardware.',
    sections: [
      {
        heading: 'The Same Speakers, Different Results',
        body: 'Two laptops with identical speaker hardware can produce noticeably different audio quality. The difference almost always comes down to the audio driver and its accompanying digital signal processing. The raw audio chip converts digital signals to electrical ones, but everything that shapes the sound before that conversion — equalisation, dynamic range compression, spatial enhancement — lives in software.',
      },
      {
        heading: 'What Audio Drivers Actually Do',
        body: 'Modern audio drivers do a lot more than move sound from point A to point B. They include sophisticated digital signal processing that corrects for the physical limitations of small speakers: boosting bass frequencies that tiny drivers cannot reproduce naturally, applying frequency curves tuned to the specific cabinet design of a particular laptop model, and managing latency so that audio stays synchronised during video calls and recordings.',
      },
      {
        heading: 'Generic vs Manufacturer Drivers',
        body: 'When you install a generic audio driver — the one Windows selects automatically — you often lose all of those tuned optimisations. The sound becomes flat, thin, or quiet because the DSP profiles specific to your hardware are not loaded. Installing the official audio driver from your laptop or motherboard manufacturer restores them. This is why a fresh Windows install can make a laptop sound noticeably worse until the correct audio driver is put back.',
      },
      {
        heading: 'Fixing Common Audio Problems',
        body: 'Most audio problems follow one of three patterns: no sound at all, sound from the wrong device, or audio quality that has suddenly degraded. For no sound, check that the correct playback device is selected as default in your sound settings. For wrong-device routing, open the sound mixer and confirm each application\'s output. For quality issues, reinstall the manufacturer audio driver rather than the generic Windows one. A clean reinstall — uninstalling the current driver in Device Manager before installing the new one — clears corruption that an in-place update sometimes leaves behind.',
      },
    ],
    related: [
      { slug: 'driver-installation-guide',    tag: 'Installation',    title: 'Step-by-Step Driver Installation Guide',   readTime: '8 min' },
      { slug: 'troubleshooting-common-issues', tag: 'Troubleshooting', title: 'Common Printer Issues and Solutions',      readTime: '6 min' },
    ],
  },

  /* ── 7 ── */
  'why-your-wifi-is-slower': {
    title: "Why Your Wi-Fi Is Slower Than Your Roommate's on the Same Router",
    tag: 'Networking',
    tagColor: '#0891B2',
    date: 'April 28, 2024',
    readTime: '6 min',
    desc: "You're on the same router, in the same room. So why is your Wi-Fi slower?",
    sections: [
      {
        heading: 'The Same Router, Different Speeds',
        body: 'You are on the same router, in the same room, on the same plan. So why is your download speed a fraction of your neighbour\'s? The answer is almost always in your network driver, specifically in how it manages power.',
      },
      {
        heading: 'Power-Saving Is the Culprit',
        body: 'Windows tries to save battery life by reducing how aggressively the Wi-Fi adapter listens for incoming data. This setting — called power-saving mode or maximum power saving — increases latency and reduces throughput noticeably. The adapter wakes up, checks for data, and goes back to sleep on a cycle rather than listening continuously. On a laptop unplugged from the mains, this can halve effective speeds compared to another device with the same adapter running at full power.',
      },
      {
        heading: 'Fixing It in Device Manager',
        body: 'Open Device Manager, find your network adapter under Network Adapters, right-click and choose Properties, then go to the Power Management tab and uncheck "Allow the computer to turn off this device to save power." Also look for an Advanced tab and find settings labelled Power Saving Mode or Wireless Mode — set these to Maximum Performance. These two changes together typically restore full wireless speed without needing to replace any hardware.',
      },
      {
        heading: 'Updating the Driver',
        body: 'Ensuring you have the latest stable driver from the chip maker — Intel, Realtek, Qualcomm, or Broadcom depending on your adapter — can often double effective speeds compared to an outdated driver. Wi-Fi chip manufacturers regularly release driver updates that improve connection reliability and throughput. For laptops, check your laptop manufacturer\'s support page first, as they often release customised builds. For desktop Wi-Fi cards, the chip maker\'s site is usually the right source.',
      },
    ],
    related: [
      { slug: 'troubleshooting-common-issues', tag: 'Troubleshooting', title: 'Common Printer Issues and Solutions',     readTime: '6 min' },
      { slug: 'driver-installation-guide',     tag: 'Installation',    title: 'Step-by-Step Driver Installation Guide',  readTime: '8 min' },
    ],
  },
}

/* ── Metadata ── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Article | PrintSoftDrive' }
  return {
    title: `${post.title} | PrintSoftDrive`,
    description: post.desc,
  }
}

/* ── Static params ── */
export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

/* ── Page ── */
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog/">Blog</Link></li>
                <li aria-current="page">Article</li>
              </ol>
            </nav>

            <div className="art-hero-meta">
              <span className="art-tag" style={{ background: post.tagColor }}>{post.tag.toUpperCase()}</span>
              <span className="art-label">PrintSoftDrive</span>
              <span className="art-sep">·</span>
              <span className="art-label">Knowledge Article</span>
            </div>

            <h1 style={{ maxWidth: '820px', marginBottom: '20px' }}>{post.title}</h1>
            <p className="hero-lede" style={{ maxWidth: '680px', marginBottom: '24px' }}>{post.desc}</p>

            <div className="art-info-row">
              <span className="art-info-item">📅 {post.date}</span>
              <span className="art-info-item">⏱ {post.readTime} read</span>
              <span className="art-info-item">📝 Editorial Article</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two-col layout: article + sidebar ── */}
      <section className="block">
        <div className="container">
          <div className="art-layout">

            {/* Main article */}
            <article className="art-body">

              {/* Article heading */}
              <div className="art-lead-card">
                <span className="art-lead-tag">{post.tag}</span>
                <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', marginBottom: '10px' }}>{post.title}</h2>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>{post.desc}</p>
              </div>

              {/* Sections */}
              {post.sections.map((sec, i) => (
                <div key={i} className="art-section">
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                </div>
              ))}

              {/* Keep Reading */}
              <div className="art-related">
                <div className="art-related-header">
                  <span className="section-kicker" style={{ marginBottom: 0 }}>Keep Reading</span>
                  <h3 style={{ marginBottom: 0 }}>More Driver Knowledge</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.93rem' }}>
                    Continue exploring practical driver guides and beginner-friendly explanations.
                  </p>
                </div>
                <div className="art-related-list">
                  {post.related.map(r => (
                    <Link key={r.slug} href={`/blog/${r.slug}/`} className="art-related-card">
                      <div className="arc-meta">
                        <span className="arc-tag">{r.tag}</span>
                        <span className="arc-time">{r.readTime} read</span>
                      </div>
                      <p className="arc-title">{r.title}</p>
                      <span className="arc-cta">
                        Read Article →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="art-sidebar">
              <div className="sidebar-card">
                <h4 className="sidebar-title">Plain-English Reading</h4>
                <p className="sidebar-desc">Technical concepts explained clearly without unnecessary jargon.</p>
              </div>
              <div className="sidebar-card">
                <h4 className="sidebar-title">Practical Knowledge</h4>
                <p className="sidebar-desc">Understand how drivers work in the real world and what actually matters.</p>
              </div>
              <div className="sidebar-card">
                <h4 className="sidebar-title">PrintSoftDrive Editorial</h4>
                <p className="sidebar-desc">Researched and written to help everyday users build a better understanding of their devices.</p>
              </div>
              <div className="sidebar-card sidebar-card--time">
                <p className="sidebar-time-label">Reading Time</p>
                <p className="sidebar-time-val">{post.readTime} read</p>
              </div>
              <div className="sidebar-cta-card">
                <p style={{ fontWeight: 700, color: '#fff', marginBottom: '8px', fontSize: '1rem' }}>Need a quick fix?</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', marginBottom: '18px' }}>Browse our troubleshooting hub for step-by-step solutions.</p>
                <Link href="/knowledge/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '13.5px', padding: '10px 16px' }}>
                  Visit Knowledge Hub
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .art-hero-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .art-tag {
          color: #fff;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .art-label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .art-sep { color: var(--text-light); }

        .art-info-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .art-info-item {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
        }

        /* ── Two-col layout ── */
        .art-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 56px;
          align-items: flex-start;
        }

        /* ── Article body ── */
        .art-lead-card {
          background: var(--bg-light);
          border: 1px solid var(--border);
          border-left: 4px solid var(--primary);
          border-radius: 14px;
          padding: 28px 32px;
          margin-bottom: 40px;
        }
        .art-lead-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 10px;
        }

        .art-section {
          margin-bottom: 36px;
          padding-bottom: 36px;
          border-bottom: 1px solid var(--border);
        }
        .art-section:last-of-type { border-bottom: none; }

        .art-section h2 {
          font-size: 1.45rem;
          margin-bottom: 14px;
          color: var(--text-main);
        }
        .art-section p {
          font-size: 1.02rem;
          line-height: 1.8;
          color: var(--text-body);
          margin: 0;
        }

        /* ── Related ── */
        .art-related {
          margin-top: 48px;
          padding: 36px;
          background: var(--bg-light);
          border-radius: 20px;
          border: 1px solid var(--border);
        }
        .art-related-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }
        .art-related-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .art-related-card {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 20px;
          text-decoration: none !important;
          transition: border-color .2s, box-shadow .2s, transform .2s;
        }
        .art-related-card:hover {
          border-color: rgba(37,99,235,.25);
          box-shadow: 0 4px 16px rgba(37,99,235,.08);
          transform: translateX(4px);
        }
        .arc-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .arc-tag {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .07em;
          color: var(--primary);
          background: var(--primary-soft);
          border-radius: 999px;
          padding: 2px 10px;
        }
        .arc-time {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--text-light);
        }
        .arc-title {
          font-size: 0.97rem;
          font-weight: 700;
          color: var(--text-main) !important;
          margin: 0 !important;
          line-height: 1.4;
        }
        .arc-cta {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--primary) !important;
          margin-top: 2px;
        }

        /* ── Sidebar ── */
        .art-sidebar {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sidebar-card {
          background: var(--bg-light);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 20px 22px;
        }
        .sidebar-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 6px;
        }
        .sidebar-desc {
          font-size: 0.87rem;
          color: var(--text-muted);
          margin: 0 !important;
          line-height: 1.6;
        }
        .sidebar-card--time {
          background: var(--primary-soft);
          border-color: rgba(37,99,235,.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sidebar-time-label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: var(--primary);
          margin: 0 !important;
        }
        .sidebar-time-val {
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--primary);
          margin: 0 !important;
        }
        .sidebar-cta-card {
          background: linear-gradient(135deg, #0A0F1E 0%, #141B2D 100%);
          border-radius: 16px;
          padding: 24px;
        }

        @media (max-width: 960px) {
          .art-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .art-sidebar {
            position: static;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .sidebar-cta-card { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .art-sidebar { grid-template-columns: 1fr; }
          .art-related { padding: 24px; }
        }
      `}</style>
    </>
  )
}
