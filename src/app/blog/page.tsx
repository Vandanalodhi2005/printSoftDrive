import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Driver Blog — Friendly, Useful Reads | PrintSoftDrive',
  description: 'Plain-English articles, calm knowledge, and practical driver guides. Written for curious users who want answers without the technical jargon.',
}

const posts = [
  {
    slug: 'what-is-a-driver',
    tag: 'Beginner',
    tagColor: '#16A34A',
    date: 'June 10, 2024',
    readTime: '5 min',
    title: 'What Is a Driver, Really? A Five-Minute Friendly Explainer',
    desc: 'Forget the jargon — a driver is just a translator between your computer and the hardware connected to it. This piece starts with the core idea and works outward.',
    image: '/assets/images/home-translator.svg',
  },
  {
    slug: 'printer-driver-basics',
    tag: 'Printer Drivers',
    tagColor: '#2563EB',
    date: 'June 1, 2024',
    readTime: '5 min',
    title: 'Understanding Printer Driver Basics',
    desc: 'Learn the fundamentals of printer drivers and how they work to connect your computer with printing devices.',
    image: '/assets/images/printer-what.svg',
  },
  {
    slug: 'driver-installation-guide',
    tag: 'Installation',
    tagColor: '#059669',
    date: 'May 28, 2024',
    readTime: '8 min',
    title: 'Step-by-Step Driver Installation Guide',
    desc: 'A comprehensive walkthrough on how to properly install and configure printer drivers on Windows and Mac systems.',
    image: '/assets/images/system-fix.svg',
  },
  {
    slug: 'troubleshooting-common-issues',
    tag: 'Troubleshooting',
    tagColor: '#DC2626',
    date: 'May 20, 2024',
    readTime: '6 min',
    title: 'Common Printer Issues and Solutions',
    desc: 'Discover quick fixes for the most common printer problems and when you need to update your drivers.',
    image: '/assets/images/printer-fix.svg',
  },
  {
    slug: 'inside-a-graphics-driver-update',
    tag: 'Graphics',
    tagColor: '#7C3AED',
    date: 'May 10, 2024',
    readTime: '9 min',
    title: 'Inside a Graphics Driver Update: What Actually Changes',
    desc: "A \"minor\" graphics driver update can deliver double-digit performance gains. Here's what really happens under the hood.",
    image: '/assets/images/graphics-what.svg',
  },
  {
    slug: 'audio-drivers-and-sound-quality',
    tag: 'Audio',
    tagColor: '#D97706',
    date: 'May 5, 2024',
    readTime: '7 min',
    title: 'The Hidden World of Audio Drivers: Why Sound Quality Is Mostly Software',
    desc: 'Two laptops with the same speakers can sound completely different. The reason is rarely the hardware.',
    image: '/assets/images/audio-what.svg',
  },
  {
    slug: 'why-your-wifi-is-slower',
    tag: 'Networking',
    tagColor: '#0891B2',
    date: 'April 28, 2024',
    readTime: '6 min',
    title: "Why Your Wi-Fi Is Slower Than Your Roommate's on the Same Router",
    desc: "You're on the same router, in the same room. So why is your Wi-Fi slower? Three letters, almost always.",
    image: '/assets/images/network-what.svg',
  },
]

const [featured, ...rest] = posts

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
            <h1>Friendly, Useful Reads About<br />
              <span style={{ color: 'var(--primary)' }}>How Your Computer Actually Works</span>
            </h1>
            <p className="hero-lede">
              Plain-English articles, calm knowledge, and the occasional &ldquo;wait, that&rsquo;s what it does?&rdquo; moment.
              Written for curious users who want practical answers without getting buried in technical jargon.
            </p>
            <div className="hero-actions">
              <a href="#articles" className="btn btn-primary">Browse Latest Articles</a>
              <Link href="/knowledge/" className="btn btn-outline">Need a Quick Fix?</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you'll find ── */}
      <section className="blog-find-section">
        <div className="container">
          <div className="blog-intro-grid">
            <div>
              <h3 className="blog-find-heading">What You&apos;ll Find</h3>
              <p className="blog-find-sub">Helpful reads for everyday users</p>
              <ul className="blog-find-list">
                {[
                  'Driver installation and update guides',
                  'Computer hardware explained simply',
                  'Troubleshooting tips and practical fixes',
                  'Technology concepts without the jargon',
                ].map(item => (
                  <li key={item} className="blog-find-item">
                    <span className="blog-find-check" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="blog-intro-badge-card">
              <span className="blog-new-pill">NEW ARTICLES ADDED REGULARLY</span>
              <p className="blog-badge-title">Learn Something Useful Today</p>
              <p className="blog-badge-desc">Short reads, practical explanations, and helpful technology insights for everyday users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured (Editor's Pick) ── */}
      <section className="block">
        <div className="container">
          <div className="blog-section-label">
            <span className="section-kicker">Editor&apos;s Pick</span>
            <h2>This Week&apos;s Featured Read</h2>
          </div>

          {/* Software → Driver → Hardware diagram */}
          <div className="blog-diagram" aria-hidden="true">
            <div className="bd-box bd-software">Software</div>
            <svg className="bd-arrow" width="36" height="20" viewBox="0 0 36 20" fill="none">
              <path d="M0 10h32M26 4l6 6-6 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="bd-box bd-driver">Driver</div>
            <svg className="bd-arrow" width="36" height="20" viewBox="0 0 36 20" fill="none">
              <path d="M0 10h32M26 4l6 6-6 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="bd-box bd-hardware">Hardware</div>
          </div>

          {/* Featured card — the entire card is a link */}
          <Link href={`/blog/${featured.slug}/`} className="blog-featured-card">
            <div className="bfc-media">
              <div className="bfc-badges">
                <span className="bfc-badge bfc-badge-green">Beginner</span>
                <span className="bfc-badge bfc-badge-blue">5 Minute Read</span>
              </div>
              <Image
                src={featured.image}
                alt={featured.title}
                width={480}
                height={360}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '28px' }}
              />
            </div>
            <div className="bfc-body">
              <div className="bfc-meta">
                <span className="bfc-tag">Beginner</span>
                <span className="bfc-time">5 min read · Featured</span>
              </div>
              <h2 className="bfc-title">{featured.title}</h2>
              <p className="bfc-desc">{featured.desc}</p>
              <span className="bfc-cta">
                Read the Full Article
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Latest articles grid ── */}
      <section className="block" id="articles" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Latest Articles</span>
            <h2>Fresh Reads From The Driver Blog</h2>
            <p>Bite-sized, friendly, and always written by humans who enjoy this stuff.</p>
          </div>

          <div className="blog-grid">
            {rest.map(post => (
              /* Each card is a full <Link> so every pixel is clickable */
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="blog-post-card">
                <div className="bpc-thumb">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'contain', padding: '20px' }}
                  />
                  <span className="bpc-tag" style={{ background: post.tagColor }}>{post.tag}</span>
                </div>
                <div className="bpc-body">
                  <div className="bpc-meta">
                    <span className="bpc-source">PrintSoftDrive</span>
                    <span className="bpc-sep">·</span>
                    <span className="bpc-time">{post.readTime} read</span>
                  </div>
                  <p className="bpc-title">{post.title}</p>
                  <p className="bpc-desc">{post.desc}</p>
                  <span className="bpc-read">
                    Read the article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reader requests CTA ── */}
      <section className="block">
        <div className="container">
          <div className="blog-reader-grid">
            <div>
              <span className="section-kicker">Reader Requests</span>
              <h2 style={{ marginBottom: '20px' }}>Want a Topic<br />Covered?</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '32px' }}>
                Drop us a line with a question, a confused symptom, or a topic you wish someone
                would just explain plainly. We pick reader questions for new articles all the time.
              </p>
              <div className="hero-actions">
                <Link href="/contact/" className="btn btn-primary">Suggest a Topic</Link>
                <Link href="/knowledge/" className="btn btn-outline">Need Help Right Now?</Link>
              </div>
            </div>
            <div className="blog-reader-cards">
              <div className="brc-card">
                <div className="brc-icon">💬</div>
                <h4 className="brc-title">Reader Questions</h4>
                <p className="brc-desc">Many of our most popular articles started as a simple reader question.</p>
                <div className="brc-tags">
                  {['Driver Errors', 'Wi-Fi Issues', 'GPU Updates', 'Printer Problems'].map(t => (
                    <span key={t} className="brc-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="brc-card">
                <div className="brc-icon">📖</div>
                <h4 className="brc-title">Plain-English Answers</h4>
                <p className="brc-desc">We focus on practical explanations without the jargon, acronyms, or unnecessary complexity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
