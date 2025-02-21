"use client"
import { useEffect, useState } from "react"

export default function FloatingImages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const section = document.querySelector(".floating-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const services = [
    {
      title: "Install a shower",
      price: "$1,099",
      image: "/img1.jpg",
      width: "180px",
      position: { top: "15%", left: "75%" },
    },
    {
      title: "Install a sprinkler sys.",
      price: "$2,855",
      image: "/img2.jpg",
      width: "220px",
      position: { bottom: "10%", left: "12%" },
    },
    {
      title: "Hire a handyman",
      price: "$412",
      image: "/img3.jpg",
      width: "160px",
      position: { top: "11%", left: "38%" },
    },
    {
      title: "Hire a maid service",
      price: "$188",
      image: "/img4.jpg",
      width: "160px",
      position: { bottom: "15%", left: "80%" }, // Adjusted for proper animation
    },
    {
      title: "Install a ceiling fan",
      price: "$350",
      image: "/img5.jpg",
      width: "150px",
      position: { top: "15%", left: "10%" },
    },
    {
      title: "Fix electrical wiring",
      price: "$599",
      image: "/img6.jpg",
      width: "120px", // Fixed incorrect "10px" width
      position: { bottom: "30%", left: "18%" },
    },
    {
      title: "Paint interior walls",
      price: "$899",
      image: "/img7.jpg",
      width: "180px",
      position: { top: "25%", left: "65%" },
    },
    {
      title: "Install smart home sys.",
      price: "$1,299",
      image: "/img8.jpg",
      width: "200px",
      position: { top: "75%", left: "48%" }, // Adjusted for proper animation
    },
  ]

  return (
    <div
      className="floating-section position-relative py-5"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div className="text-center text-white position-absolute start-50 top-50 translate-middle" style={{ zIndex: 2 }}>
        <h3 className="display-4 mb-3 fs-7">
          Fixing made easy,
          <br />
          one click away.
        </h3>
        <p className="lead">
          From seasonal specials to bundled packages, we've got
          <br />
          everything you need to keep your home in tip-top shape
          <br />
          without breaking the bank.
        </p>
      </div>

      {services.map((service, index) => (
        <div
          key={index}
          className={`service-card position-absolute ${isVisible ? "spread" : ""}`}
          style={{
            transition: "all 1s ease-out",
            transform: isVisible ? "none" : "translate(-50%, -50%)",
            left: isVisible ? service.position.left : "50%",
            top: isVisible ? service.position.top : "50%",
            bottom: isVisible ? service.position.bottom : "auto",
            width: service.width, // Fixed to use the correct property
          }}
        >
          <div
            className="card bg-dark text-white"
            style={{ width: "100%", borderRadius: "15px", overflow: "hidden" }}
          >
            <img
              src={service.image}
              className="card-img"
              alt={service.title}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">
                <span className="badge bg-warning text-dark">average {service.price}</span>
              </p>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .service-card {
          animation: float 6s ease-in-out infinite;
          opacity: 0;
          width: 150px; /* Default width to prevent issues */
        }

        .service-card.spread {
          opacity: 1;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .service-card:nth-child(1) { animation-delay: 15.8s; }
        .service-card:nth-child(2) { animation-delay: 15.5s; }
        .service-card:nth-child(3) { animation-delay: 15.84s; }
        .service-card:nth-child(4) { animation-delay: 15.5s; }
        .service-card:nth-child(5) { animation-delay: 15.25s; }
        .service-card:nth-child(6) { animation-delay: 5.75s; }
        .service-card:nth-child(7) { animation-delay: 5.25s; }
        .service-card:nth-child(8) { animation-delay: 55.75s; }
      `}</style>
    </div>
  )
}
