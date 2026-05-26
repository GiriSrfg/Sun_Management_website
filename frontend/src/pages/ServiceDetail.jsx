import { 
  Building2, 
  Landmark, 
  Store, 
  Home as HomeIcon,
  ClipboardList,
  Users,
  Scale,
  ShieldAlert,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import '../ServiceDetail.css';

export default function ServiceDetail() {
  const [activeFaq, setActiveFaq] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    workEmail: '',
    service: 'Debt Recovery',
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
          phone: '',
          workEmail: '',
          service: 'Debt Recovery',
          message: ''
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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: "What are your success rates for recovery?", a: "We maintain a 90% average success rate in the mediation phase for B2B accounts, focusing on rapid and amicable resolutions to preserve your business relationships." },
    { q: "How do you handle difficult debtors while preserving our reputation?", a: "Our approach is strictly ethical and compliance-driven. We use diplomatic, professional negotiation techniques to secure payment without employing aggressive tactics that could damage your brand's integrity." },
    { q: "Are there any upfront costs?", a: "Our pricing structure is transparent. We operate primarily on a contingency or success-fee basis, meaning we only charge a commission on the amounts we successfully recover for you." }
  ];

  return (
    <main className="service-detail-page">
      {/* Hero Section */}
      <section className="sd-hero">
        <div className="sd-hero-content">
          <h1 className="reveal-fade-up">Expert Collections & Strategic Debt Recovery</h1>
          <p className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>
            Professional, ethical, and structured recovery solutions designed to restore
            financial stability while preserving business relationships. We bridge the gap
            between credit risk and capital recovery.
          </p>
          <a href="#callback" className="btn-primary reveal-fade-up" style={{ transitionDelay: '0.2s' }}>Request Callback</a>
        </div>
      </section>

      {/* Who Needs This Service? */}
      <section className="needs-service">
        <h2 className="reveal-fade-up">Who Needs This Service?</h2>
        
        <div className="needs-grid reveal-stagger">
          <div className="need-card">
            <div className="need-icon"><Building2 size={20} /></div>
            <h3>Large Scale Corporations</h3>
            <p>Streamlined portfolio recovery for high-volume receivables across diverse industry sectors.</p>
          </div>
          
          <div className="need-card">
            <div className="need-icon"><Landmark size={20} /></div>
            <h3>Banking Institutions</h3>
            <p>Secure, compliant debt recovery specifically tailored for personal loans and commercial credit.</p>
          </div>
          
          <div className="need-card">
            <div className="need-icon"><Store size={20} /></div>
            <h3>SMEs & Startups</h3>
            <p>Protecting cash flow and ensuring business continuity for growing enterprises with strategic recovery.</p>
          </div>
          
          <div className="need-card">
            <div className="need-icon"><HomeIcon size={20} /></div>
            <h3>Property Management Firms</h3>
            <p>Specialized rental arrears and facility maintenance collection services for the real estate sector.</p>
          </div>
        </div>
      </section>

      {/* Unified Recovery Process */}
      <section className="unified-process">
        <h2 className="reveal-fade-up">Our Unified Recovery Process</h2>
        <p className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>A multi-phase approach ensuring maximum resolution with minimal friction.</p>
        
        <div className="process-steps-container">
          <div className="process-line"></div>
          <div className="process-steps reveal-stagger">
            <div className="p-step">
              <div className="p-step-icon"><ClipboardList size={28} /></div>
              <h4>Assessment</h4>
              <p>Initial audit of the debt, debtor profiling, and recovery feasibility study.</p>
            </div>
            <div className="p-step">
              <div className="p-step-icon"><Users size={28} /></div>
              <h4>Mediation</h4>
              <p>Soft collection attempts through professional communication and negotiation.</p>
            </div>
            <div className="p-step">
              <div className="p-step-icon"><Scale size={28} /></div>
              <h4>Legal Action</h4>
              <p>Escalation to legal proceedings if voluntary repayment is not established.</p>
            </div>
            <div className="p-step">
              <div className="p-step-icon"><ShieldAlert size={28} /></div>
              <h4>Enforcement</h4>
              <p>Asset recovery or garnishment execution through court-mandated channels.</p>
            </div>
            <div className="p-step final">
              <div className="p-step-icon"><CheckCircle2 size={28} /></div>
              <h4>Resolution</h4>
              <p>Funds disbursement and final case closure with detailed reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="strategic-advantages">
        <div className="adv-content reveal-fade-up">
          <h2>Strategic Advantages</h2>
          <p>
            Our methodology leverages local ground knowledge with modern technology
            to deliver results that go beyond simple collection.
          </p>
          
          <div className="adv-grid">
            <div className="adv-item">
              <div className="adv-item-icon"><CheckCircle2 size={16} /></div>
              <div className="adv-item-text">
                <strong>Improved Cash Flow</strong>
                <p>Rapid deployment of recovering invoices back into your operating capital.</p>
              </div>
            </div>
            
            <div className="adv-item">
              <div className="adv-item-icon"><CheckCircle2 size={16} /></div>
              <div className="adv-item-text">
                <strong>Professional Outreach</strong>
                <p>Diplomatic approaches that secure payment while maintaining your brand integrity.</p>
              </div>
            </div>
            
            <div className="adv-item">
              <div className="adv-item-icon"><CheckCircle2 size={16} /></div>
              <div className="adv-item-text">
                <strong>Compliance-Driven</strong>
                <p>Strict adherence to national and local regulatory debt collection frameworks.</p>
              </div>
            </div>
            
            <div className="adv-item">
              <div className="adv-item-icon"><CheckCircle2 size={16} /></div>
              <div className="adv-item-text">
                <strong>Data-Driven Strategies</strong>
                <p>Predictive analytics to determine the most effective recovery path for each debtor.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="adv-visual reveal-scale-in" style={{ transitionDelay: '0.2s' }}>
          <div className="adv-image-container">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" alt="Professional analyzing data" />
            <div className="success-badge reveal-fade-in" style={{ transitionDelay: '0.4s' }}>
              <strong>90% Average Success Rate</strong>
              <p>In mediation phase resolution for B2B accounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section">
        <h2 className="reveal-fade-up">Frequently Asked Questions</h2>
        
        <div className="faqs-list reveal-stagger">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-wrapper ${activeFaq === idx ? 'active' : ''}`}>
              <div className="faq-item" onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`faq-icon ${activeFaq === idx ? 'rotated' : ''}`} />
              </div>
              {activeFaq === idx && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Request Callback Footer */}
      <section className="sd-contact-footer" id="callback">
        <div className="sd-contact-card reveal-fade-up">
          
          <div className="sd-form-side">
            <h2>Request a Callback</h2>
            
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

            <form className="sd-form" onSubmit={handleSubmit}>
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
                    placeholder="Acme Corp" 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group form-input-animate">
                  <label>Phone Number</label>
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
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group form-input-animate">
                <label>Service Required</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Debt Recovery">Debt Recovery</option>
                  <option value="Personal Loan EMI Support">Personal Loan EMI Support</option>
                </select>
              </div>
              
              <div className="form-group form-input-animate">
                <label>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3" 
                  placeholder="How can we help you?" 
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="sd-btn-submit"
                disabled={status.loading}
                style={{
                  opacity: status.loading ? 0.7 : 1,
                  cursor: status.loading ? 'not-allowed' : 'pointer'
                }}
              >
                {status.loading ? 'Submitting Request...' : 'Submit Request'}
              </button>
            </form>
          </div>
          
          <div className="sd-info-side">
            <div>
              <h3>Contact Information</h3>
              <div className="sd-info-item">
                <PhoneCall size={18} className="sd-info-icon" />
                <div>
                  <strong>Call Us</strong>
                  <p>+91 9035551777</p>
                </div>
              </div>
              <div className="sd-info-item">
                <Mail size={18} className="sd-info-icon" />
                <div>
                  <strong>Email Us</strong>
                  <p>lourdraj@getitpick.in</p>
                </div>
              </div>
              <div className="sd-info-item">
                <MapPin size={18} className="sd-info-icon" />
                <div>
                  <strong>Visit Us</strong>
                  <p>Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <div>
              <a href="https://wa.me/919035551777" className="btn-whatsapp">
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
              <div className="sd-map-bg"></div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
