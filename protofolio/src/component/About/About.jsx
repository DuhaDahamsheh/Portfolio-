import React from "react";
("use client");
import "../About/style.css"
import  { useTransition, useState } from "react";
import image from "../../assets/about-image.png"
import TabButton from "../TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-lg">
        Node.js<br/>
        Express <br/>
        PostgreSQL <br/>
        Sequelize <br/>
        JavaScript <br/>
        React <br/>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-lg">
       <li  className=" text-xl font-semibold text-white"> Meraki academy Jun 2023 - Nov 2023 :</li>
        <hr/>
      <p className=" font-thin text-xl text-white">22-week Immersive Full-Stack Web Development Bootcamp with over 700+ hours of coding, building projects, and solving problems.</p>
        <br/>
      <br></br>
       <li  className=" text-xl font-semibold text-white"> Hashemite University 2018-2022 :</li>
        <hr/>
       <p className=" font-thin text-xl text-white"> Bachelor’s degree in medical laboratory science</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-lg gap-3 ">
       <li>Full Stack Web Development From Meraki Academy</li>  <br/>
      <li>Bachelor's Degree Medical Laboratory Since From Hashemiate University</li> 
      
      </ul>
    ),
  },
];
const About = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="grid min-h-screen place-content-center text-white place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-800 to-black" id="about">
    <div   >
       <div className="md:grid md:grid-cols-2 gap-8 items-center   xl:gap-16 sm:py-16 xl:px-16">
        <img src={`${image}`} width={500} height={500} style={{borderRadius:"2rem" }}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p
          className="text-xl text-white"
         
          style={{ fontSize:"24px",fontWeight:"200" }}
        >
          <p >
            A full-stack developer with entry-level experience specializing in
            user interface design, application development, and continuous
            improvement, an organized and dependable candidate successful, at
            managing multiple priorities with a positive attitude and
            willingness to take on added responsibilities to meet team goals.
          </p>
        </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
