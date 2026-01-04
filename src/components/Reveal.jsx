import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // On arrête d'observer une fois affiché
        }
      },
      { threshold: 0.1 } // Déclenche quand 10% de l'élément est visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  // Ajoute la classe d'animation seulement si visible
  const animationClass = isVisible ? `reveal-on-scroll` : 'opacity-0 translate-y-10';
  
  // Convertit le délai (ex: 200) en style (0.2s)
  const styleDelay = { animationDelay: `${delay}ms` };

  return (
    <div ref={ref} className={`${className} ${animationClass} transition-all duration-700`} style={styleDelay}>
      {children}
    </div>
  );
};

export default Reveal;