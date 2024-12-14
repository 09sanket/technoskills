import React from "react";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "1rem",
    padding: "0.5rem",
    fontFamily: "Arial, sans-serif",
    fontSize: "10px", // Reduced font size
    color: "#333",
  }}
>
  <span>© 2024 TSC Classes. All rights reserved.</span>{" "}
  <a
    href="https://sankets-personal-portfolio.netlify.app/"
    target="_blank"
    rel="noreferrer"
    style={{
      textDecoration: "none",
      color: "#007bff",
      fontWeight: "100", // Slightly less bold
      fontSize: "20px", // Matches the reduced size
      transition: "color 0.3s ease-in-out",
    }}
    onMouseOver={(e) => (e.target.style.color = "#0056b3")}
    onMouseOut={(e) => (e.target.style.color = "#007bff")}
  >
    <span>
      <br />
      Developed by Team Techno Skill
    </span>
  </a>
</div>

  );
};

export default Copyright;
