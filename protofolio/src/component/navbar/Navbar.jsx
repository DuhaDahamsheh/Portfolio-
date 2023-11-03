import React, { useState, useEffect } from "react";
("use client");
import { Button, Navbar, Timeline } from "flowbite-react";
import "./style.css";
import Home from "../home/Home";
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
        {/* <div className="relative">
          <img
            className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
            alt=""
          />
          <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white"></span>
        </div> */}

        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="#home"
            style={{ fontSize: "20px", fontFamily: "fantasy" }}
            active
            className={actineLinke === "home" ? " <Home/>" : ""}
            onClick={() => {
              onUpdateActiveLinke("home");
            }}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#about"
            style={{ fontSize: "20px", fontFamily: "fantasy" }}
            className={actineLinke === "about" ? <About /> : ""}
            onClick={() => {
              onUpdateActiveLinke("about");
            }}
          >
            About
          </Navbar.Link>

          <Navbar.Link
            href="#Passion"
            style={{ fontSize: "20px", fontFamily: "fantasy" }}
            className={actineLinke === "Passion" ? <Timeline /> : "navbar-link"}
            onClick={() => {
              onUpdateActiveLinke("Passion");
            }}
          >
            Passion
          </Navbar.Link>
          <Navbar.Link
            href="#MyProject"
            style={{ fontSize: "20px", fontFamily: "fantasy" }}
            className={
              actineLinke === "MyProject" ? <MyProject /> : "navbar-link"
            }
            onClick={() => {
              onUpdateActiveLinke("MyProject");
            }}
          >
            My Project
          </Navbar.Link>
          <Navbar.Link
            href="#Contact"
            style={{ fontSize: "20px", fontFamily: "fantasy" }}
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
