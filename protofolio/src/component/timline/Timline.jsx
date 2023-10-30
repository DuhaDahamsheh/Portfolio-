import React from "react";

import "./style.css"
const Timline = () => {
  return (
    <div className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-800 to-black">
      

      <section className=" dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
    <h5
        className="tracking-tight  title text-4xl font-black text-teal-400  dark:text-white"
        style={{ fontFamily: "Georgia, serif" ,gap:"2rem",  padding:"4rem"}}
      >
        <p className="title">What did duha's passion for programming start?</p>
      </h5>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('https://img.freepik.com/premium-photo/cartoon-doctor-with-beaker-liquid-it_783884-21654.jpg')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 tracking-tight  title text-xl font-black text-white capitalize">My career started when I finished my bachelor's degree in laboratory medical sciences and after a few time I had the opportunity to work in a hospital.</h2>
                   
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                 style={{backgroundImage:"url('https://groundworkcounseling.com/wp-content/uploads/2019/09/incecisiveness-cbt-anxiety.jpg')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 tracking-tight  title text-xl font-black text-white capitalize">After some time in this work, I found that it is not my passion and I did not find a soul in it, and because I am a person who loves learning and I love development, I decided to change, but at that time I was not doing what is my passion or how I will reach it.</h2>
                    
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('https://us.123rf.com/450wm/jemastock/jemastock1812/jemastock181212153/114236932-executive-businessman-cartoon-vector-illustration-graphic-design.jpg?ver=6')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 tracking-tight  title text-xl font-black text-white capitalize">At that time, I thought a lot to find something that suits my passion and because I like to keep up with developments. I searched for something that is constantly evolving and is also commensurate with what the local and global market demands, so I decided to enter the world of programming.</h2>
                    
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  
  );
};

export default Timline;
