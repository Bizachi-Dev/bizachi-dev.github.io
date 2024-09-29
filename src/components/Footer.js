// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <main className="content">
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Bizachi_Dev. All rights reserved.</p>
    </footer>
    </main>
  );
};

export default Footer;
