'use client';
import React from 'react';

const IPhoneDisplay = () => {
  return (
    <div className="iphone-container position-relative mx-auto">
      {/* iPhone Frame */}
      <img 
        src="/iphone.png" 
        alt="iPhone frame" 
        className="w-100 position-relative"
      />

      {/* Screen Content */}
      <div className="screen-content position-absolute text-center">
        <div className="app-content">
          <h4 className="text-white mb-4 fw-normal">
            Here to mend your<br />
            world with care and<br />
            a smile, one fix at a<br />
            time.
          </h4>
          <button className="btn w-75 mb-3 bg-white text-dark py-2">
            I have an account
          </button>
          <button 
            className="btn w-75 mb-3 py-2" 
            style={{ backgroundColor: '#F06513', color: 'white' }}>
            I'm new here
          </button>
          <p className="text-white text-opacity-75 fs-15 mb-0">
            or let us take on the job from<br />
            start to finish.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .iphone-container {
          width: 350px;
          max-width: 100%;
        }

        /* Ensure the screen content is positioned correctly */
        .screen-content {
          top: 30%; /* Adjust this value to align with the iPhone screen */
          left: 7%;
          right: 7%;
          bottom: 10%; /* Adjust this value to align with the iPhone screen */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2; /* Ensure it's above the iPhone frame */
        }

        /* Ensure the text is visible */
        .app-content {
          width: 100%;
          padding: 0 15px;
        }

        .app-content h2 {
          font-size: 1.75rem;
          line-height: 1.4;
          letter-spacing: 0.5px;
          color: white !important; /* Force white color */
        }

        /* Button styling */
        .btn {
          border-radius: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
};

export default IPhoneDisplay;