
import Link from 'next/link';
import styles from './blog.module.css';




const Blog = () => {
  return (
     <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Insights from the Digital Frontier</h1>
        <p className={styles.subtitle}>Our blog is launching soon! Stay tuned for fresh perspectives, tutorials, and case studies at the intersection of technology and community.</p>
      </header>
      <section className={styles.comingSoonSection}>
        <div className={styles.comingSoonCard}>
          <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
          <p className={styles.comingSoonText}>
            We're working on insightful articles and resources. Sign up below to be notified when we launch!
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Notified
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;