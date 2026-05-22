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
          
          <form className="callback-form-full">
            <div className="form-row">
              <div className="form-group-full form-input-animate">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group-full form-input-animate">
                <label>Company Name</label>
                <input type="text" placeholder="Global Enterprises Inc." />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group-full form-input-animate">
                <label>Work Email</label>
                <input type="email" placeholder="john@company.com" />
              </div>
              <div className="form-group-full form-input-animate">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 90000 00000" />
              </div>
            </div>
            
            <div className="form-group-full form-input-animate">
              <label>Service Interested In</label>
              <select>
                <option>Collections Recovery</option>
                <option>Personal Loan EMI Support</option>
                <option>Payroll Compliance</option>
                <option>Financial Services</option>
              </select>
            </div>
            
            <div className="form-group-full form-input-animate">
              <label>Message</label>
              <textarea rows="4" placeholder="How can we assist you with your portfolio today?"></textarea>
            </div>
            
            <button type="submit" className="btn-primary-submit">
              Submit Inquiry <Send size={16} />
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
