import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";

function Services() {
  const [visibleServices, setVisibleServices] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    { icon: "🏗", title: "Additions", subtitle: "& Remodels" },
    { icon: "🧹", title: "Cleaning", subtitle: "" },
    { icon: "🌡", title: "Heating", subtitle: "& Cooling" },
    { icon: "🔧", title: "Plumbing", subtitle: "" },
    { icon: "🎨", title: "Painting", subtitle: "" },
    { icon: "⚡", title: "Electrical", subtitle: "" },
    { icon: "🏠", title: "Roofing", subtitle: "& Gutters" },
    { icon: "🌳", title: "Landscape,", subtitle: "Yard & Garden" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is in view, start the animation
            const timeoutId = setTimeout(() => {
              services.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleServices((prev) => [...prev, index]);
                }, index * 200);
              });
            }, 500);

            return () => clearTimeout(timeoutId);
          } else {
            // Section is out of view, reset the animation
            setVisibleServices([]);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [services]);

  return (
    <div className="services-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-5 col-md-10 mb-5 mb-lg-0">
            <h1
              className="display-5 fw-bold animate-title text-center text-lg-start"
              style={{
                color: "black",
                fontSize: "2.5rem",
              }}
            >
              Over 100 repair services to fix it right, <br /> right now!
            </h1>
          </div>

          <div className="col-lg-6 col-md-10">
            <div className="row g-3 justify-content-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`col-lg-6 col-md-6 col-sm-6 service-card ${
                    visibleServices.includes(index) ? "visible" : ""
                  }`}
                >
                  <div className="card border-0 bg-white shadow-sm h-100 p-3">
                    <div className="d-flex flex-column align-items-start">
                      <div className="fs-3" style={{ color: "#ff6b00" }}>
                        {service.icon}
                      </div>
                      <div>
                        <h3
                          className="h6 mb-0 fw-semibold"
                          style={{ color: "black", paddingTop: "10%" }}
                        >
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p
                            className="h6 mb-0 fw-semibold"
                            style={{ color: "black" }}
                          >
                            {service.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services-section {
          margin-top: 5rem;
        }

        .card {
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .animate-title {
          opacity: 0;
          animation: slideInUp 0.5s ease-in-out forwards;
        }

        .service-card {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .service-card.visible {
          opacity: 1;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .services-section {
            margin-top: 3rem;
          }

          .display-5 {
            font-size: calc(1.8rem + 1.5vw);
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .service-card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Services;