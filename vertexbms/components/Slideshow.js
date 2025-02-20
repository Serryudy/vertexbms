'use client';

import React from 'react';
import ProfileSection from './Step';

const Slideshow = () => {    
    return (
        <div className="container">
            <ProfileSection
                color="#ff9d3a"
                number="01"
                title="Create your Profile"
                description="Sign up, create your profile, and tell us about your home. This helps us match you with the best professionals."
                image1="/slide1.png"
                image2="/orangeV.png"
            />
            <ProfileSection
                color="#087c94"
                number="02"
                title="Schedule<br />your first service"
                description="Browse through available services and choose what you need Set a date and time that works for you and well handle the rest"
                image1="/slide2.png"
                image2="/BlueV.png"
            />
            <ProfileSection
                color="#08643c"
                number="03"
                title="Enioy<br />a Neater home"
                description="Sit bock and relax as our skilled professionals take care of your home. Enjoy the convenience and peace of rnind that cornes with a well-maintained space"
                image1="/slide3.png"
                image2="/greenV.png"
            />
        </div>
    );
};

export default Slideshow;