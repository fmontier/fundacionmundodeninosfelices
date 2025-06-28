import React, { useState } from 'react';
import './FeatureSection.css';

const features = [
  {
    icon: 'fas fa-hand-holding-heart',
    title: 'Nuestra Misión',
    description: 'Dedicados a mejorar la vida de los niños y crear sonrisas duraderas'
  },
  {
    icon: 'fas fa-users',
    title: 'Comunidad',
    description: 'Construyendo una red de apoyo para familias y niños en necesidad'
  },
  {
    icon: 'fas fa-globe-americas',
    title: 'Impacto Global',
    description: 'Creando cambios positivos que trascienden fronteras'
  }
];

const FeatureSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="features">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`feature ${hoveredFeature === index ? 'feature-hovered' : ''}`}
          onMouseEnter={() => setHoveredFeature(index)}
          onMouseLeave={() => setHoveredFeature(null)}
        >
          <i className={feature.icon}></i>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;