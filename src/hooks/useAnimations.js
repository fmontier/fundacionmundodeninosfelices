import { useEffect, useCallback } from 'react';

export const useFloatingParticles = () => {
  const createFloatingParticle = useCallback(() => {
    const particles = ['❤️', '🌟', '😊', '🎈', '🌈'];
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
    
    particle.style.cssText = `
      position: fixed;
      font-size: ${Math.random() * 20 + 10}px;
      left: ${Math.random() * 100}vw;
      top: 100vh;
      z-index: 1000;
      pointer-events: none;
      animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, 7000);
  }, []);

  useEffect(() => {
    const interval = setInterval(createFloatingParticle, 3000);
    return () => clearInterval(interval);
  }, [createFloatingParticle]);

  return null;
};

export const useProgressAnimation = (delay = 2000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const progressText = document.createElement('div');
      progressText.className = 'progress-indicator';
      progressText.innerHTML = `
        <div style="
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(255, 107, 107, 0.9);
          color: white;
          padding: 15px 20px;
          border-radius: 50px;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          z-index: 1000;
          animation: slideInRight 1s ease-out;
        ">
          🚧 Progreso: <span id="progress-number">0</span>%
        </div>
      `;
      
      document.body.appendChild(progressText);
      
      let progress = 0;
      const progressNumber = document.getElementById('progress-number');
      const interval = setInterval(() => {
        progress += Math.random() * 3;
        if (progress >= 85) {
          progress = 85;
          clearInterval(interval);
          setTimeout(() => {
            progressText.style.animation = 'slideOutRight 1s ease-out forwards';
            setTimeout(() => {
              if (progressText.parentNode) {
                progressText.remove();
              }
            }, 1000);
          }, 3000);
        }
        if (progressNumber) {
          progressNumber.textContent = Math.floor(progress);
        }
      }, 100);
      
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);
};

export const useWelcomeMessage = (delay = 1500) => {
  const showMessage = useCallback((text) => {
    const message = document.createElement('div');
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 20px 30px;
      border-radius: 10px;
      z-index: 10000;
      animation: fadeInScale 0.3s ease-out;
      text-align: center;
      max-width: 300px;
      font-weight: 600;
    `;
    message.textContent = text;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.style.animation = 'fadeOutScale 0.3s ease-out forwards';
      setTimeout(() => {
        if (message.parentNode) {
          message.remove();
        }
      }, 300);
    }, 2000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      showMessage('¡Bienvenido! Estamos construyendo algo especial para ti 🌟');
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showMessage]);

  return { showMessage };
};