// src/components/Contact.js
import React from 'react';
import { FaEnvelope, FaDiscord, FaGithub } from 'react-icons/fa'; 
import './Contact.css';

const Contact = () => {
  return (
    <main className="content">
      <section className="contact">
        <h2>Contact Me</h2>
        <ul className="contact-list">
          <li>
            <FaEnvelope className="contact-icon" />
            <a href="mailto:rafbizachi5@gmail.com">rafbizachi5@gmail.com</a>
          </li>
          
          <li>
            <FaGithub className="contact-icon" />
            <a href="https://github.com/RafaelRBizachi" target="_blank" rel="noopener noreferrer">
              github.com/RafaelRBizachi
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
