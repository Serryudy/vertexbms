'use client';
import React, { useEffect, useState, useRef } from 'react';

const BubbleAnimation = () => {
    const [bubbles, setBubbles] = useState([]);
    const homecareRef = useRef(null);
    const rightPartRef = useRef(null);

    useEffect(() => {
        const bubbleElements = [
            { width: '84px', height: '114px', rotate: '90deg', top: '30px', left: '200px' },
            { width: '42px', height: '54px', rotate: '15deg', top: '80px', left: '20px' },
            { width: '120px', height: '116px', rotate: '90deg', top: '130px', left: '70px' },
            { width: '94px', height: '102px', rotate: '125deg', top: '170px', left: '-70px' },
            { width: '89px', height: '146px', rotate: '45deg', top: '10px', left: '20px' },
            { width: '102px', height: '154px', rotate: '55deg', top: '120px', left: '270px' },
            { width: '42px', height: '54px', rotate: '30deg', top: '10px', left: '350px' }
        ];
        setBubbles(bubbleElements);
    }, []);

    useEffect(() => {
        const homecareElement = homecareRef.current;
        const rightPartElement = rightPartRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === homecareElement) {
                        if (entry.isIntersecting) {
                            homecareElement.style.transform = 'translateY(0)';
                            homecareElement.style.opacity = '1';
                        } else {
                            homecareElement.style.transform = 'translateY(20px)';
                            homecareElement.style.opacity = '0';
                        }
                    }

                    if (entry.target === rightPartElement) {
                        if (entry.isIntersecting) {
                            rightPartElement.style.transform = 'translateY(0)';
                            rightPartElement.style.opacity = '1';
                        } else {
                            rightPartElement.style.transform = 'translateY(20px)';
                            rightPartElement.style.opacity = '0';
                        }
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (homecareElement) observer.observe(homecareElement);
        if (rightPartElement) observer.observe(rightPartElement);

        return () => {
            if (homecareElement) observer.unobserve(homecareElement);
            if (rightPartElement) observer.unobserve(rightPartElement);
        };
    }, []);

    return (
        <div className='container-fluid d-flex align-items-center justify-content-center'>
            <div
                ref={homecareRef}
                className='position-absolute z-2'
                style={{
                    top: '-20%',
                    left: '25%',
                    transform: 'translateY(20px)',
                    opacity: 0,
                    transition: 'transform 0.8s ease, opacity 0.8s ease'
                }}
            >
                <img src="/homecare.png" alt="homecare" style={{ width: '320px' }} />
            </div>
            <div className='container position-relative d-flex align-items-center justify-content-center' style={{ width: 'fit-content', height: '570px', backgroundColor: '#ffffff', gap: '200px', padding: '0px 100px', borderRadius: '30px', overflow: 'hidden' }}>
                
                {/* Bubble Container (Fixed Visibility) */}
                <div className='position-relative d-flex align-items-center justify-content-center' style={{ pointerEvents: 'none' }}>
                    <div className='position-relative z-1' style={{ width: '400px', height: '300px', top: '200px' }}>
                        {bubbles.map((bubble, index) => (
                            <div
                                key={index}
                                className={`imperfect-circle${index % 4 + 1}`}
                                style={{
                                    width: bubble.width,
                                    height: bubble.height,
                                    rotate: bubble.rotate,
                                    position: 'absolute',
                                    top: bubble.top,
                                    left: bubble.left,
                                    opacity: 1, // Ensure bubbles always visible
                                    animation: `float ${Math.random() * 4 + 2}s infinite ease-in-out`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Part Animation */}
                <div
                    ref={rightPartRef}
                    id='rightpart'
                    className='d-flex flex-column'
                    style={{
                        width: '35%',
                        gap: '20px',
                        transform: 'translateY(20px)',
                        opacity: 0,
                        transition: 'transform 0.8s ease, opacity 0.8s ease'
                    }}
                >
                    <h3 className='fw-bold text-black fs-1'>Fixing made easy <br />One click away.</h3>
                    <p className='fw-bold text-black'>From seasonal specials to bundled packages. we've got everything ready to keep pur in to-top shcve without breaking the bank.</p>
                    <div className="d-flex justify-content-center gap-3" style={{ transition: 'transform 0.3s ease' }}>
                        {/* App Store Button */}
                        <a
                            href="#"
                            className="btn btn-light d-flex align-items-center gap-2"
                            style={{
                                backgroundColor: '#e86c14',
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
                                backgroundColor: '#e86c14',
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
                </div>

                <style jsx>{`
                    .imperfect-circle1 {
                        background: rgb(255, 146, 29);
                        border-radius: 40% 60% 50% 70%;
                    }
                    .imperfect-circle2 {
                        background: rgb(168, 224, 174);
                        border-radius: 55% 40% 71% 50%;
                    }
                    .imperfect-circle3 {
                        background: rgb(255, 210, 45);
                        border-radius: 55% 40% 71% 50%;
                    }
                    .imperfect-circle4 {
                        background: rgb(28, 82, 33);
                        border-radius: 55% 40% 71% 50%;
                    }
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default BubbleAnimation;
