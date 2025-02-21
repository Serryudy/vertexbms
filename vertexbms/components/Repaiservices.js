import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RepairServices = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section is in view
          setIsSectionVisible(true);
        } else {
          // Section is out of view
          setIsSectionVisible(false);
          // Reset card animations
          cardRefs.current.forEach((card) => {
            if (card) {
              card.style.opacity = "0";
              card.style.transform = "translateY(20px)";
            }
          });
          // Reset title animation
          if (titleRef.current) {
            titleRef.current.style.opacity = "0";
            titleRef.current.style.transform = "translateY(20px) translateX(-20px)";
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      // Animate title when section is in view
      if (titleRef.current) {
        titleRef.current.style.transition = "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s";
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0) translateX(0)";
      }

      // Animate cards when section is in view
      cardRefs.current.forEach((card, index) => {
        if (card) {
          card.style.transition = `opacity 0.5s ease-out ${index * 0.2 + 0.5}s, transform 0.5s ease-out ${index * 0.2 + 0.5}s`;
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }
      });
    }
  }, [isSectionVisible]);

  const services = [
    {
      icon: "/clock.png",
      title: "Expert technicians available 24/7 for all your repair needs.",
      text: "We guarantee prompt, reliable service with a smile.",
    },
    {
      icon: "/price-tag.png",
      title: "Affordable rates with transparent pricing, no hidden fees.",
      text: "Quality workmanship backed by our satisfaction guarantee.",
    },
    {
      icon: "/wrench.png",
      title: "From plumbing to electrical, we've got all your repairs covered.",
      text: "Trustworthy professionals ready to tackle any job, big or small.",
    },
  ];

  return (
    <>
      {/* Title Section */}
      <div
        ref={titleRef}
        className="container-fluid text-center py-4"
        style={{
          opacity: 0, // Start with 0 opacity
          transform: "translateY(20px) translateX(-20px)", // Start slightly below and to the left
        }}
      >
        <h1
          className="fw-bold"
          style={{
            color: "#fff",
            marginBottom: "30px",
          }}
        >
          Over 100 repair services to <br /> fix it right, right now!
        </h1>
      </div>

      {/* Services Section */}
      <div
        ref={sectionRef}
        className="container-fluid text-center py-5"
        style={{
          minHeight: "auto",
          paddingBottom: "50px",
        }}
      >
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="col-md-3 mx-3 p-4 bg-light shadow"
              style={{
                marginBottom: "20px",
                opacity: 0, // Start with 0 opacity
                transform: "translateY(20px)", // Start slightly below
                borderRadius: "20px",
                height: "400px",
              }}
            >
              <div className="container d-flex justify-content-center">
                <img
                  src={service.icon}
                  alt="icon"
                  className="mb-3"
                  width="160"
                  height="160"
                />
              </div>
              <h5 className="fw-bold text-dark">{service.title}</h5>
              <p className="text-muted">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RepairServices;