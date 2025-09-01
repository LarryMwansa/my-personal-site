import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.title}>Selected Projects</h1>
        <p className={styles.subtitle}>
          Showcasing my work across web development, design, and community initiatives
        </p>
      </header>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {/* Project Card 1 */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/banner.png" // Using a placeholder from your public folder
                alt="Africa Music Conference website screenshot"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Africa Music Conference Website</h3>
              <p className={styles.projectTagline}>
                Seamless online registration and event management for 5,000+
                attendees.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>Django</span>
                <span className={styles.techTag}>JavaScript</span>
                <span className={styles.techTag}>Bootstrap</span>
              </div>
              <Link
                href="/portfolio/africa-music-conference"
                className={styles.btnCard}
                title="View project details for Africa Music Conference Website"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/b.png" // Using a placeholder from your public folder
                alt="Digital Studio e-commerce website screenshot"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Digital Studio E-commerce Platform</h3>
              <p className={styles.projectTagline}>
                Modern UX and secure payments driving 30% sales growth.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>Python</span>
                <span className={styles.techTag}>Stripe API</span>
              </div>
              <Link
                href="/portfolio/digital-studio"
                className={styles.btnCard}
                title="View project details for Digital Studio E-commerce Platform"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/window.svg" // Using a placeholder from your public folder
                alt="Youth Outreach Platform dashboard screenshot"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Youth Outreach Platform</h3>
              <p className={styles.projectTagline}>
                Connecting volunteers and community members digitally for
                meaningful impact.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>Django</span>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>PostgreSQL</span>
              </div>
              <Link
                href="/portfolio/youth-outreach"
                className={styles.btnCard}
                title="View project details for Youth Outreach Platform"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/globe.svg" // Using a placeholder from your public folder
                alt="Media campaign portal interface screenshot"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Media Campaign Portal</h3>
              <p className={styles.projectTagline}>
                Streamlined campaign management for community organizations.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>Node.js</span>
                <span className={styles.techTag}>AWS</span>
              </div>
              <Link
                href="/portfolio/media-campaign"
                className={styles.btnCard}
                title="View project details for Media Campaign Portal"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Let's Connect!</h2>
        <Link href="/contact" className={styles.btnSecondary} title="Get in touch with Larry">
          Discuss Your Project
        </Link>
      </section>
    </div>
  );
};

export default PortfolioPage;
