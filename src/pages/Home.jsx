import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Wallet, 
  Briefcase, 
  FileCheck, 
  Scale, 
  Eye, 
  PhoneCall, 
  CheckCircle2, 
  MapPin, 
  Mail,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Home.css';

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="badge-text reveal-fade-up">SUN MANAGEMENT SERVICES</div>
          <h1 className="reveal-fade-up" style={{transitionDelay: '0.1s'}}>
            Professional Recovery,<br/>
            Financial & <span className="text-gold">Compliance</span><br/>
            <span className="text-gold">Solutions</span>
          </h1>
          <p className="reveal-fade-up" style={{transitionDelay: '0.2s'}}>
            Empowering financial institutions with ethical, efficient, and data-driven
            recovery practices. Your trusted partner in sustainable business
            statutory compliance.
          </p>
          <div className="hero-actions reveal-fade-up" style={{transitionDelay: '0.3s'}}>
            <a href="#contact" className="btn-primary">Request Callback</a>
            <a href="#services" className="btn-outline">Explore Partnership</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="image-container reveal-scale-in premium-float">
            {/* Placeholder for modern office image */}
            <div className="placeholder-image office-bg"></div>
            <div className="years-badge reveal-fade-in" style={{transitionDelay: '0.4s'}}>
              <span className="years-icon"><CheckCircle2 size={24} /></span>
              <div>
                <strong>15+ Years</strong>
                <span>Of Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Row */}
      <section className="features-row reveal-stagger">
        <div className="feature-card">
          <ShieldCheck className="feature-icon" size={24} />
          <div>
            <strong>Recovery Insight</strong>
            <span>Data-driven strategies</span>
          </div>
        </div>
        <div className="feature-card">
          <Scale className="feature-icon" size={24} />
          <div>
            <strong>Ethical Standards</strong>
            <span>RBI compliant practices</span>
          </div>
        </div>
        <div className="feature-card">
          <FileText className="feature-icon" size={24} />
          <div>
            <strong>Data Security</strong>
            <span>Secure information handling</span>
          </div>
        </div>
        <div className="feature-card">
          <Building2 className="feature-icon" size={24} />
          <div>
            <strong>Digital Excellence</strong>
            <span>Seamless integration</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services" id="services">
        <div className="section-header reveal-fade-up">
          <span className="sub-heading">WHAT WE OFFER</span>
          <h2>Our Core Services</h2>
        </div>
        
        <div className="services-grid reveal-stagger">
          <div className="service-card">
            <div className="service-icon-wrapper"><Wallet size={28} /></div>
            <h3>Collections & Debt Recovery</h3>
            <p>Efficient B2B & B2C recovery strategies designed for maximum retention.</p>
            <Link to="/services/debt-recovery" className="view-details">View Details &gt;</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper"><Briefcase size={28} /></div>
            <h3>Personal Loan EMI Support</h3>
            <p>Proactive resolution services to manage retail EMI defaults efficiently.</p>
            <Link to="/services/emi-support" className="view-details">View Details &gt;</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper"><FileCheck size={28} /></div>
            <h3>Payroll Compliance</h3>
            <p>End-to-end statutory compliance (PF, ESI, etc.) outsourcing for all industries.</p>
            <Link to="/services/payroll-compliance" className="view-details">View Details &gt;</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper"><TrendingUp size={28} /></div>
            <h3>Financial Services</h3>
            <p>Investment planning, insurance, and long-term wealth coordination.</p>
            <Link to="/services/financial-services" className="view-details">View Details &gt;</Link>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="process-section">
        <h2 className="reveal-fade-up">Our 4-Step Process</h2>
        
        <div className="process-timeline reveal-stagger">
          <div className="step">
            <div className="step-number">01</div>
            <h4>Assessment</h4>
            <p>Initial review of the portfolio and financial status.</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h4>Coordination</h4>
            <p>Effective planning and strategic communication.</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h4>Resolution</h4>
            <p>Negotiation for sustainable debt settlement.</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <h4>Support</h4>
            <p>Post-resolution legal compliance support.</p>
          </div>
        </div>

        <div className="process-split reveal-fade-up">
          <div className="process-image">
            <div className="placeholder-image meeting-bg">
              <div className="image-overlay-text">
                "Working intelligently to preserve your business relationships while managing your financial recoveries."
              </div>
            </div>
          </div>
          <div className="process-content">
            <span className="sub-heading">BUILD TRUST</span>
            <h2>Recovering Value, Building Trust</h2>
            <p>
              In a challenging environment where every company aims to fortify its financial resources,
              we utilize our deep industry expertise and ethical recovery methodologies. We work
              closely with your team to minimize default risks, enhance your bottom line and ensure
              your business operates with utmost compliance.
            </p>
            
            <ul className="trust-list">
              <li>
                <CheckCircle2 className="trust-icon" size={20} />
                <div>
                  <strong>Guarantee Cost Reduction</strong>
                  <span>Minimizing administrative hurdles to improve overall profitability.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 className="trust-icon" size={20} />
                <div>
                  <strong>Ethical Practices</strong>
                  <span>Ensuring compliance with local laws and standard communication norms.</span>
                </div>
              </li>
            </ul>
            
            <a href="/about" className="btn-dark hover-arrow-btn">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* Why Partners Choose Us */}
      <section className="partners-section">
        <div className="partners-header reveal-fade-up">
          <h2>Why Partners Choose Us</h2>
          <p>The foundation of our enduring alliances</p>
        </div>
        
        <div className="partners-grid reveal-stagger">
          <div className="partner-card">
            <Briefcase size={32} className="text-gold" />
            <h4>Professional Team</h4>
          </div>
          <div className="partner-card">
            <ShieldCheck size={32} className="text-gold" />
            <h4>Quality Assured Quality</h4>
          </div>
          <div className="partner-card">
            <PhoneCall size={32} className="text-gold" />
            <h4>Clear Communication</h4>
          </div>
          <div className="partner-card">
            <FileText size={32} className="text-gold" />
            <h4>Dedicated Support</h4>
          </div>
          <div className="partner-card">
            <CheckCircle2 size={32} className="text-gold" />
            <h4>Industry Expertise</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section-wrapper" id="contact">
        <div className="contact-split">
          <div className="contact-form-container reveal-slide-left">
            <h2>Request a Callback</h2>
          <form className="callback-form">
            <div className="form-row">
              <div className="form-group form-input-animate">
                <label>First Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group form-input-animate">
                <label>Company Name</label>
                <input type="text" placeholder="Acme Corp" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group form-input-animate">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" />
              </div>
              <div className="form-group form-input-animate">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="form-group form-input-animate">
              <label>Service Interested</label>
              <select>
                <option>Debt Recovery</option>
                <option>Payroll Compliance</option>
                <option>Financial Services</option>
              </select>
            </div>
            
            <div className="form-group form-input-animate">
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows="4"></textarea>
            </div>
            
            <button type="submit" className="btn-primary full-width">Submit Request</button>
          </form>
        </div>
        
        <div className="contact-info-container reveal-slide-right">
          <div className="info-details">
            <h3>Contact Information</h3>
            <div className="info-item">
              <PhoneCall size={20} className="info-icon" />
              <div>
                <strong>Call Us</strong>
                <p>+91 9035551777</p>
              </div>
            </div>
            <div className="info-item">
              <Mail size={20} className="info-icon" />
              <div>
                <strong>Email Us</strong>
                <p>lourdraj@gettipick.in</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={20} className="info-icon" />
              <div>
                <strong>Location</strong>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
            
            <a href="https://wa.me/919035551777" className="btn-whatsapp">
              Chat on WhatsApp
            </a>
          </div>
          
            <div className="map-placeholder">
              {/* Map Placeholder */}
              <div className="map-bg"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
