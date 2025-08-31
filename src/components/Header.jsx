'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <div className={styles.logoContainer}>
              <Image 
                src="/logo.svg" 
                alt="Larry Mwansa Profile Logo" 
                className={styles.logoImage}
                width={120}
                height={120}
              />
              <span className={styles.logoFallback}>Larry Mwansa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
            <Link href="/portfolio" className={styles.navLink}>
              Portfolio
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
            <Link href="/register" className={styles.getStartedBtn}>
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className={styles.hamburgerIcon}>
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            <div className={styles.mobileOverlay} onClick={closeMenu}></div>
            <div className={styles.mobileMenu}>
              <nav className={styles.mobileNav}>
                <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
                  About
                </Link>
                <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>
                  Services
                </Link>
                <Link href="/portfolio" className={styles.mobileNavLink} onClick={closeMenu}>
                  Portfolio
                </Link>
                <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
                  Contact
                </Link>
                <Link href="/register" className={styles.mobileGetStartedBtn} onClick={closeMenu}>
                  Get Started
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
