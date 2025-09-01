import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <header>
        <div>
          <h3>Meet Larry Mwansa</h3>
          <h1>My Story</h1>
          <p>
            I’ve built my career at the intersection of technology and community
            impact. From developing secure web applications to leading
            communication campaigns for local initiatives, my goal is simple:
            create solutions that empower people and organizations.
          </p>
        </div>
        <div>
          <a href="/contact"
            class="btn-primary"
            title="Get in touch with Larry"
          >
            Let’s Discuss Your Project
          </a>
          <a
            href="/portfolio"
            class="btn-secondary"
            title="Explore Larry's work"
          >
            See My Work
          </a>
        </div>
      </header>
      <section>
        <div>
          <h2>What Drives Me</h2>
          <p>
            I’m motivated by projects that create meaningful change, whether
            it’s a digital product solving a technical challenge or a community
            initiative transforming lives.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Core Values</h2>
        </div>
        <ul>
          <li>
            <h4>Integrity</h4>
            <p>I deliver on my commitments</p>
          </li>
          <li>
            <h4>Innovation</h4>
            <p>I find creative solutions to complex problems</p>
          </li>
          <li>
            <h4>Collaboration</h4>
            <p>I work closely with teams and stakeholders</p>
          </li>
          <li>
            <h4>Community Focus</h4>
            <p>I build projects that leave a positive impact</p>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h2>Core Skills</h2>
          <ul>
            <li>
              <h4>Techical Skills</h4>
              <ul>
                <li>
                  Full-Stack Development (React, Node.js, Express, MongoDB,
                  SQL/NoSQL)
                </li>
                <li>
                  Programming (Java, Python, C++, JavaScript, HTML5, CSS3)
                </li>
                <li>
                  Emerging Technologies (AI, Automation, Blockchain, JAMStack)
                </li>
                <li>Cloud Platforms & APIs (integration, payment gateways)</li>
              </ul>
            </li>
            <li>
              <h4>Communications & Marketing</h4>
              <ul>
                <li>Public Relations & Media Outreach</li>
                <li>Content Strategy & Copywriting</li>
                <li>Digital Marketing (SEO, SEM, Social Media Campaigns)</li>
                <li>Event Promotion & Brand Management</li>
              </ul>
            </li>
            <li>
              <h4>Leadership & Training</h4>
              <p>
                I lead cross-functional teams, mentor aspiring developers, and
                bring clarity to complex projects. For example, I coordinated a
                volunteer team to digitize community resources, reaching over
                2,000 users.
              </p>
              <ul>
                <li>
                  Training Development & Facilitation (blockchain/web
                  technologies)
                </li>
                <li>Cross-functional Team Management</li>
                <li>Project Coordination & Delivery</li>
                <li>Strategic Community Engagement</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h2>Soft Skills & Leadership</h2>
          <p>
            I lead cross-functional teams, mentor aspiring developers, and bring
            clarity to complex projects. For example, I coordinated a volunteer
            team to digitize community resources, reaching over 2,000 users.
          </p>
          <p>
            Team leadership, mentoring, public speaking, volunteer coordination,
            project management
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Let's Connect!</h2>
        </div>
        <a
          href="/contact"
          class="btn-secondary"
          title="Get in Touch with Larry"
        >
          Connect With Me
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
