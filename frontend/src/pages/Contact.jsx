import { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  MessageSquare,
  Send
} from 'lucide-react';
import '../Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    service: 'Collections Recovery',
    message: ''
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
          workEmail: '',
          phone: '',
          service: 'Collections Recovery',
          message: ''
        });
      } else {
        setStatus({ loading: false, success: null, error: data.message || 'Failed to submit inquiry.' });
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
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero reveal-fade-in">
        <div className="contact-hero-content">
          <h1 className="reveal-fade-up">Get in Touch</h1>
          <p className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>
            Have questions about payment recovery or financial support? Our experts are 
            here to help you resolve your portfolio challenges with authority and reliability.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="contact-content-grid">
        
        {/* Left Column: Form */}
        <div className="request-callback-card reveal-fade-up">
          <h2><MessageSquare size={24} /> Request a Callback</h2>
          
          {status.success && (
            <div className="alert-message success" style={{
              backgroundColor: status.success.includes('[MOCK DEMO]') ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
              borderLeft: status.success.includes('[MOCK DEMO]') ? '4px solid #f59e0b' : '4px solid #10b981',
              color: status.success.includes('[MOCK DEMO]') ? '#d97706' : '#10b981',
              padding: '12px 16px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {status.success.includes('[MOCK DEMO]') ? (
                <div>
                  <strong>⚠️ Mock Test Successful!</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', fontWeight: 'normal', lineHeight: '1.4' }}>
                    The form was submitted in development mock mode. Email details have been printed to your backend server terminal console.
                  </p>
                </div>
              ) : (
                <div>
                  <strong>✓ Success!</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', fontWeight: 'normal', lineHeight: '1.4' }}>
                    Thank you! Your callback request has been submitted successfully. A specialist from Sun Management will contact you shortly.
                  </p>
                </div>
              )}
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

          <form className="callback-form-full" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group-full form-input-animate">
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
              <div className="form-group-full form-input-animate">
                <label>Company Name</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Global Enterprises Inc." 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group-full form-input-animate">
                <label>Work Email</label>
                <input 
                  type="email" 
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="john@company.com" 
                  required
                />
              </div>
              <div className="form-group-full form-input-animate">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 90000 00000" 
                  required
                />
              </div>
            </div>
            
            <div className="form-group-full form-input-animate">
              <label>Service Interested In</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Collections Recovery">Collections Recovery</option>
                <option value="Personal Loan EMI Support">Personal Loan EMI Support</option>
                <option value="Payroll Compliance">Payroll Compliance</option>
                <option value="Financial Services">Financial Services</option>
              </select>
            </div>
            
            <div className="form-group-full form-input-animate">
              <label>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                placeholder="How can we assist you with your portfolio today?"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary-submit"
              disabled={status.loading}
              style={{
                opacity: status.loading ? 0.7 : 1,
                cursor: status.loading ? 'not-allowed' : 'pointer'
              }}
            >
              {status.loading ? 'Sending Inquiry...' : 'Submit Inquiry'} <Send size={16} />
            </button>
          </form>
        </div>

        {/* Right Column: Sidebar */}
        <div className="contact-sidebar">
          
          {/* HQ Details Card */}
          <div className="hq-card reveal-fade-up" style={{ transitionDelay: '0.1s' }}>
            <h3>Our Headquarters</h3>
            
            <div className="hq-details">
              <div className="hq-item">
                <MapPin size={20} className="hq-icon" />
                <div className="hq-item-content">
                  <strong>Office Address</strong>
                  <p>53, Bowring Hospital Rd, Tasker Town,<br/>Yelahanka, Bengaluru, Karnataka 560001</p>
                </div>
              </div>
              
              <div className="hq-item">
                <PhoneCall size={20} className="hq-icon" />
                <div className="hq-item-content">
                  <strong>Call Us</strong>
                  <p>+91 9035551777</p>
                </div>
              </div>
              
              <div className="hq-item">
                <Mail size={20} className="hq-icon" />
                <div className="hq-item-content">
                  <strong>Email Support</strong>
                  <p>lourdraj@getitpick.in<br/>support@sunmanagement.in</p>
                </div>
              </div>
              
              <div className="hq-item">
                <Clock size={20} className="hq-icon" />
                <div className="hq-item-content">
                  <strong>Business Hours</strong>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="divider"></div>
            
            <a href="https://wa.me/919035551777" className="btn-whatsapp-green">
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* Map Image Card */}
          <div className="map-card reveal-scale-in" style={{ transitionDelay: '0.2s' }}>
            <div className="map-card-bg"></div>
            <div className="map-label">
              <MapPin size={14} /> Sun Management HQ
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
