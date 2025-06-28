import React from 'react';
import AnimationContainer from './AnimationContainer';
import FeatureSection from './FeatureSection';
import ComingSoonSection from './ComingSoonSection';
import './ConstructionContent.css';

const ConstructionContent = () => {
  return (
    <main className="main-content">
      <div className="construction-content">
        <AnimationContainer />
        
        <h2 className="main-title">¡Sitio en Construcción!</h2>
        <p className="main-message">
          Estamos trabajando arduamente para crear una experiencia maravillosa 
          donde podrás conocer más sobre nuestra labor y cómo ayudamos a 
          construir un mundo de niños felices.
        </p>
        
        <FeatureSection />
        <ComingSoonSection />
      </div>
    </main>
  );
};

export default ConstructionContent;