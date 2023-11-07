import React, { useState, useEffect } from "react";
("use client");
import { Navbar, Timeline } from "flowbite-react";
import "./style.css";
import { SocialIcon } from 'react-social-icons'
import About from "../About/About";
import MyProject from "../myProject/MyProject";

const Navbars = () => {
  const [scrolled, setScrolled] = useState(false);
  const [actineLinke, setActiveLinke] = useState("home");
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLinke = (value) => {
    setActiveLinke(value);
  };
  return (
    <div className="navbar">
      <Navbar
        rounded
        className={scrolled ? "scrolled" : ""}
        style={{
          border: "1px solid black",
          backgroundColor: "#0f172a",
          opacity: 1,
          color: "white",
        }}
      >
      
    
        <div className="flex md:order-2">
         
          <SocialIcon  network="github" url="https://github.com/DuhaDahamsheh" style={{marginRight:"0.5rem"}} />
       
          <SocialIcon network="linkedin" url="https://www.linkedin.com/in/duhadahamsheh/"  style={{marginRight:"0.5rem"}} />
          <SocialIcon network="google" href="mailto:duhadahamsheh@gmail.com"   style={{marginRight:"0.5rem"}} />
          <SocialIcon network="whatsapp"  href="tel:962791026868" />

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link  id="a-link"
        
            href="#home"
            style={{ fontSize: "20px" }}
            active
            className={actineLinke === "home" ? " <Home/>" : ""}
            onClick={() => {
              onUpdateActiveLinke("home");
            }}
          >
            Home
          </Navbar.Link>
          <Navbar.Link   id="a-link"
            href="#about"
            style={{ fontSize: "20px" }}
            className={actineLinke === "about" ? <About /> : ""}
            onClick={() => {
              onUpdateActiveLinke("about");
            }}
          >
            About
          </Navbar.Link>

          <Navbar.Link  id="a-link"
            href="#Passion"
            style={{ fontSize: "20px" }}
            className={actineLinke === "Passion" ? <Timeline /> : "navbar-link"}
            onClick={() => {
              onUpdateActiveLinke("Passion");
            }}
          >
            Passion
          </Navbar.Link>
          <Navbar.Link  id="a-link"
            href="#MyProject"
            style={{ fontSize: "20px" }}
            className={
              actineLinke === "MyProject" ? <MyProject /> : "navbar-link"
            }
            onClick={() => {
              onUpdateActiveLinke("MyProject");
            }}
          >
            My Project
          </Navbar.Link>
          <Navbar.Link  id="a-link"
            href="#Contact"
            style={{ fontSize: "20px" }}
            className={
              actineLinke === "Contact" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => {
              onUpdateActiveLinke("Contact");
            }}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
