import React from 'react';
import { useRouter } from 'next/router';
import styles from './[slug].module.css';

const articles = {
  'building-websites-that-connect-communities': {
    title: 'Building Websites That Connect Communities',
    content: 'Full article content goes here...'
  },
  'blockchain-beyond-finance-practical-applications': {
    title: 'Blockchain Beyond Finance: Practical Applications',
    content: 'Full article content goes here...'
  },
  'digital-communications-that-drive-engagement': {
    title: 'Digital Communications That Drive Engagement',
    content: 'Full article content goes here...'
  }
};

const BlogPost = ({ params }) => {
  const { slug } = params;
  const article = articles[slug];

  if (!article) {
    return <div className={styles.notFound}>Article not found.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{article.title}</h1>
      <div className={styles.content}>{article.content}</div>
    </div>
  );
};

export default BlogPost;
