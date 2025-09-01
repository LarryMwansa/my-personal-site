"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

// Theme toggle logic and component
const themes = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function applyTheme(theme) {
  if (typeof window !== "undefined") {
    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }
}

function getInitialTheme() {
  if (typeof window === "undefined") return "system";
  
  // Try to get saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;
  
  // If no saved theme, check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return "dark";
  }
  
  return "light";
}

function ThemeToggle() {
  // Use a safer initialization approach with useState+useEffect
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('system'); // Default placeholder
  
  // Only run on client, not during SSR
  useEffect(() => {
    setMounted(true);
    setTheme(getInitialTheme());
  }, []);
  
  // Apply theme effect
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  // Handle theme change
  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
  };
  
  // Don't render the actual select until client-side
  if (!mounted) {
    return <div className={styles.themeToggle}>
      <div className={styles.themeSelect} style={{width: '90px', height: '35px'}}></div>
    </div>;
  }

  return (
    <div className={styles.themeToggle}>
      <select
        value={theme}
        onChange={handleThemeChange}
        aria-label="Theme mode"
        className={styles.themeSelect}
      >
        {themes.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navigation}>
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
            <ThemeToggle />
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
    </nav>
  );
}
