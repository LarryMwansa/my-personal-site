
import Link from 'next/link';
import styles from './blog.module.css';


const contentPillars = [
  {
    title: 'Emerging Tech Trends',
    desc: 'Latest developments in AI, blockchain, and automation.'
  },
  {
    title: 'Coding Tutorials & Guides',
    desc: 'Step-by-step solutions and practical coding advice.'
  },
  {
    title: 'Case Studies',
    desc: 'Success stories from tech and community projects.'
  },
  {
    title: 'Thought Leadership',
    desc: 'Exploring technology for social good.'
  }
];

const articles = [
  {
    title: 'Building Websites That Connect Communities',
    excerpt: 'How digital platforms foster engagement and impact.',
    slug: 'building-websites-that-connect-communities',
    image: '/public/banner.png',
    author: {
      name: 'Larry Mwansa',
      avatar: '/public/logo.svg'
    },
    featured: true,
    date: '2025-08-15',
    readTime: '4 min',
    tags: ['Case Study', 'Community']
  },
  {
    title: 'Blockchain Beyond Finance: Practical Applications',
    excerpt: 'Discover how blockchain is transforming industries outside finance.',
    slug: 'blockchain-beyond-finance-practical-applications',
    image: '/public/b.png',
    author: {
      name: 'Larry Mwansa',
      avatar: '/public/logo.svg'
    },
    featured: false,
    date: '2025-07-30',
    readTime: '6 min',
    tags: ['Tech', 'Blockchain']
  },
  {
    title: 'Digital Communications That Drive Engagement',
    excerpt: 'Strategies for effective digital outreach and campaigns.',
    slug: 'digital-communications-that-drive-engagement',
    image: '/public/banner.png',
    author: {
      name: 'Larry Mwansa',
      avatar: '/public/logo.svg'
    },
    featured: false,
    date: '2025-07-10',
    readTime: '5 min',
    tags: ['Marketing', 'Engagement']
  }
];

const Blog = () => {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Insights from the Digital Frontier</h1>
        <p className={styles.subtitle}>Explore trends, tutorials, case studies, and thought leadership from the intersection of technology and community.</p>
      </header>

      <section className={styles.pillarsSection}>
        <h2 className={styles.sectionTitle}>Content Pillars</h2>
        <div className={styles.pillarsGrid}>
          {contentPillars.map((pillar) => (
            <div key={pillar.title} className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.articlesSection}>
        <h2 className={styles.sectionTitle}>Featured Insights</h2>
        <div className={styles.featuredGrid}>
          {articles.filter(a => a.featured).map(article => (
            <div key={article.slug} className={styles.featuredCard}>
              <img src={article.image} alt={article.title} className={styles.featuredImage} />
              <div className={styles.featuredContent}>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <div className={styles.metaRow}>
                  <img src={article.author.avatar} alt={article.author.name} className={styles.authorAvatar} />
                  <span className={styles.authorName}>{article.author.name}</span>
                  <span className={styles.articleDate}>{article.date}</span>
                  <span className={styles.readTime}>{article.readTime}</span>
                </div>
                <div className={styles.tagsRow}>
                  {article.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <Link href={`/blog/${article.slug}`} className={styles.readMore}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2 className={styles.sectionTitle}>All Articles</h2>
        <div className={styles.articlesGrid}>
          {articles.filter(a => !a.featured).map(article => (
            <div key={article.slug} className={styles.articleCard}>
              <img src={article.image} alt={article.title} className={styles.articleImage} />
              <h4 className={styles.articleTitle}>{article.title}</h4>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              <div className={styles.metaRow}>
                <img src={article.author.avatar} alt={article.author.name} className={styles.authorAvatar} />
                <span className={styles.authorName}>{article.author.name}</span>
                <span className={styles.articleDate}>{article.date}</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
              <div className={styles.tagsRow}>
                {article.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <Link href={`/blog/${article.slug}`} className={styles.readMore}>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <Link href="/blog" className={styles.ctaButton}>
          Read More Insights
        </Link>
      </section>
    </div>
  );
};

export default Blog;