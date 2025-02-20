import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DownloadCTA = ({ title, subtitle }) => {
  const styles = {
    mainButton: {
      backgroundColor: '#abdf96',
      border: 'none',
      padding: '10px 30px',
      borderRadius: '28px',
      textAlign: 'left'
    },
    buttonText: {
      fontSize: '0.8rem',
      color: '#08643c',
      lineHeight: '0.9 !important',
      display: 'block'
    },
    buttonTitle: {
      fontSize: '1rem',
      color: '#08643c',
      fontWeight: 'bold',
      lineHeight: '0.9 !important',
      display: 'block'
    }
  };

  return (
    <div className="container mt-5 pt-5 mb-5 pb-5" style={{paddingBottom: '100px', marginBottom: '100px'}}>
      <div className="row align-items-center text-center">
        <div className="col-12">
          <h1 
            className="display-4 fw-bold mb-4" 
            style={{ fontSize: '3.5rem' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          <p className="mb-5" style={{ fontSize: '1.2rem', color: '#000000' }}>
            {subtitle}
          </p>

          <div className="d-flex justify-content-center gap-3">
            {/* App Store Button */}
            <a 
              href="#" 
              className="btn btn-light d-flex align-items-center gap-2"
              style={styles.mainButton}
            >
            <img src="/apple.png" alt="App Store" style={{ height: '24px' }} />
            <div>
            <span style={styles.buttonText}>Download on the</span>
            <span style={styles.buttonTitle}>App Store</span>
            </div>
            </a>

            {/* Google Play Button */}
            <a 
              href="#" 
              className="btn btn-light d-flex align-items-center gap-2"
              style={styles.mainButton}
            >
            <img src="/playstore.png" alt="Google Play" style={{ height: '24px' }} />
            <div>
            <span style={styles.buttonText}>GET IT ON</span>
            <span style={styles.buttonTitle}>Google Play</span>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCTA;