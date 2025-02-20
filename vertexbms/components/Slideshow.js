'use client';

import React, { useState, useEffect, useRef } from 'react';
import ProfileSection from './Step';

const Slideshow = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    // Inline styles for the container and slides
    const containerStyles = {
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        width: '100%',
        gap: '10px', // Reduced gap to bring slides closer together
        cursor: isDragging ? 'grabbing' : 'grab', // Change cursor on drag
    };

    const slideStyles = {
        flex: '0 0 auto',
        scrollSnapAlign: 'start',
        width: '100%', // Each slide takes the full width of the container
    };

    // Handle mouse down event
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    // Handle mouse move event
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust drag sensitivity
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handle mouse up event
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse leave event
    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={containerRef}
            className="container"
            style={containerStyles}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <div style={slideStyles}>
                <ProfileSection
                    color="#ff9d3a"
                    number="01"
                    title="Create your Profile"
                    description="Sign up, create your profile, and tell us about your home. This helps us match you with the best professionals."
                    image1="/slide1.png"
                    image2="/orangeV.png"
                />
            </div>
            <div style={slideStyles}>
                <ProfileSection
                    color="#087c94"
                    number="02"
                    title="Schedule<br />your first service"
                    description="Browse through available services and choose what you need Set a date and time that works for you and well handle the rest"
                    image1="/slide2.png"
                    image2="/BlueV.png"
                />
            </div>
            <div style={slideStyles}>
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