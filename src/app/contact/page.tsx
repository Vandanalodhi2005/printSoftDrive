import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact PrintSoftDrive — Questions & Topic Ideas",
  description: "Get in touch with PrintSoftDrive. We can't offer live tech support, but we love reader questions, article suggestions, and feedback. Reach us by email or form.",
}

export default function Contact() {
  return (
    <>
<section className="hero hero-wide theme-teal">
  <div className="container hero-inner">
    <span className="eyebrow"><span className="dot"></span>Get in touch</span>
    <h1>Have a Question or Topic Idea? We&apos;d Love to Hear It.</h1>
    <p className="hero-lede">PrintSoftDrive is an educational resource — we can&apos;t provide one-to-one technical support — but we genuinely love reader questions, content suggestions, and friendly notes. Drop us a line below.</p>
    <nav className="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-current="page">Contact</li></ol></nav>
  </div>
</section>
<section className="block"><div className="container"><div className="contact-grid">
  <form className="contact-form" action="mailto:hello@printsoftdriver.com" method="post" encType="text/plain" aria-label="Contact form">
    <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="topic">What&apos;s this about?</label>
      <select id="topic" name="topic">
        <option>A question about a driver topic</option>
        <option>A suggestion for an article</option>
        <option>A correction or feedback</option>
        <option>Something else</option>
      </select></div>
    <div className="field"><label htmlFor="message">Your message</label><textarea id="message" name="message" required></textarea></div>
    <button className="btn btn-primary" type="submit">Send message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
    <p style={{ fontSize: '.85rem', color: '#666', margin: '14px 0 0' }}>We aim to reply within 2–3 working days. We can&apos;t offer live troubleshooting, but we read every message.</p>
  </form>
  <aside className="info-card">
    <h3>Reach us directly</h3>
    <div className="info-row"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span><div><small>Email</small><a href="mailto:hello@printsoftdriver.com">hello@printsoftdriver.com</a></div></div>
    <div className="info-row"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><div><small>Response time</small>Within 2–3 working days</div></div>
  </aside>
</div></div></section>
<section className="block tight"><div className="container">
  <div className="section-head"><div className="section-kicker">Before you write</div><h2>A few quick answers</h2><p>The questions readers send us most.</p></div>
  <div className="faq"><details><summary>Can you fix my computer remotely?</summary><div className="faq-body"><p>No — we&apos;re an educational publisher, not a repair service. We can point you to the right overview and the right official source, but we can&apos;t access or change your machine.</p></div></details><details><summary>Will you cover a topic I suggest?</summary><div className="faq-body"><p>Quite possibly. Reader questions are where many of our articles come from. Send it over and tell us what&apos;s confusing you.</p></div></details><details><summary>Do you sell or share my contact details?</summary><div className="faq-body"><p>Never. We use what you send only to reply to you. See our Privacy Policy for the full picture.</p></div></details></div>
</div></section>
    </>
  )
}
