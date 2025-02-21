import React, { useEffect, useState } from 'react';

function Boston() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('boston-section');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsVisible(isInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="boston-section" className="container text-center py-5">
            {/* Main content with feature images */}
            <div className='position-relative' style={{ width: '100%', height: '500px' }}>
                {/* Feature Images */}
                <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px' }}>
                    <img src='/feature1.png' alt='Feature Image' className='position-absolute z-2 floating-image' style={{ top: '20%', left: '-30%', width: '55%'}}/>
                    <img src='/feature2.png' alt='Feature Image' className='position-absolute z-2 floating-image' style={{ top: '30%', right: '-45%', width: '53%', animationDelay: '0.2s'}}/>
                    <img src='/feature3.png' alt='Feature Image' className='position-absolute z-2 floating-image' style={{ bottom: '20%', left: '-40%', width: '52%', animationDelay: '0.4s'}}/>
                    <img src='/feature4.png' alt='Feature Image' className='position-absolute z-2 floating-image' style={{ bottom: '30%', right: '-38%', width: '58%', animationDelay: '0.6s'}}/>
                
                    {/* Colored Rectangle */}
                    <div className="colored-rectangle position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <img 
                            src="/slide1.png" 
                            alt="Mobile Preview" 
                            className={`mobile-image position-relative ${isVisible ? 'slide-up' : ''}`}
                        />
                    </div>
                </div>
            </div>

            <h1 className={`display-8 mb-3 fade-in ${isVisible ? 'visible' : ''}`} style={{ color: "black", animationDelay: '0.4s' }}>
                Join Neato today
            </h1>
            <p className={`display-12 lead mb-3 fade-in ${isVisible ? 'visible' : ''}`} style={{ color: "black", fontSize: "15px", animationDelay: '0.6s' }}>
                Become part of our growing community of users joining every day.
            </p>

            <div className={`d-flex justify-content-center gap-3 fade-in ${isVisible ? 'visible' : ''}`} style={{ transition: 'transform 0.3s ease', animationDelay: '0.8s' }}>
                {/* App Store Button */}
                <a
                    href="#"
                    className="btn btn-light d-flex align-items-center gap-2"
                    style={{
                        backgroundColor: '#08643c',
                        border: 'none',
                        padding: '10px 30px',
                        borderRadius: '28px',
                        textAlign: 'left',
                        height: '58px'
                    }}
                >
                    <img src="/apple.png" alt="App Store" style={{ height: '24px', filter: 'brightness(100) saturate(100%) contrast(100%)' }} />
                    <div>
                        <span style={{ fontSize: '0.8rem', color: '#ffffff', lineHeight: '0.9 !important', display: 'block' }}>Download on the</span>
                        <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'bold', lineHeight: '0.9 !important', display: 'block' }}>App Store</span>
                    </div>
                </a>

                {/* Google Play Button */}
                <a
                    href="#"
                    className="btn btn-light d-flex align-items-center gap-2"
                    style={{
                        backgroundColor: '#08643c',
                        border: 'none',
                        padding: '10px 30px',
                        borderRadius: '28px',
                        textAlign: 'left',
                        height: '58px'
                    }}
                >
                    <img src="/playstore.png" alt="Google Play" style={{ height: '24px', filter: 'brightness(100) saturate(100%) contrast(100%)' }} />
                    <div>
                        <span style={{ fontSize: '0.8rem', color: '#ffffff', lineHeight: '0.9 !important', display: 'block' }}>GET IT ON</span>
                        <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'bold', lineHeight: '0.9 !important', display: 'block' }}>Google Play</span>
                    </div>
                </a>
            </div>

            <style jsx>{`
                .container {
                    min-height: 50vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-top: 2rem;
                    padding: 2rem;
                }

                .colored-rectangle {
                    width: 400px;
                    height: 400px; 
                    background-color: rgb(78, 241, 163);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    border-radius: 40px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    margin-bottom: 2rem;
                    overflow: hidden;
                }

                .mobile-image {
                    margin-top: 4rem;
                    top: 4rem;
                    width: 60%;
                    max-width: 300px;
                    height: auto;
                    opacity: 0;
                    transform: translateY(50px);
                }

                .mobile-image.slide-up {
                    animation: slideUp 0.8s ease forwards;
                }

                .floating-image {
                    animation: float 3s ease-in-out infinite;
                }

                .fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                }

                .fade-in.visible {
                    animation: fadeIn 0.8s ease forwards;
                }

                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }

                @keyframes slideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .custom-btn {
                    background-color: rgb(13, 139, 76);
                    color: white;
                    transition: all 0.2s ease;
                    border-radius: 40px;
                    border: none;
                    font-weight: 400;
                    min-width: 160px;
                    width: 100%;
                    max-width: 170px;
                    height: 60px;
                    padding: 0 20px;
                }

                .custom-btn:hover {
                    background-color: #0A7340;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }

                .text_11 {
                    text-align: left;
                }
            `}</style>
        </div>
    );
}

export default Boston;