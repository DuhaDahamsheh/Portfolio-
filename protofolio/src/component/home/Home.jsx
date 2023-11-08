import React from "react";
("use client");
import "./style.css";

const Home = () => {

  return (
    <div className="homePage" id="home">
     
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
         
        </div>
      </header>
      <section
        style={{ height: "100%" }}
        className="text-black body-font bg-gradient-to-b from-slate-900 via-purple-900 to-black"
      >
        <div className="container mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-20 md:mb-0 items-center text-center">
            <h4 class="wordCarousel">
              <span style={{fontWeight:"300"}}>HELLO 👋 I am </span>
             
            </h4>
 <div className="hello">
                <ul className="flip3 text-4xl ">
                
                  <li id="text-li">SoftWare Engineering</li>
                  <li id="text-li">Full Stack Developer</li>
                  <li id="text-li">Duha Dahamsheh </li>
                </ul>
              </div>
            <p className="mb-8 text-2xl opacity-50 text-white" style={{fontFamily:"serif"}}>
            Success is not the key to happiness. Happiness Is the key to success. If you love what you are doing, you will be successful.
            </p>
            <div className="flex justify-center">
            <a href="#Contact" className="inline-flex text-white bg-purple-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">Contact Me</a>
        
              
              <a href="https://res.cloudinary.com/dgdapuuob/image/upload/f_auto,q_auto/txitzopz0lt5gvaz9skr" className="inline-flex text-white bg-purple-500 py-2 px-4 mx-2 focus:outline-none hover:bg-opacity-40 rounded text-sm" download >Download Resume</a>
             
            </div>
          </div>

          <div
            id="pattern"
            className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
          >
            <div>
              <img
                className="hover:animate-bounce object-cover object-center rounded-xl"
                alt="hero"
                src="https://cdni.iconscout.com/illustration/premium/thumb/astronaut-dancing-on-rocket-4278584-3550529.png?f=webp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
