import React from "react";
("use client");
import "./style.css";
import { Card } from "flowbite-react";
const About = () => {
  return (
    <div
      id="about"
      className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-800 to-black"
    >
      <img  className="animate-bounce" src="src\assets\Brazuca - Planning.png" />
      <Card
        style={{ padding: "1rem", margin: "2rem" }}
        className="bg-transparent"
      >
        
        <div class="patterns">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="polka-dots"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
               
              </pattern>
              <style>
                @import url("https://fonts.googleapis.com/css?
                family=Lora:400,400i,700,700i");
              </style>
            </defs>

            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#polka-dots)"
            >
              {" "}
            </rect>

            <text x="50%" y="60%" text-anchor="middle">
              About Me
            </text>
          </svg>
        </div>
        <p
          className="text-xl text-black"
         
          style={{ fontFamily: "cursive " ,fontSize:"24px",fontWeight:"400" }}
        >
          <p >
            A full-stack developer with entry-level experience specializing in
            user interface design, application development, and continuous
            improvement, an organized and dependable candidate successful, at
            managing multiple priorities with a positive attitude and
            willingness to take on added responsibilities to meet team goals.
          </p>
        </p>
      </Card>
    </div>
  );
};

export default About;
