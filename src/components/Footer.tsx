import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-section bg-cover" style={{backgroundColor: '#000D44'}}>
        <div className="container">
            <div className="footer-widgets-wrapper pt-100 pb-70">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <Link href="/">
                                    <img src="/logo1.png" alt="PrintSoftDrive" style={{maxHeight: '60px'}} />
                                </Link>
                            </div>
                            <div className="footer-content">
                                <p>
                                    Your friendly, plain-English overview of the world of device drivers. We translate the technical so you can spend more time using your computer and less time fighting it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Site Links</h3>
                            </div>
                            <ul className="list-area">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about/">About Us</Link></li>
                                <li><Link href="/blog/">Blog</Link></li>
                                <li><Link href="/knowledge/">Knowledge</Link></li>
                                <li><Link href="/contact/">Contact</Link></li>
                                <li><Link href="/site-map/">Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Driver Overviews</h3>
                            </div>
                            <ul className="list-area">
                                <li><Link href="/drivers/printer/">Printer Drivers</Link></li>
                                <li><Link href="/drivers/scanner/">Scanner Drivers</Link></li>
                                <li><Link href="/drivers/graphics/">Graphics Drivers</Link></li>
                                <li><Link href="/drivers/audio/">Audio Drivers</Link></li>
                                <li><Link href="/drivers/network/">Wi-Fi &amp; Network</Link></li>
                                <li><Link href="/drivers/bluetooth/">Bluetooth Drivers</Link></li>
                                <li><Link href="/drivers/usb/">USB Drivers</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Legal</h3>
                            </div>
                            <ul className="list-area">
                                <li><Link href="/privacy/">Privacy Policy</Link></li>
                                <li><Link href="/terms/">Terms of Use</Link></li>
                                <li><Link href="/disclaimer/">Disclaimer</Link></li>
                                <li><Link href="/cookies/">Cookie Policy</Link></li>
                                <li><Link href="/advertising-disclosure/">Advertising Disclosure</Link></li>
                                <li><Link href="/accessibility/">Accessibility</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-wrapper d-flex align-items-center justify-content-between">
                    <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                        © 2026 PrintSoftDrive. All rights reserved.
                    </p>
                    <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                        <li><Link href="/privacy/">Privacy Policy</Link></li>
                        <li><Link href="/terms/">Terms of Use</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
