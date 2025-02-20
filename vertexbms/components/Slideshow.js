'use client';

import React, { useRef, useEffect, useState } from 'react';
import ProfileSection from './Step';

const Slideshow = () => {
    const containerRef = useRef(null);
    const intervalRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const observerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);

    // Container styles without scroll snapping
    const containerStyles = {
        display: 'flex',
        overflowX: 'auto',
        scrollBehavior: 'smooth', // Keep smooth scroll
        width: '100%',
        gap: '80px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        padding: '0 40px',
    };

    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % 4);
        }, 3000);
    };

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const slide = container.children[currentIndex];
            
            // Calculate center position
            const containerWidth = container.offsetWidth;
            const slideWidth = slide.offsetWidth;
            const targetScroll = slide.offsetLeft - (containerWidth - slideWidth) / 2;

            // Apply entry animation after scroll
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(100%)';
            
            setTimeout(() => {
                container.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });

                slide.style.opacity = '1';
                slide.style.transform = 'translateX(0)';
                slide.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 50);
        }
    }, [currentIndex]);

    // Intersection Observer for the container
    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setIsProfileVisible(true); // Trigger profile section animation
                    startAutoScroll();
                } else {
                    setIsVisible(false);
                    setIsProfileVisible(false); // Reset profile section animation
                    clearInterval(intervalRef.current);
                }
            });
        }, { threshold: 0.25 });

        if (containerRef.current) {
            observerRef.current.observe(containerRef.current);
        }

        return () => {
            observerRef.current?.disconnect();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} style={containerStyles}>
            {/* First Slide - Remove scrollSnapAlign */}
            <div style={{ 
                flex: '0 0 30%',
                padding: '120px 70px',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
                <img 
                    src="/home.png" 
                    alt="Vector 1"  
                    style={{ 
                        width: '40px',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                    }}
                />
                <p style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    lineHeight: '1.5',
                    margin: 0,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}>
                    Our app connects you With trusted professionals to handle all your home maintenance needs.
                </p>
            </div>

            {/* Profile Sections - Add right-to-left animation */}
            {[1, 2, 3].map((index) => (
                <div key={index} style={{ 
                    flex: '0 0 70%',
                    opacity: isProfileVisible ? 1 : 0,
                    transform: isProfileVisible ? 'translateX(0)' : 'translateX(100%)', // Start off-screen to the right
                    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s` // Staggered delay
                }}>
                    <ProfileSection
                        color={["#ff9d3a", "#087c94", "#08643c"][index - 1]}
                        number={`0${index}`}
                        title={[
                            "Create your Profile",
                            "Schedule your first service",
                            "Enioy a Neater home"
                        ][index - 1]}
                        description={[
                            "Sign up, create your profile, and tell us about your home. This helps us match you with the best professionals.",
                            "Browse through available services and choose what you need Set a date and time that works for you and well handle the rest",
                            "Sit bock and relax as our skilled professionals take care of your home. Enjoy the convenience and peace of rnind that cornes with a well-maintained space"
                        ][index - 1]}
                        image1={`/slide${index}.png`}
                        image2={["/orangeV.png", "/BlueV.png", "/greenV.png"][index - 1]}
                    />
                </div>
            ))}
        </div>
    );
};

export default Slideshow;