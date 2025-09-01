import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <h1>Larry Mwansa | Bridging Technology, Community, and Impact</h1>
          <p>
            I design digital experiences, lead community initiatives, and help
            organizations thrive through technology and communications.
          </p>
        </div>
        <div>
          <a
            href="/portfolio"
            className="btn-primary"
            title="Explore Larry's Projects"
          >
            Explore My Work
          </a>
          <a
            href="/contact"
            className="btn-secondary"
            title="Get in Touch with Larry"
          >
            Connect With Me
          </a>
        </div>
      </header>
      <section>
        <div>
          <h2>Skills Snapshot</h2>
          <p>Technical expertise and soft skills that drive results.</p>
        </div>
  <div className="skills">
          <span title="Python – Backend development & automation">Python</span>
          <span title="JavaScript – Frontend and dynamic web apps">
            JavaScript
          </span>
          <span title="React – Interactive UIs & SPA development">React</span>
          <span title="Django – Secure web frameworks">Django</span>
          <span title="API Integrations – Connect systems & services">
            API Integrations
          </span>
          <span title="Responsive Design – Mobile-friendly interfaces">
            Responsive Web Design
          </span>
          <span title="Media Strategy & Storytelling">Media Strategy</span>
          <span title="Event Coordination & Volunteer Management">
            Event Coordination
          </span>
          <span title="Public Speaking & Leadership">Leadership</span>
        </div>
      </section>
      <section>
        <div>
          <h2>Featured Projects</h2>
          <p>
            Some of the most impactful work I’ve delivered across tech and
            community initiatives.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <h3>Africa Music Conference Website</h3>
              <p>
                Responsive design for 5000+
              attendees, seamless event management features
              </p>
            </li>
            <li>
              <h3>Digital Studio E-commerce Platform</h3>
              <p>Secure online payments, modern user experience, and analytics tracking.</p>
            </li>
            <li>
              <h3>Youth Outreach Platform</h3>
              <p>Empowered volunteers and community members through a digital coordination hub.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
