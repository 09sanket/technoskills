import React from "react";
import "./Services.css";
// Importing images
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// Importing pdf file
import myServices from "./myServices.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* Left Side of Service Section */}
      <div className="s-left">
        <span>Our Special</span>
        <span>Courses</span>
        <span>
        "We offer job-oriented Modular and Special courses for students from both technical and non-technical backgrounds, 
        covering a wide range of topics such as Web Development, Programming, Artificial Intelligence, and Video Editing, from basic to advanced levels."
        </span>
        {/* This will enable the user to download the uploaded file */}
        <a href={myServices} download>
          <button className="button s-button">Fees Voucher</button>
        </a>

        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side of Service Section */}
      <div className="s-right">
        {/* First Card */}
        <div style={{ left: "12rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={HeartEmoji}
            heading={"Art & Graphics"}
            detail={
              
"Graphic Design Fundamentals, Adobe Photoshop, Adobe Illustrator, CorelDRAW, Canva, Digital Painting, Logo Design, and Motion Graphics."
            }
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Glasses}
            heading={"Full Stack Web Development"}
            detail={
              "HTML, CSS, Javascript, Node, React, MongoDB and Deployment and many other things in depth!"
            }
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Humble}
            heading={"English Communication"}
            detail={
             "You will learn real-world English communication skills, including grammar, speaking, and writing, along with practical applications in professional settings."
            }
          />
        </div>
        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
