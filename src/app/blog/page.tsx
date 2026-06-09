import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Driver Blog — How Your Computer Actually Works | PrintSoftDrive',
  description: 'Plain-English articles and friendly explainers about device drivers and how your computer really works underneath.',
}

const posts = [
  { slug: 'inside-a-graphics-driver-update',  tag: 'Graphics',     readTime: '9 min', title: 'Inside a Graphics Driver Update: What Actually Changes',                               desc: 'A "minor" graphics driver update can deliver double-digit performance gains in a brand-new game.',                            image: '/assets/images/graphics-what.svg' },
  { slug: 'audio-drivers-and-sound-quality',   tag: 'Audio',        readTime: '7 min', title: 'The Hidden World of Audio Drivers: Why Sound Quality Is Mostly Software',              desc: 'Two laptops with the same speakers can sound completely different. The reason is rarely the hardware.',                       image: '/assets/images/audio-what.svg' },
  { slug: 'why-your-wifi-is-slower',           tag: 'Networking',   readTime: '6 min', title: "Why Your Wi-Fi Is Slower Than Your Roommate's on the Same Router",                    desc: "You're on the same router, in the same room. So why is your Wi-Fi slower? Three letters, almost always.",                    image: '/assets/images/network-what.svg' },
  { slug: 'plug-and-play-demystified',         tag: 'USB',          readTime: '7 min', title: 'Plug-and-Play, Demystified: How Your PC Knows What You Just Connected',               desc: 'Plug in a USB device and a notification slides up within a second. Here is the quiet choreography.',                         image: '/assets/images/usb-what.svg' },
  { slug: 'the-quiet-chipset-driver',          tag: 'System',       readTime: '8 min', title: 'The Quiet Importance of the Chipset Driver Nobody Talks About',                       desc: 'The chipset driver is the single most foundational piece of software on your PC.',                                           image: '/assets/images/system-what.svg' },
  { slug: 'kernel-mode-vs-user-mode',          tag: 'Architecture', readTime: '8 min', title: 'Kernel-Mode vs User-Mode: Why Some Drivers Live Closer to the Metal',                 desc: 'Some drivers run with deep system access; others are safely sandboxed.',                                                     image: '/assets/images/architecture.svg' },
]

export default function Blog() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Blog</li>
              </ol>
            </nav>
            <span className="section-kicker">The Driver Blog</span>
            <h1>Demystifying the<br /><span style={{ color: 'var(--primary)' }}>World of Drivers</span></h1>
            <p className="hero-lede">
              Plain-English articles, calm knowledge, and friendly explainers about how your computer actually works underneath.
            </p>
            <div className="hero-actions">
              <a href="#latest" className="btn btn-primary">Read Latest Articles</a>
              <Link href="/knowledge/" className="btn btn-outline">Troubleshooting Hub</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="block">
        <div className="container">
          <div className="section-head" style={{ marginBottom: '36px' }}>
            <span className="section-kicker">Featured Article</span>
          </div>
          <Link href="/blog/what-is-a-driver/" className="card featured-post-card">
            <div className="featured-media">
              <Image
                src="/assets/images/home-translator.svg"
                alt="What is a driver"
                fill
                className="featured-image"
                style={{ objectFit: 'contain', padding: '32px' }}
              />
            </div>
            <div className="featured-content">
              <span className="post-meta">5 min read · Beginner</span>
              <h2>What Is a Driver, Really? A Five-Minute Friendly Explainer</h2>
              <p>Forget the jargon — a driver is just a translator between your computer and the hardware connected to it. This piece starts with the core idea and works outward.</p>
              <span className="btn btn-primary" style={{ width: 'fit-content', marginTop: 'auto' }}>
                Read Full Article
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Latest Posts ── */}
      <section className="block" id="latest" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Latest Articles</span>
            <h2>Fresh Reads from the Driver Blog</h2>
          </div>
          <div className="grid grid-auto-3">
            {posts.map(post => (
              <article key={post.slug} className="card post-card">
                <div className="post-thumb">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'contain', padding: '20px' }}
                  />
                  <span className="post-tag">{post.tag}</span>
                </div>
                <div className="post-content">
                  <div className="post-meta">{post.readTime} read</div>
                  <h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3>
                  <p style={{ fontSize: '0.92rem', flexGrow: 1 }}>{post.desc}</p>
                  <Link href={`/blog/${post.slug}/`} className="more" style={{ marginTop: 'auto' }}>
                    Read Article
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <span className="section-kicker" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)' }}>Stay Connected</span>
            <h2>Have a Question?</h2>
            <p>Suggest a topic you'd like us to explain plainly. We love hearing from our readers!</p>
            <div className="cta-actions">
              <Link href="/contact/" className="btn btn-primary">Suggest a Topic</Link>
              <Link href="/drivers/" className="btn btn-ghost-white">Browse All Drivers</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
