import React from 'react';
import Link from 'next/link';
import styles from './services.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Solutions Tailored to Your Needs</h1>
        <p className={styles.heroSubtitle}>
          Delivering expertise in technology, communications, and community impact 
          to help your organization thrive in today's digital landscape
        </p>
      </header>

      {/* Services Grid */}
      <section>
        <div className={styles.servicesGrid}>
          {/* Service Card 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.serviceTitle}>Software Development</h2>
            <p className={styles.serviceDescription}>
              Custom web applications, e-commerce platforms, and API integrations designed to scale with your business.
            </p>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>Full-stack web applications</li>
              <li className={styles.serviceItem}>E-commerce solutions</li>
              <li className={styles.serviceItem}>API design and integration</li>
              <li className={styles.serviceItem}>Database architecture</li>
            </ul>
            <Link href="/contact" className={styles.learnMore}>
              Discuss a project →
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19V14M9 14V5M9 14H15M15 14V19M15 14V5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.serviceTitle}>Digital Strategy & Communications</h2>
            <p className={styles.serviceDescription}>
              SEO, social media campaigns, media outreach, and brand storytelling that connect with audiences.
            </p>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>Content strategy development</li>
              <li className={styles.serviceItem}>Social media management</li>
              <li className={styles.serviceItem}>SEO optimization</li>
              <li className={styles.serviceItem}>Brand storytelling</li>
            </ul>
            <Link href="/contact" className={styles.learnMore}>
              Elevate your brand →
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14L16 10M16 10L12 6M16 10H4M19 14V17C19 18.1046 18.1046 19 17 19H7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.serviceTitle}>Training & Consulting</h2>
            <p className={styles.serviceDescription}>
              Hands-on workshops and guidance in web development, blockchain, and digital skills for teams and individuals.
            </p>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>Technical skill workshops</li>
              <li className={styles.serviceItem}>Team capability building</li>
              <li className={styles.serviceItem}>Technology assessment</li>
              <li className={styles.serviceItem}>Digital transformation guidance</li>
            </ul>
            <Link href="/contact" className={styles.learnMore}>
              Empower your team →
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <h2 className={styles.processTitle}>My Process</h2>
        <div className={styles.processList}>
          <div className={styles.processStep}>
            <h3 className={styles.stepTitle}>1. Registration & Onboarding</h3>
            <p className={styles.stepText}>
              Create your account and share your business goals. This step ensures we understand your needs from the start.
            </p>
          </div>
          <div className={styles.processStep}>
            <h3 className={styles.stepTitle}>2. Service Selection & Consultation</h3>
            <p className={styles.stepText}>
              Choose from available solutions or request a custom service. Book a consultation to discuss your requirements and vision in detail.
            </p>
          </div>
          <div className={styles.processStep}>
            <h3 className={styles.stepTitle}>3. Project Planning & Interview</h3>
            <p className={styles.stepText}>
              We conduct a thorough interview to clarify objectives, then develop a tailored roadmap and strategy for your project.
            </p>
          </div>
          <div className={styles.processStep}>
            <h3 className={styles.stepTitle}>4. Development & Updates</h3>
            <p className={styles.stepText}>
              Your solution is built with regular progress updates and transparent communication throughout the process.
            </p>
          </div>
          <div className={styles.processStep}>
            <h3 className={styles.stepTitle}>5. Launch & Ongoing Support</h3>
            <p className={styles.stepText}>
              Go live with your project and receive ongoing support, maintenance, and opportunities for continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Let's Discuss Your Project</h2>
        <p className={styles.ctaText}>
          Ready to transform your ideas into reality? Let's collaborate to create solutions that drive meaningful results.
        </p>
        <Link href="/contact" className={styles.btnPrimary} title="Get in touch with Larry">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
