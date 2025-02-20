'use client';
import React from 'react';

const IPhoneDisplay = () => {
  return (
    <div className="iphone-container position-relative mx-auto z-1">
      <img 
        src="/iphone.png" 
        alt="iPhone frame" 
        className="w-100 position-relative z-1"
      />
      <div className="screen-content position-absolute text-center">
        <div className="app-content">
          <h2 className="text-white mb-5 fw-normal">
            Here to mend your<br />world with care and<br />a smile, one fix at a<br />time.
          </h2>
          <button className="btn w-75 mb-3 bg-white text-dark">
            I have an account
          </button>
          <button className="btn w-75 mb-3" style={{ backgroundColor: '#F06513', color: 'white' }}>
            I'm new here
          </button>
          <p className="text-white text-opacity-75 fs-15">
            or let us take on the job from<br />start to finish.
          </p>
        </div>
      </div>
      <div className="vectors-container">
        <img src="/vector1.png" className="vector1" alt="vector" />
        <img src="/vector2.png" className="vector2" alt="vector" />
        <img src="/vector3.png" className="vector3" alt="vector" />
      </div>
      <style jsx>{`
        .iphone-container {
          width: 350px;
        }

        .screen-content {
          top: 10%;
          left: 3%;
          right: 3%;
          bottom: 1%;
          background: #106B4E;
          border-radius: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .vectors-container {
          position: absolute;
          bottom: -120px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          width: 100px;
          height: 100px;
        }

        .vector1 {
          position: absolute;
          top: -850;
          left: 50%;
          transform: translateX(-50%);
          animation: float 3s ease-in-out infinite;
          width: 200px;
        }
        .vector2 {
          position: absolute;
          top: -720;
          left: 120%;
          transform: translateX(-50%);
          animation: float 3s ease-in-out infinite;
          width: 100px;
        }
        .vector3 {
          position: absolute;
          top: -820;
          left: -100;
          transform: translateX(-50%);
          animation: float 3s ease-in-out infinite;
          width: 100px;
        }

        .vector:nth-child(2) {
          animation-delay: 0.5s;
        }

        .vector:nth-child(3) {
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -20px);
          }
        }

        .app-content {
          margin-top: 20px;
        }

        .app-content h2 {
          font-size: 1.5rem;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
};

export default IPhoneDisplay;