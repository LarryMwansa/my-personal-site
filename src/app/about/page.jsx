import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Meet Larry Mwansa</p>
          <h1 className={styles.title}>My Story</h1>
          <p className={styles.subtitle}>
            I've built my career at the intersection of technology and community
            impact. From developing secure web applications to leading
            communication campaigns for local initiatives, my goal is simple:
            create solutions that empower people and organizations.
          </p>
        </div>
        <div className={styles.buttonGroup}>
          <Link
            href="/contact"
            className={styles.btnPrimary}
            title="Get in touch with Larry"
          >
            Let's Discuss Your Project
          </Link>
          <Link
            href="/portfolio"
            className={styles.btnSecondary}
            title="Explore Larry's work"
          >
            See My Work
          </Link>
        </div>
      </header>

      {/* What Drives Me Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Drives Me</h2>
          <p className={styles.sectionText}>
            I'm motivated by projects that create meaningful change, whether
            it's a digital product solving a technical challenge or a community
            initiative transforming lives.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Core Values</h2>
        </div>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Integrity</h4>
            <p className={styles.valueText}>I deliver on my commitments</p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Innovation</h4>
            <p className={styles.valueText}>I find creative solutions to complex problems</p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Collaboration</h4>
            <p className={styles.valueText}>I work closely with teams and stakeholders</p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Community Focus</h4>
            <p className={styles.valueText}>I build projects that leave a positive impact</p>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Core Skills</h2>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Technical Skills</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                Full-Stack Development (React, Node.js, Express, MongoDB, SQL/NoSQL)
              </li>
              <li className={styles.skillItem}>
                Programming (Java, Python, C++, JavaScript, HTML5, CSS3)
              </li>
              <li className={styles.skillItem}>
                Emerging Technologies (AI, Automation, Blockchain, JAMStack)
              </li>
              <li className={styles.skillItem}>
                Cloud Platforms & APIs (integration, payment gateways)
              </li>
            </ul>
          </div>
          
          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Communications & Marketing</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>Public Relations & Media Outreach</li>
              <li className={styles.skillItem}>Content Strategy & Copywriting</li>
              <li className={styles.skillItem}>Digital Marketing (SEO, SEM, Social Media Campaigns)</li>
              <li className={styles.skillItem}>Event Promotion & Brand Management</li>
            </ul>
          </div>
          
          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Leadership & Training</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                Training Development & Facilitation (blockchain/web technologies)
              </li>
              <li className={styles.skillItem}>Cross-functional Team Management</li>
              <li className={styles.skillItem}>Project Coordination & Delivery</li>
              <li className={styles.skillItem}>Strategic Community Engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Soft Skills & Leadership</h2>
          <p className={styles.sectionText}>
            I lead cross-functional teams, mentor aspiring developers, and bring
            clarity to complex projects. For example, I coordinated a volunteer
            team to digitize community resources, reaching over 2,000 users.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>Team Leadership</li>
            <li className={styles.skillItem}>Mentoring</li>
            <li className={styles.skillItem}>Public Speaking</li>
            <li className={styles.skillItem}>Volunteer Coordination</li>
            <li className={styles.skillItem}>Project Management</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Let's Connect!</h2>
        <Link
          href="/contact"
          className={styles.btnPrimary}
          title="Get in Touch with Larry"
        >
          Connect With Me
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
