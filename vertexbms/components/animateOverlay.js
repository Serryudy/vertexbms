import React, { useEffect, useState } from 'react';

const AnimatedOverlay = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Add a small threshold (e.g., 10px) to account for rounding errors
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setIsBottom(true); // Trigger animation
      } else {
        setIsBottom(false); // Reset animation
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {/* Orange Div that slides up first */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'orange',
          zIndex: 1,
          transform: isBottom ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 1s ease-in-out', // Smooth slide animation
        }}
      ></div>

      {/* Green Div that slides up to cover the orange div */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'green',
          zIndex: 2,
          transform: isBottom ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 1s ease-in-out 0.5s', // Smooth slide animation with delay
        }}
      ></div>
    </div>
  );
};

export default AnimatedOverlay;