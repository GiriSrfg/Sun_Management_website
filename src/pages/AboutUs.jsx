import { Icon } from '../components/Icon';

const values = [
  {
    icon: 'shield',
    title: 'Integrity',
    text: 'Operating with honesty and high moral standards in every interaction.',
  },
  {
    icon: 'briefcase',
    title: 'Professionalism',
    text: 'Delivering excellence through skilled expertise and refined conduct.',
  },
  {
    icon: 'document',
    title: 'Transparency',
    text: 'Ensuring clear communication and open processes for all stakeholders.',
  },
  {
    icon: 'trend',
    title: 'Results-Driven',
    text: 'Focusing on measurable outcomes that drive financial recovery and growth.',
  },
]

const differences = [
  {
    icon: 'gavel',
    title: 'Ethical Methods',
    text: 'Our collection methods are strictly monitored for ethical compliance, ensuring respectful communication at all times.',
  },
  {
    icon: 'badge',
    title: 'Legal Compliance',
    text: 'We strictly adhere to RBI guidelines and international debt collection standards to protect your reputation.',
  },
  {
    icon: 'lock',
    title: 'Data Security',
    text: 'Encrypted data management systems ensure that sensitive financial information is always handled with the highest security.',
  },
]

export default function AboutUs() {
  return (
    <main>
      <section className="about-hero" id="top">
        <div className="hero-overlay">
          <h1>Commitment to Financial Integrity</h1>
          <p>
            Since our inception, Sun Management Services has been at the forefront of
            ethical debt recovery and financial verification. We navigate the
            complexities of financial resolution with unmatched professionalism and a
            steadfast dedication to compliance.
          </p>
        </div>
      </section>

      <section className="mission-vision" id="about" aria-label="Mission and vision">
        <article className="info-card">
          <div className="card-title">
            <span><Icon name="target" /></span>
            <h2>Our Mission</h2>
          </div>
          <p>
            To restore financial trust by providing compassionate yet effective debt
            recovery solutions. We act as a bridge between creditors and consumers,
            utilizing data-driven insights to resolve accounts while maintaining the
            dignity of every individual involved.
          </p>
        </article>

        <article className="info-card">
          <div className="card-title">
            <span><Icon name="eye" /></span>
            <h2>Our Vision</h2>
          </div>
          <p>
            To be the leading recovery partner in India, recognized for our innovation
            in verification technology and our unwavering commitment to ethical
            standards. We strive to set the industry benchmark for transparency and
            results in the financial services sector.
          </p>
        </article>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <h2>Our Core Values</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <span className="round-icon"><Icon name={value.icon} /></span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-copy">
          <h2>Our Story</h2>
          <p>
            Sun Management Services was founded with a single vision: to redefine the
            landscape of debt recovery in India. Our founder recognized a gap in the
            market, the need for a recovery agency that balanced aggressive results
            with ethical practices.
          </p>
          <p>
            What started as a small team of verification specialists has grown into a
            robust organization. Our journey is marked by a deep understanding of
            regional financial ecosystems and a commitment to investing in the latest
            compliance technologies.
          </p>
          <p>
            Today, we serve a diverse portfolio of institutional clients, from major
            banks to fintech startups, proving that financial resolution is most
            effective when grounded in integrity and strategic insight.
          </p>
        </div>
        <div className="handshake-visual" role="img" aria-label="Business partners shaking hands">
          <div className="sleeve sleeve-left"></div>
          <div className="sleeve sleeve-right"></div>
          <div className="hand hand-left"></div>
          <div className="hand hand-right"></div>
        </div>
      </section>

      <section className="difference-section" id="services">
        <div className="difference-heading">
          <h2>Why We Are Different</h2>
          <p>Setting new standards in the debt recovery industry.</p>
        </div>
        <div className="difference-grid">
          {differences.map((item) => (
            <article className="difference-item" key={item.title}>
              <span><Icon name={item.icon} /></span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-card">
          <h2>Ready to Resolve Your Portfolio?</h2>
          <p>
            Join dozens of financial institutions that trust Sun Management Services
            for efficient, ethical, and result-oriented debt recovery.
          </p>
          <a href="mailto:lourdraj@gettipick.in">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
