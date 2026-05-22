import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Icon } from './Icon';

export function Layout({ children }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      </header>

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
    </div>
  );
}
