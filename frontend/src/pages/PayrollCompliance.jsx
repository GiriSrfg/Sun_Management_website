import { useState } from 'react';
import { 
  FileCheck, 
  Settings, 
  Scale, 
  UserCheck, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Shield, 
  PieChart, 
  Briefcase, 
  Store, 
  Hospital, 
  Activity, 
  Rocket, 
  Building2, 
  Factory, 
  ChevronDown,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare
} from 'lucide-react';
import '../PayrollCompliance.css';
import '../ServiceDetail.css'; // Reusing some base styles like .faqs-list, .sd-contact-footer

export default function PayrollCompliance() {
  const [activeFaq, setActiveFaq] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    workEmail: '',
    service: 'Payroll Processing',
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
          service: 'Payroll Processing',
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
    { q: "What statutory compliances do you cover?", a: "We cover PF, ESI, PT, LWF, Trade Licenses, and all other state-specific and central labor law compliances." },
    { q: "Can you handle payroll for multiple states?", a: "Yes, our team is equipped to manage multi-state payroll and ensure compliance with all regional labor regulations." },
    { q: "How secure is our payroll data with you?", a: "We employ enterprise-grade security protocols and strict data privacy measures to ensure your employee data remains completely confidential and secure." },
    { q: "Do you help with regulatory audit preparations?", a: "Absolutely. We maintain all necessary registers, records, and filings to ensure you are always audit-ready and represent you during departmental inspections." },
    { q: "Is there a minimum employee count for your services?", a: "We offer scalable solutions designed for businesses of all sizes, from growing startups to large-scale corporate enterprises." }
  ];

  return (
    <main className="payroll-page">
      {/* Hero Section */}
      <section className="pc-hero reveal-fade-in">
        <div className="pc-hero-content">
          <div className="pc-hero-badge reveal-fade-up">PAYROLL & COMPLIANCE</div>
          <h1 className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>Payroll & Statutory<br/>Compliance Services</h1>
          <p className="reveal-fade-up" style={{ transitionDelay: '0.2s' }}>
            End-to-end payroll processing and statutory compliance management. 
            Automate your HR operations, mitigate legal risks, and focus on your 
            core business.
          </p>
          <div className="pc-hero-actions reveal-fade-up" style={{ transitionDelay: '0.3s' }}>
            <a href="#contact" className="btn-yellow">Consult an Expert</a>
            <a href="#services" className="btn-outline-light">View our Services</a>
          </div>
        </div>
        <div className="pc-hero-image reveal-scale-in" style={{ transitionDelay: '0.2s' }}>
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="Payroll dashboard on laptop" />
        </div>
      </section>

      {/* Overlapping Info Cards */}
      <div className="pc-info-cards reveal-stagger">
        <div className="pc-info-card">
          <FileCheck className="pc-info-icon" size={24} />
          <h4>Payroll Calculation</h4>
          <p>Error-free salary, bonus, and tax deduction computations.</p>
        </div>
        <div className="pc-info-card">
          <Settings className="pc-info-icon" size={24} />
          <h4>Statutory PF/ESI</h4>
          <p>Timely EPF & ESI deductions, filings, and challan generation.</p>
        </div>
        <div className="pc-info-card">
          <Scale className="pc-info-icon" size={24} />
          <h4>Regulatory & Labor Laws</h4>
          <p>Strict adherence to central and state-specific labor laws.</p>
        </div>
        <div className="pc-info-card">
          <UserCheck className="pc-info-icon" size={24} />
          <h4>Employee Direct Deposit</h4>
          <p>Smooth, on-time salary disbursements directly to employee accounts.</p>
        </div>
      </div>

      {/* What We Support Section */}
      <section className="pc-support" id="services">
        <h2 className="pc-section-title reveal-fade-up">What We Support</h2>
        <div className="pc-support-grid reveal-stagger">
          <div className="pc-support-card">
            <div className="pc-support-card-icon"><Settings size={24} /></div>
            <h3>Payroll Processing Support</h3>
            <p>Comprehensive salary structuring, payslip generation, and tax computations tailored for Indian labor regulations.</p>
          </div>
          <div className="pc-support-card">
            <div className="pc-support-card-icon"><TrendingUp size={24} /></div>
            <h3>Employee Salary Coordination</h3>
            <p>Seamless management of employee queries, leave/attendance inputs, and reimbursement claims.</p>
          </div>
          <div className="pc-support-card">
            <div className="pc-support-card-icon"><ShieldCheck size={24} /></div>
            <h3>Statutory Compliance Assistance</h3>
            <p>End-to-end management of PF, ESI, PT, LWF, Income Tax (TDS), and related statutory filings.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="pc-why-choose">
        <h2 className="pc-section-title reveal-fade-up">Why Businesses Choose Payroll & Compliance Support</h2>
        <div className="pc-features-grid reveal-stagger">
          <div className="pc-feature-item">
            <div className="pc-feature-icon"><CheckCircle2 size={20} /></div>
            <div className="pc-feature-text">
              <h4>Streamlined Payroll Process</h4>
              <p>Automated calculations reduce manual errors and ensure on-time payouts every single month.</p>
            </div>
          </div>
          <div className="pc-feature-item">
            <div className="pc-feature-icon"><Shield size={20} /></div>
            <div className="pc-feature-text">
              <h4>Data Privacy & Security Management</h4>
              <p>Your sensitive employee data is secured using enterprise-grade encryption and access controls.</p>
            </div>
          </div>
          <div className="pc-feature-item">
            <div className="pc-feature-icon"><Scale size={20} /></div>
            <div className="pc-feature-text">
              <h4>Improved Operational Compliance</h4>
              <p>Stay ahead of ever-changing labor laws and avoid costly penalties with our expert oversight.</p>
            </div>
          </div>
          <div className="pc-feature-item">
            <div className="pc-feature-icon"><PieChart size={20} /></div>
            <div className="pc-feature-text">
              <h4>Reduced Financial Risk</h4>
              <p>Precise tax deductions and accurate filings safeguard your business from financial liabilities.</p>
            </div>
          </div>
          <div className="pc-feature-item">
            <div className="pc-feature-icon"><Briefcase size={20} /></div>
            <div className="pc-feature-text">
              <h4>Professional Communication</h4>
              <p>Expert handling of employee grievances regarding pay, taxes, and final settlements.</p>
            </div>
          </div>
          <div className="pc-feature-item">
            <div className="pc-feature-icon"><Settings size={20} /></div>
            <div className="pc-feature-text">
              <h4>Standard Business Workflows</h4>
              <p>Implement best-in-class HR processes that scale seamlessly as your workforce grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Get Started Section */}
      <section className="pc-process">
        <h2 className="pc-section-title reveal-fade-up">How We Get Started</h2>
        <br/><br/>
        <div className="pc-process-steps reveal-stagger">
          <div className="pc-step">
            <div className="pc-step-number">1</div>
            <h4>Requirement Discovery</h4>
            <p>Evaluating your current payroll structure and compliance status.</p>
          </div>
          <div className="pc-step">
            <div className="pc-step-number">2</div>
            <h4>Proposal Review</h4>
            <p>Detailing the customized service scope and commercial terms.</p>
          </div>
          <div className="pc-step">
            <div className="pc-step-number">3</div>
            <h4>Documentation & Setup</h4>
            <p>Gathering employee data and configuring the payroll systems.</p>
          </div>
          <div className="pc-step">
            <div className="pc-step-number">4</div>
            <h4>Active Compliance</h4>
            <p>Executing live payroll processing and month-on-month filings.</p>
          </div>
          <div className="pc-step">
            <div className="pc-step-number">5</div>
            <h4>Result Analysis</h4>
            <p>Providing detailed reports and audits to ensure complete compliance.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="pc-industries">
        <h2 className="pc-section-title reveal-fade-up">Industries We Empower</h2>
        <div className="pc-industries-grid reveal-stagger">
          <div className="pc-industry-card">
            <Store size={32} />
            <span>Retail<br/>Businesses</span>
          </div>
          <div className="pc-industry-card">
            <Hospital size={32} />
            <span>Hospitals</span>
          </div>
          <div className="pc-industry-card">
            <Activity size={32} />
            <span>Private Clinics</span>
          </div>
          <div className="pc-industry-card">
            <Rocket size={32} />
            <span>Startups</span>
          </div>
          <div className="pc-industry-card">
            <Building2 size={32} />
            <span>Corporate<br/>Companies</span>
          </div>
          <div className="pc-industry-card">
            <Factory size={32} />
            <span>Manufacturing<br/>Plants</span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pc-faqs">
        <h2 className="pc-section-title reveal-fade-up">Frequently Asked Questions</h2>
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

      {/* CTA Banner */}
      <div className="pc-cta-banner reveal-scale-in">
        <h2>Need Professional Payroll & Compliance Support?</h2>
        <p>Connect with our experts to ensure your business meets all statutory requirements and maintains seamless HR operations.</p>
        <div className="pc-cta-actions">
          <a href="#contact" className="btn-yellow">Consult an Expert</a>
          <a href="#services" className="btn-white">View Services</a>
        </div>
      </div>

      {/* Reusing the Contact Footer from ServiceDetail */}
      <section className="sd-contact-footer" id="contact">
        <div className="sd-contact-card reveal-fade-up">
          <div className="sd-info-side" style={{background: 'var(--navy-deep)'}}>
            <div>
              <h3 style={{color: 'var(--gold)'}}>Contact Information</h3>
              <p style={{color: '#a0abbc', marginBottom: '30px', fontSize: '14px', lineHeight: '1.6'}}>
                Reach out to us for a comprehensive consultation regarding your payroll and statutory needs.
              </p>
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
                  <strong>Working Hours</strong>
                  <p>Mon - Sat : 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
            
            <div>
              <a href="https://wa.me/919035551777" className="btn-whatsapp" style={{marginBottom: 0}}>
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="sd-form-side">
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
                  <label>Full Name *</label>
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
                  <label>Company Name *</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Corp" 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group form-input-animate">
                  <label>Phone Number *</label>
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
                <label>Service Interested In</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Payroll Processing">Payroll Processing</option>
                  <option value="Statutory Compliance (PF/ESI)">Statutory Compliance (PF/ESI)</option>
                  <option value="Comprehensive HR Outsourcing">Comprehensive HR Outsourcing</option>
                </select>
              </div>
              
              <div className="form-group form-input-animate">
                <label>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="How can we help your business?"
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="sd-btn-submit" 
                disabled={status.loading}
                style={{
                  background: 'var(--navy-deep)', 
                  color: 'white',
                  opacity: status.loading ? 0.7 : 1,
                  cursor: status.loading ? 'not-allowed' : 'pointer'
                }}
              >
                {status.loading ? 'Submitting Request...' : 'Submit Callback Request'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
