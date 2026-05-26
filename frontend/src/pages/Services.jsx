import { useState } from 'react';
import { 
  Wallet, 
  Briefcase, 
  FileCheck, 
  Eye, 
  PhoneCall, 
  Mail, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Services.css';

export default function Services() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    service: 'Commercial Debt Recovery',
    message: 'Requested a professional callback from the Services Overview page.'
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/callback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus({ loading: false, success: data.message, error: null });
        setFormData({
          fullName: '',
          companyName: '',
          phone: '',
          service: 'Commercial Debt Recovery',
          message: 'Requested a professional callback from the Services Overview page.'
        });
      } else {
        setStatus({ loading: false, success: null, error: data.message || 'Failed to submit request.' });
      }
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: null, 
        error: 'Unable to connect to the server. Please ensure the backend is running or try again later.' 
      });
    }
  };

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <div className="resolution-badge reveal-fade-up">RESOLUTION EXPERTS</div>
          <h1 className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>Our Comprehensive Recovery Solutions</h1>
          <p className="reveal-fade-up" style={{ transitionDelay: '0.2s' }}>
            At Sun Management Services, we leverage a structured, ethical
            approach to debt recovery, ensuring professional mediation and high
            success rates for your business. We bridge the gap between financial
            obligations and resolution with integrity.
          </p>
        </div>
        <div className="services-hero-visual reveal-scale-in premium-float">
          {/* Placeholder for the office corridor/door image */}
          <div className="hero-img-placeholder"></div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="core-offerings">
        <h2 className="reveal-fade-up">Our Core Offerings</h2>
        <p className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>
          Diverse financial solutions tailored to corporate needs, asset protection, and ethical
          recovery management.
        </p>
        
        <div className="offerings-grid reveal-stagger">
          {/* We are reusing the exact 4 services from the Home page as requested */}
          <div className="offering-card">
            <div className="offering-icon-wrapper"><Wallet size={24} /></div>
            <h3>Collections & Debt Recovery</h3>
            <p>Efficient B2B & B2C recovery strategies designed for maximum retention.</p>
            <Link to="/services/debt-recovery" className="learn-more">Learn More <ArrowRight size={14} /></Link>
          </div>
          
          <div className="offering-card">
            <div className="offering-icon-wrapper"><Briefcase size={24} /></div>
            <h3>Personal Loan EMI Support</h3>
            <p>Proactive resolution services to manage retail EMI defaults efficiently.</p>
            <Link to="/services/emi-support" className="learn-more">Learn More <ArrowRight size={14} /></Link>
          </div>
          
          <div className="offering-card">
            <div className="offering-icon-wrapper"><FileCheck size={24} /></div>
            <h3>Payroll Compliance</h3>
            <p>End-to-end statutory compliance (PF, ESI, etc.) outsourcing for all industries.</p>
            <Link to="/services/payroll-compliance" className="learn-more">Learn More <ArrowRight size={14} /></Link>
          </div>
          
          <div className="offering-card">
            <div className="offering-icon-wrapper"><TrendingUp size={24} /></div>
            <h3>Financial Services</h3>
            <p>Investment planning, insurance, and long-term wealth coordination.</p>
            <Link to="/services/financial-services" className="learn-more">Learn More <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="process-workflow">
        <h2 className="reveal-fade-up">Our 4-Step Process</h2>
        <p className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>A streamlined workflow designed for maximum transparency and results.</p>
        
        <div className="workflow-timeline reveal-stagger">
          <div className="workflow-step">
            <div className="workflow-number">01</div>
            <h4>Assessment</h4>
            <p>Initial review of claims and account documentation.</p>
          </div>
          <div className="workflow-step">
            <div className="workflow-number">02</div>
            <h4>Mediation</h4>
            <p>Professional outreach using ethical negotiation techniques.</p>
          </div>
          <div className="workflow-step">
            <div className="workflow-number">03</div>
            <h4>Resolution</h4>
            <p>Secure fund recovery and agreement formalization.</p>
          </div>
          <div className="workflow-step">
            <div className="workflow-number">04</div>
            <h4>Reporting</h4>
            <p>Detailed status updates and final closing documentation.</p>
          </div>
        </div>
      </section>

      {/* Ready Banner */}
      <section className="ready-banner reveal-fade-up">
        <div className="banner-content">
          <h2>Ready to recover your assets?</h2>
          <p>
            Discuss custom recovery strategies with a dedicated specialist. 
            We provide tailored solutions that align with your brand's values.
          </p>
          <a href="https://wa.me/919035551777" className="btn-whatsapp-dark">
            Chat on WhatsApp
          </a>
        </div>
        <div className="banner-visual reveal-scale-in" style={{ transitionDelay: '0.2s' }}>
          {/* Placeholder for the laptop/dashboard image */}
          <div className="banner-image"></div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="consultation-section" id="contact">
        <div className="consultation-card reveal-fade-up">
          <div className="consultation-info">
            <h2>Ready to Recover Your Assets?</h2>
            <p>
              Schedule a confidential consultation with our senior recovery specialists. 
              We will analyze your portfolio and provide a preliminary strategy within 24 hours.
            </p>
            
            <div className="contact-direct">
              <div className="contact-direct-item">
                <PhoneCall size={18} className="contact-direct-icon" />
                <span>+91 9035551777</span>
              </div>
              <div className="contact-direct-item">
                <Mail size={18} className="contact-direct-icon" />
                <span>consult@sunmanagement.in</span>
              </div>
            </div>
          </div>
          
          <div className="consultation-form-wrapper">
            {status.success && (
              <div className="alert-message success" style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderLeft: '4px solid #10b981',
                color: '#10b981',
                padding: '12px 16px',
                borderRadius: '6px',
                marginBottom: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                <strong>✓ Success!</strong>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', fontWeight: 'normal', lineHeight: '1.4' }}>
                  Your request has been submitted successfully!
                </p>
              </div>
            )}

            {status.error && (
              <div className="alert-message error" style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderLeft: '4px solid #ef4444',
                color: '#ef4444',
                padding: '12px 16px',
                borderRadius: '6px',
                marginBottom: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {status.error}
              </div>
            )}

            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group form-input-animate">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="form-group form-input-animate">
                  <label>Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enterprise Ltd." 
                  />
                </div>
              </div>
              
              <div className="form-group form-input-animate">
                <label>Contact Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  required 
                />
              </div>
              
              <div className="form-group form-input-animate">
                <label>Service Interested In</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Commercial Debt Recovery">Commercial Debt Recovery</option>
                  <option value="Personal Loan EMI Support">Personal Loan EMI Support</option>
                  <option value="Payroll Compliance">Payroll Compliance</option>
                  <option value="Financial Services">Financial Services</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary-callback"
                disabled={status.loading}
                style={{
                  opacity: status.loading ? 0.7 : 1,
                  cursor: status.loading ? 'not-allowed' : 'pointer'
                }}
              >
                {status.loading ? 'Submitting Request...' : 'Request Professional Callback'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
