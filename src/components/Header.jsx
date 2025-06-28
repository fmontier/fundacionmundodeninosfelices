import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-heart logo-icon"></i>
        <h1 className="logo-title">Fundación Mundo de Niños Felices</h1>
      </div>
      <HamburgerMenu />
    </header>
  );
};

export default Header;