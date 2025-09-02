"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  const [bios, setBios] = useState([
    { label: "Full Bio", content: "" },
    { label: "Conference Bio", content: "" }
  ]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    Promise.all([
      fetch("/bio_multifocal.md").then((res) => res.text()),
      fetch("/bio_conference_ready.md").then((res) => res.text())
    ]).then(([multi, conf]) => {
      setBios([
        { label: "Full Bio", content: multi },
        { label: "Conference Bio", content: conf }
      ]);
    });
  }, []);

  return (
  <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src="/larry4.jpg"
            alt="Larry Mwansa"
            className={styles.heroImage}
            width={120}
            height={120}
            priority
          />
          <div>
            <p className={styles.eyebrow}>Meet Larry Mwansa</p>
            <h1 className={styles.title}>My Story</h1>
            <p className={styles.subtitle}>
              I've built my career at the intersection of technology and
              community impact. From developing secure web applications to
              leading communication campaigns for local initiatives, my goal is
              simple: create solutions that empower people and organizations.
            </p>
          </div>
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
            <p className={styles.valueText}>
              I find creative solutions to complex problems
            </p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Collaboration</h4>
            <p className={styles.valueText}>
              I work closely with teams and stakeholders
            </p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Community Focus</h4>
            <p className={styles.valueText}>
              I build projects that leave a positive impact
            </p>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
            Core Skills
          </h2>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3
              className={styles.skillCategoryTitle}
              style={{ textAlign: "center" }}
            >
              Technical Skills
            </h3>
            <p
              className={styles.skillCategoryDesc}
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              I design and build secure, scalable web applications using modern
              frameworks and languages, and integrate emerging technologies to
              solve complex problems.
            </p>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                Full-Stack Development (Django, React, Node.js, Express,
                MongoDB, SQL/NoSQL)
              </li>
              <li className={styles.skillItem}>
                Programming (Python, JavaScript, HTML5, CSS3)
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
            <h3
              className={styles.skillCategoryTitle}
              style={{ textAlign: "center" }}
            >
              Communications & Digital Marketing
            </h3>
            <p
              className={styles.skillCategoryDesc}
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              I craft compelling content, manage digital campaigns, and promote
              brands through strategic communications and media outreach.
            </p>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                Public Relations & Media Outreach
              </li>
              <li className={styles.skillItem}>
                Event Promotion & Brand Management
              </li>
              <li className={styles.skillItem}>
                Content Strategy & Copywriting
              </li>
              <li className={styles.skillItem}>Keyword Research</li>
              <li className={styles.skillItem}>SEO</li>
              <li className={styles.skillItem}>SEM</li>
              <li className={styles.skillItem}>Content Creation</li>
              <li className={styles.skillItem}>Social Media Management</li>
              <li className={styles.skillItem}>Email Marketing</li>
              <li className={styles.skillItem}>Data Analytics</li>
            </ul>
          </div>

          <div className={styles.skillCategory}>
            <h3
              className={styles.skillCategoryTitle}
              style={{ textAlign: "center" }}
            >
              Leadership, Training & Soft Skills
            </h3>
            <p
              className={styles.skillCategoryDesc}
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              I lead cross-functional teams, mentor aspiring developers, and
              bring clarity to complex projects. My experience includes
              training, facilitation, and coordinating volunteer efforts to
              digitize community resources, reaching over 2,000 users.
            </p>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                Training Development & Facilitation (blockchain/web
                technologies)
              </li>
              <li className={styles.skillItem}>
                Cross-functional Team Management
              </li>
              <li className={styles.skillItem}>
                Project Coordination & Delivery
              </li>
              <li className={styles.skillItem}>
                Strategic Community Engagement
              </li>
              <li className={styles.skillItem}>Team Leadership</li>
              <li className={styles.skillItem}>Mentoring</li>
              <li className={styles.skillItem}>Public Speaking</li>
              <li className={styles.skillItem}>Volunteer Coordination</li>
              <li className={styles.skillItem}>Project Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}

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

      {/* Tabbed Bios Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Bio</h2>
        <div className={styles.tabs}>
          {bios.map((bio, idx) => (
            <button
              key={bio.label}
              className={
                idx === activeTab
                  ? `${styles.tabBtn} ${styles.activeTab}`
                  : styles.tabBtn
              }
              onClick={() => setActiveTab(idx)}
            >
              {bio.label}
            </button>
          ))}
        </div>
        <div className={styles.bioCard}>
          <ReactMarkdown>{bios[activeTab].content}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
}
