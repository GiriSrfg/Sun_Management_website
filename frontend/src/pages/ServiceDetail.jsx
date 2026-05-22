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
            <form className="sd-form">
              <div className="form-row">
                <div className="form-group form-input-animate">
                  <label>Full Name</label>
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
                <label>Service Required</label>
                <select>
                  <option>Debt Recovery</option>
                  <option>Personal Loan EMI Support</option>
                </select>
              </div>
              
              <div className="form-group form-input-animate">
                <label>Message</label>
                <textarea rows="3" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="sd-btn-submit">Submit Request</button>
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
