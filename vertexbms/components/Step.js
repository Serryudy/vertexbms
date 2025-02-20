import React from "react";

const ProfileSection = ({ color, number, title, description, image1, image2 }) => {
  return (
    <div
      className="d-flex p-3 position-relative"
      style={{
        width: "950px",
        height: "500px",
        backgroundColor: color,
        overflow: "hidden",
        borderRadius: "30px",
      }}
    >
      {/* Left Section */}
      <div
        className="d-flex flex-column"
        style={{
          width: "600px",
          height: "500px",
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
      <div className="position-relative" style={{ width: "798px", height: "602px" }}>
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
            left: "200px", // Adjust as needed
            zIndex: 1,
          }}
        />

        {/* Second Image */}
        <img
          src={image2}
          alt="Decoration"
          style={{
            width: "586px",
            height: "auto",
            objectFit: "cover",
            position: "absolute",
            transform: "translate(0%, 20%)",
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileSection;