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
      {/* ── Hero Sub ── */}
      <section className="hero-sub" aria-label="Driver Blog Hero">
        {/* <div className="hero-sub-floats" aria-hidden="true">
          <div className="hero-sub-float hero-sub-float-1">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div><span>Articles</span><small>Bite-sized</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-2">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div><span>5–9 min</span><small>Average read</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-3">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div><span>Beginner</span><small>Friendly</small></div>
          </div>
          <div className="hero-sub-float hero-sub-float-4">
            <div className="hero-sub-float-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="m8 12 3 3 5-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div><span>0 jargon</span><small>Walls</small></div>
          </div>
        </div> */}

        <div className="hero-sub-inner animate-fade-in">
          <span className="hero-sub-tag"><span className="hero-sub-tag-dot"></span> The Driver Blog</span>
          <h1 className="home-hero-title">Friendly, Useful Reads About <span className="accent">How Your Computer Actually Works</span></h1>
          <p className="hero-sub-sub">Plain-English articles, calm knowledge, and the occasional &ldquo;wait, that is what it does?&rdquo; moment. New posts every fortnight, all written by humans who genuinely enjoy this stuff.</p>
          <div className="hero-sub-actions">
            <a href="#latest" className="btn btn-primary">
              <span>Browse Latest Articles</span>
            </a>
            <Link href="/knowledge/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              <span>Need a Quick Fix?</span>
            </Link>
          </div>
          <div className="hero-sub-bread">
            <Link href="/">Home</Link> &rsaquo; <span>Blog</span>
          </div>
        </div>
      </section>

      {/* ── Featured Post (Magazine-Style) ── */}
      <section className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <span className="section-kicker">Editor&apos;s Pick</span>
            <h2 style={{ fontSize: '2rem' }}>This Week&apos;s Featured Read</h2>
          </div>

          <div className="blog-mag-hero">
            <div className="blog-mag-hero-img">
              <Image 
                src={featured.image} 
                alt={featured.title} 
                fill
              />
              <span className="blog-tag">Featured · Beginner</span>
            </div>
            <div>
              <div className="post-meta">
                <span className="post-read">{featured.readTime} read</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)', margin: '0 0 14px', lineHeight: 1.2, color: 'var(--text-main)' }}>
                {featured.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                {featured.desc}
              </p>
              <Link href={`/blog/${featured.slug}/`} className="btn btn-primary" style={{ marginTop: '12px' }}>
                Read the Full Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Articles Grid ── */}
      <section id="latest" className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Latest Articles</span>
            <h2>Fresh Reads From the Driver Blog</h2>
            <p>Bite-sized, friendly, and always written by humans who genuinely enjoy this stuff.</p>
          </div>

          <div className="blog-grid-modern">
            {rest.map(post => (
              <article key={post.slug} className="blog-card-modern">
                <Link href={`/blog/${post.slug}/`} className="blog-card-link">
                  <div className="blog-card-modern-img">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                    />
                    <span className="blog-card-tag">{post.tag}</span>
                  </div>
                  <div className="blog-card-modern-body">
                    <div className="post-meta">
                      <span className="post-read">{post.readTime} read</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <span className="text-link">Read more &rarr;</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter / CTA ── */}
      <section className="block">
        <div className="container">
          <div className="cta-card">
            <h2>Want a Topic Covered?</h2>
            <p>Drop us a line with a question, a confused symptom, or a topic you wish someone would just explain plainly. PrintSoftDrive picks reader questions for new articles all the time.</p>
            <div className="cta-actions">
              <Link href="/contact/" className="btn btn-primary" style={{ background: '#fff', color: 'var(--navy)' }}>Suggest a Topic</Link>
              <Link href="/knowledge/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Need Help Right Now?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
