import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* About */}
          <div className={styles.footerSection}>
            <h4>About</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog/coming-soon" className={styles.footerLink}>
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className={styles.footerSection}>
            <h4>Projects</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/portfolio" className={styles.footerLink}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.footerLink}>
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.footerLink}>
                  Community Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href="mailto:admin@bwanji.digital"
                  className={styles.footerLink}
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/larry-mwansa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/LarryMwansa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+270688226285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* External */}
          <div className={styles.footerSection}>
            <h4>External</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href="https://www.bwanji.digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Bwanji Digital
                </a>
              </li>
              <li>
                <a
                  href="https://www.techcon.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  TechCon
                </a>
              </li>
              <li>
                <a
                  href="https://www.uaba.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  UABA
                </a>
              </li>
              <li>
                <a
                  href="https://www.amc.cx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  AMC
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerDivider}>
          <p className={styles.copyright}>
            © 2025 Bwanji. All rights reserved. Building digital futures, one
            project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
