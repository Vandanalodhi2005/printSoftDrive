import Link from 'next/link'

export default function Header() {
  return (
    <>
      {/* Offcanvas Area Start */}
      <div className="fix-area">
          <div className="offcanvas__info">
              <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                      <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                          <div className="offcanvas__logo">
                              <Link href="/">
                                  <img src="/logo.png" alt="PrintSoftDrive" style={{maxHeight: '40px'}} />
                              </Link>
                          </div>
                          <div className="offcanvas__close">
                              <button>
                                  <i className="fas fa-times"></i>
                              </button>
                          </div>
                      </div>
                      <p className="text d-none d-xl-block">
                          Your friendly, plain-English overview of the world of device drivers. We translate the technical so you can spend more time using your computer and less time fighting it.
                      </p>
                      <div className="mobile-menu fix mb-3"></div>
                      <div className="offcanvas__contact">
                          <h4>Contact Info</h4>
                          <ul>
                              <li className="d-flex align-items-center">
                                  <div className="offcanvas__contact-icon mr-15">
                                      <i className="fal fa-envelope"></i>
                                  </div>
                                  <div className="offcanvas__contact-text">
                                      <a href="mailto:hello@printsoftdriver.com"><span className="mailto:hello@printsoftdriver.com">hello@printsoftdriver.com</span></a>
                                  </div>
                              </li>
                          </ul>
                          <Link href="/contact/" className="theme-btn mt-4">
                              Contact Us
                              <i className="fa-solid fa-arrow-up-right"></i>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* Header Section Start */}
      <header className="header-section">
          <div id="header-sticky" className="header-1">
              <div className="container">
                  <div className="mega-menu-wrapper">
                      <div className="header-main">
                          <div className="header-left">
                              <Link href="/" className="logo">
                                  <img src="/logo.png" alt="PrintSoftDrive" style={{maxHeight: '50px'}} />
                              </Link>
                              <div className="mean__menu-wrapper">
                                  <div className="main-menu">
                                      <nav id="mobile-menu">
                                          <ul>
                                              <li><Link href="/">Home</Link></li>
                                              <li><Link href="/drivers/">All Drivers</Link></li>
                                              <li><Link href="/knowledge/">Knowledge Base</Link></li>
                                              <li><Link href="/blog/">Blog</Link></li>
                                              <li><Link href="/about/">About Us</Link></li>
                                              <li><Link href="/contact/">Contact</Link></li>
                                          </ul>
                                      </nav>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="header-right d-flex justify-content-end align-items-center">
                              <Link href="/knowledge/" className="theme-btn">
                                  Troubleshooting
                                  <i className="fa-solid fa-arrow-up-right"></i>
                              </Link>
                              <div className="header__hamburger d-xl-none my-auto">
                                  <div className="sidebar__toggle">
                                      <i className="fa-regular fa-bars"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </>
  )
}
