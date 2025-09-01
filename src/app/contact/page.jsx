import React from "react";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <header>
        <div>
          <h3>Ready to Collaborate?</h3>
          <h1>Ready to Collaborate?</h1>
          <p>
            Whether it’s a digital project, community initiative, or
            collaboration opportunity, I’d love to hear from you.
          </p>
        </div>
      </header>
      <section>
        <h2>Contact Options</h2>
        <div>
          <div>
            <ul>
              <li>
                <a href="mailto:">Email</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li></li>
            </ul>
          </div>
          <div>
            <form>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" class="btn-primary">
                Send A Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
