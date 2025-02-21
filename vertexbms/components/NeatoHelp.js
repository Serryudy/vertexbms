import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IPhoneDisplay from './IPhoneDisplay';

const NeatoHelp = () => {
  return (
    <div className='position-relative'>
      <div
        className="position-absolute d-flex align-items-center justify-content-center"
        style={{
          width: '100%',
          top: '0',
          left: '0',
          height: '594px',
          backgroundColor: '#08643c',
          padding: '10px 21px',
          borderRadius: '30px',
          gap: '150px'
        }}
      >
        {/* Left Text Section */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: '30%',
            height: '95px',
            paddingRight: '150px',
            marginRight: '300px', // Increased from 239px
            marginLeft: '50px'   // Added left margin for better centering
          }}
        >
          <h1 className="fw-bold text-white mb-0" style={{ fontSize: '32px' }}>
            How the Neato<br />can help you?
          </h1>
        </div>
        {/* Right List Section */}
        <div className="d-flex flex-column justify-content-center" style={{ gap: '70px', marginRight: '50px' }}>
          {[
            { icon: '/tool.png', text: 'On-demand <br />handyman services' },
            { icon: '/calendar.png', text: 'Service tracking<br />and history' },
            { icon: '/task.png', text: 'Task scheduling and<br />reminders' }
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center"
              style={{
                height: '28px',
                gap: '18px'
              }}
            >
              <img
                src={item.icon}
                alt="icon"
                className="object-fit-cover"
                style={{ width: '40px', height: '40px' }}
              />
              <span
                className="fw-semibold text-white"
                style={{
                  fontSize: '25px',
                  lineHeight: '1',
                  marginLeft: '15px'  // Added left margin to text
                }}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="iphone-container position-relative mx-auto" style={{ top: '-150px' }}>
        <IPhoneDisplay />
      </div>
    </div>
  );
};

export default NeatoHelp;