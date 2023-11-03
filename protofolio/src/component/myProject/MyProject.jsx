import React from "react";
import background1 from "../../assets/pranding.png";
import Project1 from "../project1/project1";
import Project2 from "../project2/Project2";
const MyProject = () => {
  return (
    <div >
      <section id="MyProject" className="place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-black">
        <div className="container px-6 py-20 mx-auto">
          <h1
            className="tracking-tight  title text-4xl font-black text-teal-400  dark:text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            My Project
          </h1>

          <div className="place-content-center place-items-center grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <div
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{
                backgroundImage: `url(${background1})`,
                backgroundSize: "contain",
                height: "400px",
                width: "400px",
              }}
            >
              <div className=" w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  BRANDING STOR
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  <Project1 />
                </p>
              </div>
            </div>

            <div
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/drzcyo3sv/image/upload/v1697135018/Provider_2_iaqlbc.jpg')",
                backgroundSize: "contain",
                height: "400px",
                width: "400px",
              }}
            >
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  CURE WEB APP
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  <Project2 />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProject;
