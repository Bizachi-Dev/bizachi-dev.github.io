import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/BizachiLogo.png';

const Header = () => {
  return (
    <main className="content">
      <header className="header">       
        <div className="logo-title">
          <img src={logo} alt="Bizachi_Dev Logo" className="logo" />
          <h1><span className="brand">Bizachi_Dev</span><span className="title">      Portfolio</span></h1>   
        </div>
        {/* Navigation menu */}
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default Header;
