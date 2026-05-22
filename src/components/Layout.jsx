import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Icon } from './Icon';

export function Layout({ children }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <Link className="brand" to="/">Sun Management Services</Link>
        <nav className="nav" aria-label="Primary navigation">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
        <div className="top-actions">
          <a className="phone-link" href="tel:+919035551777">+91 9035551777</a>
          <Link className="callback-link" to="/contact">Request Callback</Link>
        </div>
        
        <button 
          className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link className="drawer-brand" to="/" onClick={() => setMobileMenuOpen(false)}>
            Sun Management
          </Link>
          <button 
            className="drawer-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <nav className="drawer-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="drawer-actions">
          <a className="drawer-phone" href="tel:+919035551777">
            <Icon name="phone" /> +91 9035551777
          </a>
          <Link className="drawer-callback" to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Request Callback
          </Link>
          <a className="drawer-whatsapp" href="https://wa.me/919035551777" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            WhatsApp Support
          </a>
        </div>
      </div>

      {children}

      <footer className="footer">
        <div>
          <h2>Sun Management Services</h2>
          <p>
            Recovering Value, Restoring Trust. Your professional partner in debt
            recovery and verification services.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Our Services</h3>
          <Link to="/services/debt-recovery">Collections & Debt Recovery</Link>
          <Link to="/services/emi-support">Personal Loan EMI Support</Link>
          <Link to="/services/payroll-compliance">Payroll Compliance</Link>
          <Link to="/services/financial-services">Financial Services</Link>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p><Icon name="phone" /> +91 9035551777</p>
          <p><Icon name="mail" /> lourdraj@gettipick.in</p>
        </div>
      </footer>
      <div className="copyright">
        <span>© 2007 Sun Management Services. Recovering Value, Restoring Trust.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Cookie Policy</span>
      </div>

      {/* Mobile Sticky Actions */}
      <div className="mobile-sticky-actions">
        <a className="mobile-sticky-btn whatsapp" href="https://wa.me/919035551777" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: '-3px'}}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          WhatsApp
        </a>
        <Link className="mobile-sticky-btn callback" to="/contact">
          Request Callback
        </Link>
      </div>

      {/* Floating WhatsApp Button for Tablet & Desktop */}
      <a className="floating-whatsapp-btn" href="https://wa.me/919035551777" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
}
