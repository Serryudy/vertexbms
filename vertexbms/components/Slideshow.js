'use client';

import React, { useRef, useEffect, useState } from 'react';
import ProfileSection from './Step';

const Slideshow = () => {
    const containerRef = useRef(null);
    const intervalRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const observerRef = useRef(null);

    // Container styles
    const containerStyles = {
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        width: '100%',
        gap: '80px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        padding: '0 40px',
    };

    // Auto-scroll functionality
    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % 3); // For 3 slides
        }, 1000); // 1 second interval
    };

    // Scroll to slide
    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const slide = container.children[currentIndex];
            container.scrollTo({
                left: slide.offsetLeft - 40, // Adjust for padding
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    // Intersection Observer setup
    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAutoScroll();
                } else {
                    clearInterval(intervalRef.current);
                }
            });
        }, { threshold: 0.5 });

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
            <div style={{ flex: '0 0 70%', scrollSnapAlign: 'start' }}>
                <ProfileSection
                    color="#ff9d3a"
                    number="01"
                    title="Create your Profile"
                    description="Sign up, create your profile, and tell us about your home. This helps us match you with the best professionals."
                    image1="/slide1.png"
                    image2="/orangeV.png"
                />
            </div>
            <div style={{ flex: '0 0 70%', scrollSnapAlign: 'start' }}>
                <ProfileSection
                    color="#087c94"
                    number="02"
                    title="Schedule<br />your first service"
                    description="Browse through available services and choose what you need Set a date and time that works for you and well handle the rest"
                    image1="/slide2.png"
                    image2="/BlueV.png"
                />
            </div>
            <div style={{ flex: '0 0 70%', scrollSnapAlign: 'start' }}>
                <ProfileSection
                    color="#08643c"
                    number="03"
                    title="Enioy<br />a Neater home"
                    description="Sit bock and relax as our skilled professionals take care of your home. Enjoy the convenience and peace of rnind that cornes with a well-maintained space"
                    image1="/slide3.png"
                    image2="/greenV.png"
                />
            </div>
        </div>
    );
};

export default Slideshow;