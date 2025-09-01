import React from "react";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Ready to Collaborate?</h1>
        <p className={styles.headerText}>
          Whether it's a digital project, community initiative, or
          collaboration opportunity, I'd love to hear from you.
        </p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.heading}>Contact Options</h2>
        <ul className={styles.contactList}>
          <li className={styles.contactListItem}>
            <a href="mailto:your@email.com" className={styles.link}>
              Email
            </a>
          </li>
          <li className={styles.contactListItem}>
            <a href="https://linkedin.com/in/yourprofile" className={styles.link} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.input}
          />
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.btnPrimary}>
            Send A Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
