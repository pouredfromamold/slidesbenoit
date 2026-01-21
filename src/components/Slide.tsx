import React from 'react';
import './Slide.css';

interface SlideProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

// Liste des gradients disponibles
const GRADIENT_IMAGES = [
  '/images/gradient-blue.png',
  '/images/gradient-coral.png',
  '/images/gradient-purple.png',
];

export function Slide({ children, index = 0, className = '' }: SlideProps) {
  // Sélectionner le gradient en fonction de l'index de la slide
  const gradientImage = GRADIENT_IMAGES[index % GRADIENT_IMAGES.length];
  
  // Alterner la position du gradient (droite/gauche)
  const isOdd = index % 2 === 1;
  
  return (
    <div className={`slide ${className}`}>
      {/* Gradient décoratif en arrière-plan */}
      <div 
        className="slide-gradient-decoration"
        style={{
          backgroundImage: `url(${gradientImage})`,
          [isOdd ? 'left' : 'right']: '-100px',
          [isOdd ? 'bottom' : 'top']: '0',
        }}
      />
      
      {/* Contenu de la slide */}
      <div className="slide-content">
        {children}
      </div>
    </div>
  );
}
