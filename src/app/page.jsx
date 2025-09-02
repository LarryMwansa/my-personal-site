import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <img src="/matt_cnbca.jpg" alt="" className={styles.heroBg} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Bridging Technology, Community, and Impact</h1>
          <p className={styles.heroSubtitle}>
            I design digital experiences, lead community initiatives, and help
            organizations thrive through technology and communications.
          </p>
          <div className={styles.buttonGroup}>
            <Link 
              href="/portfolio" 
              className={styles.btnPrimary}
              title="Explore Larry's Projects"
            >
              Explore My Work
            </Link>
            <Link 
              href="/contact" 
              className={styles.btnSecondary}
              title="Get in Touch with Larry"
            >
              Connect With Me
            </Link>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills Snapshot</h2>
          <p className={styles.sectionSubtitle}>Technical expertise and soft skills that drive results.</p>
        </div>
        <div className={styles.skills}>
          <span className={styles.skillTag} title="Python – Backend development & automation">Python</span>
          <span className={styles.skillTag} title="JavaScript – Frontend and dynamic web apps">JavaScript</span>
          <span className={styles.skillTag} title="React – Interactive UIs & SPA development">React</span>
          <span className={styles.skillTag} title="Django – Secure web frameworks">Django</span>
          <span className={styles.skillTag} title="API Integrations – Connect systems & services">API Integrations</span>
          <span className={styles.skillTag} title="Responsive Design – Mobile-friendly interfaces">Responsive Web Design</span>
          <span className={styles.skillTag} title="Media Strategy & Storytelling">Media Strategy</span>
          <span className={styles.skillTag} title="Event Coordination & Volunteer Management">Event Coordination</span>
          <span className={styles.skillTag} title="Public Speaking & Leadership">Leadership</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Some of the most impactful work I've delivered across tech and community initiatives.
          </p>
        </div>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Africa Music Conference Website</h3>
              <p className={styles.projectDescription}>
                Responsive design for 5000+ attendees, seamless event management features
                with integrated ticketing and scheduling.
              </p>
              <Link href="/portfolio" className={styles.projectLink}>
                View Project →
              </Link>
            </div>
          </div>
          
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Digital Studio E-commerce Platform</h3>
              <p className={styles.projectDescription}>
                Secure online payments, modern user experience, and analytics tracking
                for a digital creative studio selling design assets and courses.
              </p>
              <Link href="/portfolio" className={styles.projectLink}>
                View Project →
              </Link>
            </div>
          </div>
          
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Youth Outreach Platform</h3>
              <p className={styles.projectDescription}>
                Empowered volunteers and community members through a digital coordination hub
                that streamlined event planning and resource allocation.
              </p>
              <Link href="/portfolio" className={styles.projectLink}>
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
