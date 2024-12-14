import React from "react";
import "./Experience.css";
// This section consists of special achievements done by the User throughout his journey
const Experience = () => {
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle">10+</div>
        <span>Batches</span>
        <span>Successfully Completed</span>
      </div>

      <div className="achievement">
        <div className="circle thirdCir">2000+</div>
        <span>Students</span>
        <span>Mentored</span>
      </div>
    </div>
  );
};

export default Experience;
