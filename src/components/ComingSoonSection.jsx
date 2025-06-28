import React from 'react';
import './ComingSoonSection.css';

const comingSoonItems = [
  'Nuestros programas y proyectos',
  'Historias de éxito e impacto',
  'Formas de colaborar y donar',
  'Eventos y actividades',
  'Galería de momentos especiales'
];

const ComingSoonSection = () => {
  return (
    <div className="coming-soon">
      <h3>¡Muy Pronto Podrás Disfrutar De:</h3>
      <ul>
        {comingSoonItems.map((item, index) => (
          <li key={index}>
            <i className="fas fa-check"></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComingSoonSection;