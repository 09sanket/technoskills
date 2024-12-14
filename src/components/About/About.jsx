import React from "react";
import Owner from "../../img/owner.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="a-up">
        <img src={Owner} alt="" />
      </div>

      <div className="a-down">
        <div className="a-para">
        <span>
    Techno Skill Coaching Classes is a leading institute offering a wide range of programming and technology courses designed to take students from beginner to professional level. We provide high-quality education in programming languages like C, C++, Java, Python, Data Structures & Algorithms (DSA), web development technologies such as HTML, CSS, JavaScript, React, Node.js, and more. Our Artificial Intelligence (AI) course covers machine learning, neural networks, and other AI tools that are transforming industries. We also offer expertise in editing and designing, including photo manipulation, video editing, graphic designing, and content creation, with a focus on scripting, shooting, editing, color grading, and video production. In addition, our English Communication course helps students enhance their professional communication skills, both written and verbal. Our services include online classes, tutorials, online tests, certification courses, industrial training, workshops, project development training, and job placement assistance. Our campus is equipped with modern facilities such as high-speed Wi-Fi, air-conditioned classrooms, the latest computers, projectors, and an internet facility, ensuring an effective and interactive learning environment. Join Techno Skill Coaching Classes today and take the first step toward a successful career in technology!
</span>


<span>About Our Directors</span>
<span className="a-founder">
    Sanket Rahangdale, with 3 years of experience in mentoring and teaching software development, is a passionate educator who has guided numerous students in mastering frontend and backend technologies.
    <br /><br />
    Mohit Awasare, a content creator with expertise in scripting, video production, and content creation, brings creativity and innovation to the educational experience. 
    <br /><br />
    Denish Thakre, our Student Relation Manager, plays a key role in ensuring that students receive the support and guidance they need throughout their learning journey. 
</span>

        </div>
      </div>
      {/* Blur effect design */}
      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#c1f5ff",
          top: "17rem",
          left: "-9rem",
          width: "21rem",
          height: "11rem",
        }}
      ></div>
    </div>
  );
};

export default About;
