import { 
  ShieldCheck, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  MessageSquare,
  Users,
  CalendarDays,
  Lock,
  MessageCircle,
  Headphones
} from 'lucide-react';
import '../FinancialServices.css';

export default function FinancialServices() {
  return (
    <main className="financial-page">
      {/* Hero Section */}
      <section className="fs-hero reveal-fade-in">
        <div className="fs-hero-content">
          <div className="fs-hero-badge reveal-fade-up">FINANCIAL PLANNING & INVESTMENT SUPPORT</div>
          <h1 className="reveal-fade-up" style={{ transitionDelay: '0.1s' }}>Finance & <span>Investment</span><br/>Services</h1>
          <p className="reveal-fade-up" style={{ transitionDelay: '0.2s' }}>
            Professional guidance and support services for Insurance, 
            investment planning, wealth growth, and financial management.
          </p>
          <div className="fs-hero-actions reveal-fade-up" style={{ transitionDelay: '0.3s' }}>
            <a href="/contact" className="fs-btn-dark">Schedule Consultation</a>
            <a href="https://wa.me/919035551777" className="fs-btn-outline">
              <MessageSquare size={18} /> WhatsApp Support
            </a>
          </div>
        </div>
        <div className="fs-hero-visual reveal-scale-in" style={{ transitionDelay: '0.2s' }}>
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80" alt="Financial growth chart on tablet" />
        </div>
      </section>

      {/* Core Financial Services Section */}
      <section className="fs-core">
        <span className="fs-core-subtitle reveal-fade-up">PREMIUM SOLUTIONS</span>
        <h2 className="fs-section-title reveal-fade-up" style={{ transitionDelay: '0.1s' }}>Our Core Financial Services</h2>
        
        <div className="fs-core-grid reveal-stagger">
          {/* Life Insurance */}
          <div className="fs-core-card">
            <div className="fs-core-icon"><ShieldCheck size={24} /></div>
            <h3>Life Insurance</h3>
            <p>Helping individuals and families explore structured life insurance solutions for long-term financial protection and future security.</p>
            <ul className="fs-feature-list">
              <li><CheckCircle2 size={16} /> Financial protection planning</li>
              <li><CheckCircle2 size={16} /> Family security support</li>
              <li><CheckCircle2 size={16} /> Long-term coverage guidance</li>
              <li><CheckCircle2 size={16} /> Insurance coordination assistance</li>
            </ul>
            <a href="/contact" className="fs-btn-card">Learn More</a>
          </div>

          {/* Mutual Funds */}
          <div className="fs-core-card">
            <div className="fs-core-icon"><TrendingUp size={24} /></div>
            <h3>Mutual Funds</h3>
            <p>Professional support for mutual fund investment planning, portfolio guidance, and long-term wealth growth strategies.</p>
            <ul className="fs-feature-list">
              <li><CheckCircle2 size={16} /> Investment planning assistance</li>
              <li><CheckCircle2 size={16} /> SIP guidance support</li>
              <li><CheckCircle2 size={16} /> Long-term wealth planning</li>
              <li><CheckCircle2 size={16} /> Portfolio coordination</li>
            </ul>
            <a href="/contact" className="fs-btn-card">Learn More</a>
          </div>

          {/* Equity Shares */}
          <div className="fs-core-card">
            <div className="fs-core-icon"><BarChart3 size={24} /></div>
            <h3>Equity Shares</h3>
            <p>Support services for individuals interested in equity investments, market participation, and financial growth opportunities.</p>
            <ul className="fs-feature-list">
              <li><CheckCircle2 size={16} /> Equity investment guidance</li>
              <li><CheckCircle2 size={16} /> Market coordination support</li>
              <li><CheckCircle2 size={16} /> Portfolio assistance</li>
              <li><CheckCircle2 size={16} /> Financial growth planning</li>
            </ul>
            <a href="/contact" className="fs-btn-card">Learn More</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="fs-why">
        <h2 className="fs-section-title reveal-fade-up">Why Choose Our Financial Services</h2>
        <p className="fs-text-center reveal-fade-up" style={{ transitionDelay: '0.1s' }}>Dedicated expertise in managing your financial aspirations</p>
        
        <div className="fs-why-grid reveal-stagger">
          <div className="fs-why-box">
            <Users size={28} />
            <span>Personalized Financial<br/>Support</span>
          </div>
          <div className="fs-why-box">
            <CalendarDays size={28} />
            <span>Long-Term Planning<br/>Approach</span>
          </div>
          <div className="fs-why-box">
            <Lock size={28} />
            <span>Secure Investment<br/>Guidance</span>
          </div>
          <div className="fs-why-box">
            <MessageCircle size={28} />
            <span>Transparent<br/>Communication</span>
          </div>
          <div className="fs-why-box">
            <Headphones size={28} />
            <span>Professional<br/>Coordination</span>
          </div>
        </div>
      </section>

      {/* Support Process Timeline */}
      <section className="fs-process">
        <h2 className="fs-section-title reveal-fade-up">Our Financial Support Process</h2>
        
        <div className="fs-process-timeline reveal-stagger">
          <div className="fs-process-step">
            <div className="fs-process-num">01</div>
            <h4>Requirement Discussion</h4>
            <p>Initial consultation to identify your basic financial needs.</p>
          </div>
          <div className="fs-process-step">
            <div className="fs-process-num">02</div>
            <h4>Financial Goal<br/>Understanding</h4>
            <p>Detailed analysis of your long-term wealth and security objectives.</p>
          </div>
          <div className="fs-process-step">
            <div className="fs-process-num">03</div>
            <h4>Planning & Coordination</h4>
            <p>Structuring investment strategies and coordinating with providers.</p>
          </div>
          <div className="fs-process-step">
            <div className="fs-process-num">04</div>
            <h4>Ongoing Support &<br/>Guidance</h4>
            <p>Continuous portfolio monitoring and professional advisory.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="fs-cta-wrapper">
        <div className="fs-cta-banner reveal-scale-in">
          <div className="fs-cta-content">
            <h2>Start Building Your<br/>Financial Future</h2>
            <p>Connect with our support team for professional insurance and investment assistance. Let us help you navigate your path to wealth security.</p>
          </div>
          <div className="fs-cta-actions">
            <a href="/contact" className="fs-btn-gold">Schedule Consultation</a>
            <a href="https://wa.me/919035551777" className="fs-btn-dark-outline">
              <MessageSquare size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
    </main>
  );
}
