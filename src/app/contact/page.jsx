import React from "react";
import Link from "next/link";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Ready to Collaborate?</h1>
        <p className={styles.heroText}>
          Whether it's a digital project, community initiative, or
          collaboration opportunity, I'd love to hear from you.
        </p>
      </header>

      <div className={styles.contactGrid}>
        {/* Contact Info Section */}
        <section className={styles.connectSection}>
          <h2 className={styles.sectionTitle}>Connect With Me</h2>
          
          <p className={styles.connectText}>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your initiatives.
          </p>
          
          <ul className={styles.contactList}>
            <li className={styles.contactListItem}>
              <a href="mailto:admin@bwanji.digital" className={styles.link}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>admin@bwanji.digital</span>
              </a>
            </li>
            <li className={styles.contactListItem}>
              <a href="https://www.linkedin.com/in/larry-mwansa/" className={styles.link} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 17V13.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7.01L7.01 6.99889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li className={styles.contactListItem}>
              <a href="https://github.com/LarryMwansa" className={styles.link} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.6 4.09995C14.0661 3.65949 12.4339 3.65949 11 4.09995C9.1 2.79995 8 3.09995 8 3.09995C7.54548 4.11158 7.50947 5.26192 7.9 6.29995C7.06752 7.15726 6.60123 8.30492 6.6 9.49995C6.6 14.1 9.3 15.2 12.1 15.5C11.5 16.1 11.5 16.5 11.5 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li className={styles.contactListItem}>
              {/* <a href="https://twitter.com/yourusername" className={styles.link} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Twitter</span>
              </a> */}
            </li>
          </ul>
        </section>

        {/* Form Section */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.btnPrimary}>
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What services do you offer?</h3>
            <p className={styles.faqAnswer}>
              I provide web development, digital strategy consulting, and community project management services.
              Check out my <Link href="/services" className={styles.inlineLink}>services page</Link> for more details.
            </p>
          </div>
          
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How quickly do you respond to inquiries?</h3>
            <p className={styles.faqAnswer}>
              I typically respond to all messages within 24-48 hours during business days.
              For urgent matters, please indicate so in your message subject.
            </p>
          </div>
          
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Do you work with clients internationally?</h3>
            <p className={styles.faqAnswer}>
              Absolutely! I work with clients globally and have experience collaborating across different time zones.
            </p>
          </div>
          
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What's your project process like?</h3>
            <p className={styles.faqAnswer}>
              My process typically involves discovery, planning, implementation, and refinement stages.
              I maintain clear communication throughout to ensure your project meets all objectives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
