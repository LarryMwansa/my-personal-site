// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/banner.png"
          alt="Disruptors Banner"
          width={300}
          height={80}
          priority
        />
        <ol>
          <li>
            Welcome to the <code>the/disruptors-zone/larry-mwansa</code>.
          </li>
          <li>Checkout the other places below</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://bwanji.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/b.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Visit Bwanji Digital
          </a>
          <a
            href="https://ichebo.org"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Get Started
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          The HandBook
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Ichebo
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Community →
        </a>
      </footer>
    </div>
  );
}
