import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AnimationSection.css';

const AnimationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger animation when at least 30% is visible
    triggerOnce: false, // Always animate when text enters the viewport
  });

  return (
    <section ref={ref} className="animation-section container text-center">
      {/* Overlapping Floating Vectors */}
      <div className="vector-container position-relative">
        <img src="/vector1.png" alt="Vector 1" className="floating vector vector1 w-100" />
        <img src="/vector2.png" alt="Vector 2" className="floating vector vector2 w-20" />
        <img src="/vector3.png" alt="Vector 3" className="floating vector vector3 w-70" />
      </div>

      {/* Animated Text Below Images */}
      <div className="text-container">
        <h2 className={`line-1 ${inView ? 'animate' : ''} fs-1`}>
          Which is just 4 simple steps away
        </h2>
        <h2 className={`line-2 ${inView ? 'animate' : ''} fs-1`}>
          from joining the Neato Journey.
        </h2>
      </div>
    </section>
  );
};

export default AnimationSection;
