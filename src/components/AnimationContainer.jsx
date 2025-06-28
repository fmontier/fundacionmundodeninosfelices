import React from 'react';
import './AnimationContainer.css';

const AnimationContainer = () => {
  return (
    <div className="animation-container">
      <div className="construction-icon">
        <i className="fas fa-tools"></i>
      </div>
      <div className="floating-elements">
        <i className="fas fa-child floating-element-1"></i>
        <i className="fas fa-smile floating-element-2"></i>
        <i className="fas fa-heart floating-element-3"></i>
        <i className="fas fa-star floating-element-4"></i>
      </div>
    </div>
  );
};

export default AnimationContainer;