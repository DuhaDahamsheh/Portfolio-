import React from "react";
import { Carousel } from "flowbite-react";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import Card from "./Card";
const Timline = () => {
  return (
    <div
      id="Passion"
      className="flex min-h-screen place-content-center place-items-center overflow-hidden bg-black"
    >
      <div id="stars"></div>
       
      <div className="container px-6 py-20 mx-auto bg-black">
        <Card/>
       </div>
    </div>
  );
};

export default Timline;
