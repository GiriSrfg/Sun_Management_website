import { useState } from 'react';
import { 
  RefreshCcw, 
  MessageCircle, 
  Lock, 
  LayoutList,
  PhoneCall,
  CreditCard,
  Headphones,
  Compass,
  FileText,
  MailWarning,
  CheckCircle2,
  User,
  WalletCards,
  Network,
  Briefcase,
  ChevronDown
} from 'lucide-react';
import '../EmiSupport.css';
import '../ServiceDetail.css'; // Reusing .faqs-list, .faq-wrapper, etc.

export default function EmiSupport() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: "How does EMI support work?", a: "We act as an intermediary, contacting borrowers to remind them of upcoming or missed payments and guiding them through the repayment process." },
    { q: "Is the process confidential?", a: "Yes, all communication and data handling are strictly confidential and adhere to the highest data privacy standards." },
    { q: "How do you handle disputes?", a: "Our trained agents use dispute resolution frameworks to address borrower concerns calmly and effectively while prioritizing debt recovery." },
    { q: "Can I track the recovery status?", a: "Absolutely. We provide a detailed dashboard and regular reporting so you can track the status of all assigned accounts in real-time." },
    { q: "Are your practices compliant?", a: "Yes, our processes are 100% compliant with RBI guidelines and local laws regarding debt collection and borrower communication." }
  ];

  return (
    <main className="emi-page">
      {/* Hero Section */}
      <section className="emi-hero">
        <div className="emi-hero-content">
          <div className="emi-hero-badge">RETAIL LOAN MANAGEMENT</div>
          <h1>Personal Loan EMI<br/>Collection Support<br/>Services</h1>
          <p>
            Professional assistance for institutions managing retail loan portfolios. 
            We ensure prompt EMI collection and cooperative borrower communication.
          </p>
          <div className="emi-hero-actions">
            <a href="/contact" className="emi-btn-dark">Request Consult</a>
            <a href="#help" className="emi-btn-outline">Discover More</a>
          </div>
        </div>
        <div className="emi-hero-visual">
          <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80" alt="Consultant reviewing loan documents" />
        </div>
      </section>

      {/* Overlapping Features */}
      <div className="emi-overlap-cards">
        <div className="emi-overlap-card">
          <RefreshCcw className="emi-card-icon" size={24} />
          <h4>EMI Coordination</h4>
          <p>Streamlining payment reminders and ensuring prompt payment adherence.</p>
        </div>
        <div className="emi-overlap-card">
          <MessageCircle className="emi-card-icon" size={24} />
          <h4>Follow-up Assistance</h4>
          <p>Structured interactions with borrowers facing repayment issues.</p>
        </div>
        <div className="emi-overlap-card">
          <Lock className="emi-card-icon" size={24} />
          <h4>Confidential Support</h4>
          <p>100% data security and compliant handling of borrower data.</p>
        </div>
        <div className="emi-overlap-card">
          <LayoutList className="emi-card-icon" size={24} />
          <h4>Structured Process</h4>
          <p>A strictly defined workflow for escalation and resolution.</p>
        </div>
      </div>

      {/* How We Help Section */}
      <section className="emi-help" id="help">
        <h2 className="emi-section-title">How We Help</h2>
        <p>Our comprehensive support framework bridges the communication gap between your institution and your retail clients.</p>
        
        <div className="emi-help-grid">
          <div className="emi-help-card">
            <div className="emi-help-icon-wrapper"><PhoneCall size={20} /></div>
            <h3>EMI Follow-up Support</h3>
            <p>Consistent, respectful outreach to borrowers prior to and post payment dates.</p>
          </div>
          <div className="emi-help-card">
            <div className="emi-help-icon-wrapper"><CreditCard size={20} /></div>
            <h3>Payment Coordination</h3>
            <p>Guiding borrowers on how to submit payments directly to your accounts.</p>
          </div>
          <div className="emi-help-card">
            <div className="emi-help-icon-wrapper"><Headphones size={20} /></div>
            <h3>Communication Assistance</h3>
            <p>Acting as an empathetic bridge between financial institutions and borrowers.</p>
          </div>
          <div className="emi-help-card">
            <div className="emi-help-icon-wrapper"><Compass size={20} /></div>
            <h3>Recovery Process Guidance</h3>
            <p>Educating borrowers on the consequences of prolonged default and helping them structure repayments.</p>
          </div>
          <div className="emi-help-card">
            <div className="emi-help-icon-wrapper"><FileText size={20} /></div>
            <h3>Documentation Support</h3>
            <p>Organizing borrower statements and updating payment commitment records.</p>
          </div>
          <div className="emi-help-card">
            <div className="emi-help-icon-wrapper"><MailWarning size={20} /></div>
            <h3>Notice Follow-up Assistance</h3>
            <p>Supporting the process after formal advisory notices are issued to defaulters.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="emi-why-choose">
        <div className="emi-why-header">
          <div>
            <h2>Why Choose Our EMI Support Services</h2>
            <p>We are dedicated to maximizing your retail loan recovery rate while strictly protecting your brand's reputation.</p>
          </div>
          <a href="/contact" className="emi-why-btn">Book a Consultation</a>
        </div>
        
        <div className="emi-pills-grid">
          <div className="emi-pill">
            <CheckCircle2 size={20} />
            <span>Professional Communication Support</span>
          </div>
          <div className="emi-pill">
            <CheckCircle2 size={20} />
            <span>Regular Status Reporting</span>
          </div>
          <div className="emi-pill">
            <CheckCircle2 size={20} />
            <span>Structured Planning</span>
          </div>
          <div className="emi-pill">
            <CheckCircle2 size={20} />
            <span>Targeted Follow-up Strategies</span>
          </div>
          <div className="emi-pill">
            <CheckCircle2 size={20} />
            <span>Guidance for Resolution</span>
          </div>
          <div className="emi-pill">
            <CheckCircle2 size={20} />
            <span>Strict Regulatory Adherence</span>
          </div>
        </div>
      </section>

      {/* Journey to Resolution */}
      <section className="emi-journey">
        <h2 className="emi-section-title">Your Journey to Resolution</h2>
        
        <div className="emi-timeline">
          <div className="emi-step">
            <div className="emi-step-num">1</div>
            <h4>Requirement Discovery</h4>
            <p>Analyzing portfolio size and borrower profiles.</p>
          </div>
          <div className="emi-step">
            <div className="emi-step-num">2</div>
            <h4>Payment Review</h4>
            <p>Assessing default durations and amounts.</p>
          </div>
          <div className="emi-step">
            <div className="emi-step-num">3</div>
            <h4>Communication Coordination</h4>
            <p>Executing structured outreach via calls and messages.</p>
          </div>
          <div className="emi-step">
            <div className="emi-step-num">4</div>
            <h4>Follow-up Assistance</h4>
            <p>Negotiating timelines and payment commitments.</p>
          </div>
          <div className="emi-step">
            <div className="emi-step-num">5</div>
            <h4>Status Review & Support</h4>
            <p>Confirming payment reception and closing the cycle.</p>
          </div>
        </div>
      </section>

      {/* Designed For Your Needs */}
      <section className="emi-needs">
        <h2 className="emi-section-title">Designed For Your Needs</h2>
        <div className="emi-needs-grid">
          <div className="emi-need-card">
            <User size={32} />
            <span>Individual Loan Holders</span>
          </div>
          <div className="emi-need-card">
            <WalletCards size={32} />
            <span>EMI Payment Support</span>
          </div>
          <div className="emi-need-card">
            <Network size={32} />
            <span>Financial Coordination Needs</span>
          </div>
          <div className="emi-need-card">
            <Briefcase size={32} />
            <span>Personal Recovery Assistance</span>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="emi-cta-banner-wrapper">
        <div className="emi-cta-banner">
          <div className="emi-cta-content">
            <h2>Need Professional EMI Support Assistance?</h2>
            <p>Connect with our expert team to structure a tailored communication strategy for your retail portfolio.</p>
          </div>
          <div className="emi-cta-actions">
            <a href="/contact" className="emi-cta-btn-dark">Consult an Expert</a>
            <a href="/contact" className="emi-cta-btn-light">Request a Quote</a>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <section className="emi-faqs">
        <h2 className="emi-section-title">Frequently Asked Questions</h2>
        <div className="faqs-list" style={{ marginTop: '40px' }}>
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
      
      {/* Footer is global, no specific footer block here */}
    </main>
  );
}
