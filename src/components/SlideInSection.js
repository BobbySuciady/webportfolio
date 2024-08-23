import React from 'react';
import { useInView } from 'react-intersection-observer';

const SlideInSection = ({ children, direction = "left" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationClass = direction === "left" ? "slide-in-left" : "slide-in-right";

  return (
    <div ref={ref} className={`${animationClass} ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default SlideInSection;
