import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Quienes somos', href: '#quienes-somos' },
    { name: 'Que hacemos', href: '#que-hacemos' },
    { name: 'Misión', href: '#mision' },
    { name: 'Visión', href: '#vision' },
    { name: 'Proyectos con amor', href: '#proyectos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contáctanos', href: '#contacto' }
  ];

  return (
    <>
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-overlay" onClick={closeMenu}></div>
        <div className="menu-content">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a 
                  href={item.href} 
                  className="menu-link"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;