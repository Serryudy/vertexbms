import React from "react";

const ProfileSection = ({ color, number, title, description, image1, image2 }) => {
  return (
    <div
      className="d-flex p-3 position-relative"
      style={{
        width: "100%", // Use 100% width to fill the slideshow container
        height: "500px",
        backgroundColor: color,
        overflow: "hidden",
        borderRadius: "30px",
        flexShrink: 0, // Prevent the slide from shrinking
      }}
    >
      {/* Left Section */}
      <div
        className="d-flex flex-column"
        style={{
          width: "60%", // Use percentage for flexible width
          height: "100%",
          gap: "52px",
        }}
      >
        {/* Number Circle */}
        <div
          className="bg-white rounded-circle d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "70px",
            height: "70px",
          }}
        >
          <span
            className="fw-bold"
            style={{
              color: "#ff8000",
              fontSize: "20px",
            }}
          >
            {number}
          </span>
        </div>

        {/* Text Content */}
        <div
          className="d-flex flex-column"
          style={{
            gap: "44px",
            padding: "13px 31px",
          }}
        >
          <h1
            className="fw-bold text-white"
            style={{
              fontSize: "32px",
            }}
          >
            {title}
          </h1>
          <p
            className="fw-bold text-white"
            style={{
              fontSize: "20px",
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Right Section - Images */}
      <div className="position-relative" style={{ width: "40%", height: "100%" }}>
        {/* First Image */}
        <img
          src={image1}
          alt="Decoration"
          style={{
            width: "250px",
            height: "auto",
            objectFit: "cover",
            position: "absolute",
            top: "50px", // Adjust as needed
            left: "50%", // Center the image
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        />

        {/* Second Image */}
        <img
          src={image2}
          alt="Decoration"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 20%)",
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileSection;