import React, { useEffect } from 'react';
import Header from './components/Header';
import ConstructionContent from './components/ConstructionContent';
import Footer from './components/Footer';
import { useFloatingParticles, useProgressAnimation, useWelcomeMessage } from './hooks/useAnimations';
import './App.css';

function App() {
  // Activar todas las animaciones
  useFloatingParticles();
  useProgressAnimation(2000);
  useWelcomeMessage(1500);

  // Efecto de parallax en scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      const floatingElements = document.querySelector('.floating-elements');
      if (floatingElements) {
        floatingElements.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <ConstructionContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;