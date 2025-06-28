import React from 'react';
import { useWelcomeMessage } from '../hooks/useAnimations';
import './Footer.css';

const socialLinks = [
  { icon: 'fab fa-facebook', title: 'Facebook', href: '#' },
  { icon: 'fab fa-instagram', title: 'Instagram', href: '#' },
  { icon: 'fab fa-twitter', title: 'Twitter', href: '#' },
  { icon: 'fab fa-linkedin', title: 'LinkedIn', href: '#' }
];

const Footer = () => {
  const { showMessage } = useWelcomeMessage(0); // No delay for manual trigger

  const handleSocialClick = (e) => {
    e.preventDefault();
    
    // Crear efecto de ripple
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      margin-left: -10px;
      margin-top: -10px;
    `;
    
    e.currentTarget.style.position = 'relative';
    e.currentTarget.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
    showMessage('¡Próximamente tendremos nuestras redes sociales activas!');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="website-info">
          <p className="website-name"><strong>fundacionmundodeninosfelices.org</strong></p>
          <p>Construyendo sueños, creando sonrisas</p>
        </div>
        <div className="social-links">
          <p>Síguenos en nuestras redes sociales:</p>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                title={link.title}
                onClick={handleSocialClick}
                className="social-link"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Fundación Mundo de Niños Felices. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;