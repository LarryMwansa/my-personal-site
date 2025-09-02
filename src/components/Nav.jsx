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
                {/* Inline SVG logo, stroke adapts to theme color */}
                <svg
                  className={styles.logoImage}
                  width="120"
                  height="120"
                  viewBox="0 0 2000 2000"
                  aria-label="Larry Mwansa Profile Logo"
                  role="img"
                  style={{ display: 'block' }}
                >
                  <g>
                    <path
                      d="M597.44,551.15c122.81,41.46,259.27,41.23,381.94-0.63c-10.15,139.93-20.29,279.87-30.44,419.8c-7.03,96.88-14.05,194.19-6.57,291.03" 
                      stroke="var(--color-accent, #231F20)"
                      strokeWidth="100"
                      strokeMiterlimit="10"
                      fill="none"
                    />
                    <path
                      d="M926.87,884.28c-139.94-18.12-279.88-36.25-419.82-54.37c-22.61,138.64-45.22,277.28-67.82,415.92c146.31-64.23,305.4-99.18,465.16-102.2c-187.44,107.78-335.22,282.87-409.98,485.76" 
                      stroke="var(--color-accent, #231F20)"
                      strokeWidth="100"
                      strokeMiterlimit="10"
                      fill="none"
                    />
                    <path
                      d="M1452.39,406.6c-91.38,27.79-171.01,86.34-236.98,155.41c-65.97,69.07-119.57,148.81-172.83,228.1c128.17-69.17,281.1-91.26,423.6-61.17c-34.08,177.11-50.32,357.64-48.4,537.99c-43.18-45.41-89.78-88.75-145.04-118.29c-55.26-29.54-120.41-44.38-181.44-30.19c51.19,4.37,96.98,36.29,128.7,76.71c31.71,40.42,51.21,88.92,68.57,137.28c20.37,56.73,38.4,114.31,54.02,172.53" 
                      stroke="var(--color-accent, #231F20)"
                      strokeWidth="100"
                      strokeMiterlimit="10"
                      fill="none"
                    />
                  </g>
                </svg>
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
            {/* <Link href="/blog/coming-soon" className={styles.navLink}>
              Insights
            </Link> */}
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
                {/* <Link href="/blog/coming-soon" className={styles.mobileNavLink} onClick={closeMenu}>
                  Insights
                </Link> */}
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
