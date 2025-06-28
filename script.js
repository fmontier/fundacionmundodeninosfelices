// Animaciones y efectos interactivos para la página de construcción
document.addEventListener('DOMContentLoaded', function() {
    
    // Efecto de partículas flotantes
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.innerHTML = ['❤️', '🌟', '😊', '🎈', '🌈'][Math.floor(Math.random() * 5)];
        
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
            particle.remove();
        }, 7000);
    }
    
    // Agregar keyframes para la animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Crear partículas cada cierto tiempo
    setInterval(createFloatingParticle, 3000);
    
    // Efecto de hover en las características
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animación de contador de progreso (simulado)
    function animateProgress() {
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
        
        // Animar el contador
        let progress = 0;
        const progressNumber = document.getElementById('progress-number');
        const interval = setInterval(() => {
            progress += Math.random() * 3;
            if (progress >= 85) {
                progress = 85;
                clearInterval(interval);
                setTimeout(() => {
                    progressText.style.animation = 'slideOutRight 1s ease-out forwards';
                    setTimeout(() => progressText.remove(), 1000);
                }, 3000);
            }
            progressNumber.textContent = Math.floor(progress);
        }, 100);
    }
    
    // Agregar estilos para las animaciones del progreso
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(progressStyle);
    
    // Iniciar animación de progreso después de 2 segundos
    setTimeout(animateProgress, 2000);
    
    // Efecto de click en los iconos sociales
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            // Mostrar mensaje
            showMessage('¡Próximamente tendremos nuestras redes sociales activas!');
        });
    });
    
    // Función para mostrar mensajes temporales
    function showMessage(text) {
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
            setTimeout(() => message.remove(), 300);
        }, 2000);
    }
    
    // Agregar estilos para mensajes y ripple
    const messageStyle = document.createElement('style');
    messageStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes fadeOutScale {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(messageStyle);
    
    // Efecto de parallax suave en el scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const floatingElements = document.querySelector('.floating-elements');
        if (floatingElements) {
            floatingElements.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Mensaje de bienvenida después de cargar
    setTimeout(() => {
        showMessage('¡Bienvenido! Estamos construyendo algo especial para ti 🌟');
    }, 1500);
});