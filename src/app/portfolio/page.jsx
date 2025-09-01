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
          {/* Project Card 1: Africa Music Conference Website */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/banner.png"
                alt="Africa Music Conference website screenshot"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Africa Music Conference Website</h3>
              <p className={styles.projectTagline}>
                AMC unites Africa's creatives, music professionals, and artists to foster innovation and growth. The conference pioneers blockchain adoption in the music industry, empowering creators with decentralized royalties, IP protection, and fair distribution. Features include business collaborations, speed networking, artist showcases, panel discussions, and live entertainment.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>Django</span>
                <span className={styles.techTag}>JavaScript</span>
                <span className={styles.techTag}>Blockchain</span>
                <span className={styles.techTag}>Events</span>
              </div>
              <Link
                href="https://www.amc.cx/"
                className={styles.btnCard}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Africa Music Conference Website"
              >
                Visit Site
              </Link>
            </div>
          </div>

          {/* Project Card 2: Digital Studio E-commerce Platform */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/b.png"
                alt="Digital Studio e-commerce website screenshot"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Digital Studio E-commerce Platform</h3>
              <p className={styles.projectTagline}>
                Bwanji Digital delivers fast, affordable web design and hosting, with a complete suite of digital solutions for businesses. Services include custom web and mobile app development, DevOps, graphic design, digital marketing, and startup incubation. The platform is undergoing phased changes to enhance user experience and expand features.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>Python</span>
                <span className={styles.techTag}>DevOps</span>
                <span className={styles.techTag}>E-commerce</span>
              </div>
              <Link
                href="https://www.bwanji.digital/"
                className={styles.btnCard}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Digital Studio E-commerce Platform"
              >
                Visit Site
              </Link>
            </div>
          </div>

          {/* Project Card 3: TechCon (replaces Youth Outreach) */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/techcon-logo.png" // Add logo to public folder if not present
                alt="TechCon Conference Logo"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>TechCon</h3>
              <p className={styles.projectTagline}>
                Africa's premier multi-platform technology conference, uniting top tech minds, decision-makers, and disruptors to explore the transformative power of technology. Features hands-on workshops, blockchain labs, case studies, and networking with industry leaders.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>Blockchain</span>
                <span className={styles.techTag}>AI</span>
                <span className={styles.techTag}>Fintech</span>
                <span className={styles.techTag}>Web</span>
              </div>
              <Link
                href="https://www.techcon.tech/"
                className={styles.btnCard}
                target="_blank"
                rel="noopener noreferrer"
                title="View project details for TechCon Conference"
              >
                Visit Site
              </Link>
            </div>
          </div>

          {/* Project Card 4: UABA (replaces Media Campaign) */}
          <div className={styles.projectCard} title="Click to view full project details">
            <div className={styles.imageContainer}>
              <Image
                src="/uaba-logo.png" // Add logo to public folder if not present
                alt="UABA Logo"
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>United Africa Blockchain Association (UABA)</h3>
              <p className={styles.projectTagline}>
                Building Africa's digital revolution by connecting innovators, governments, and businesses to harness the power of blockchain for a better, more inclusive future. UABA leads education, advocacy, and strategic initiatives, empowering communities and fostering collaboration across the continent.
              </p>
              <div className={styles.techTags}>
                <span className={styles.techTag}>Blockchain</span>
                <span className={styles.techTag}>Education</span>
                <span className={styles.techTag}>Community</span>
                <span className={styles.techTag}>Web</span>
              </div>
              <Link
                href="https://www.uaba.io/"
                className={styles.btnCard}
                target="_blank"
                rel="noopener noreferrer"
                title="View project details for UABA"
              >
                Visit Site
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
