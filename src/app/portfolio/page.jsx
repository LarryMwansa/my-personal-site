import React from "react";
import styles from "./portfolio.module.css";

const PortfolioPage = () => {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Selected Projects</h1>
        <p className={styles.description}>Welcome to my portfolio page!</p>
      </header>
      <section>
        <div>
          <div class="project-card" title="Click to view full project details">
            <img
              src="path/to/image.jpg"
              alt="Africa Music Conference website screenshot"
            />
            <h3>Africa Music Conference Website</h3>
            <p class="tagline">
              Seamless online registration and event management for 5,000+
              attendees.
            </p>
            <span class="tech">Django, JavaScript, Bootstrap</span>
            <a
              href="/portfolio/africa-music-conference"
              class="btn-card"
              title="View project details for Africa Music Conference Website"
            >
              View Project
            </a>
          </div>
          <div class="project-card" title="Click to view full project details">
            <img
              src="path/to/digital-studio.jpg"
              alt="Digital Studio e-commerce website screenshot"
            />
            <h3>Digital Studio E-commerce Platform</h3>
            <p class="tagline">
              Modern UX and secure payments driving 30% sales growth.
            </p>
            <span class="tech">React, Python, Stripe API</span>
            <a
              href="/portfolio/digital-studio"
              class="btn-card"
              title="View project details for Digital Studio E-commerce Platform"
            >
              View Project
            </a>
          </div>
          <div class="project-card" title="Click to view full project details">
            <img
              src="path/to/youth-platform.jpg"
              alt="Youth Outreach Platform dashboard screenshot"
            />
            <h3>Youth Outreach Platform</h3>
            <p class="tagline">
              Connecting volunteers and community members digitally for
              meaningful impact.
            </p>
            <span class="tech">Django, React, PostgreSQL</span>
            <a
              href="/portfolio/youth-outreach"
              class="btn-card"
              title="View project details for Youth Outreach Platform"
            >
              View Project
            </a>
          </div>
          <div class="project-card" title="Click to view full project details">
            <img
              src="path/to/media-portal.jpg"
              alt="Media campaign portal interface screenshot"
            />
            <h3>Media Campaign Portal</h3>
            <p class="tagline">
              Streamlined campaign management for community organizations.
            </p>
            <span class="tech">React, Node.js, AWS</span>
            <a
              href="/portfolio/media-campaign"
              class="btn-card"
              title="View project details for Media Campaign Portal"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Let's Connect!</h2>
        </div>
        <a href="/portfolio" class="btn-secondary" title="Explore Larry's work">
          See More Projects
        </a>
      </section>
    </div>
  );
};

export default PortfolioPage;
