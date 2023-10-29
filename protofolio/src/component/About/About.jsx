import React from 'react'
'use client';
import "./style.css"
import { Card } from 'flowbite-react';
const About = () => {
  return (
    <div id='about' className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-800 to-black">
         <img src='src\assets\Brazuca - Planning.png'/>
         <Card style={{padding:"1rem" ,margin:"2rem"}} className='bg-transparent'>
 
      <h5 className="tracking-tight  title text-6xl font-black text-teal-400  dark:text-white" style={{fontFamily:"Georgia, serif"}}>
        <p className='title'>
          About Duha
        </p>
      </h5>
      <p className="text-xl text-pink-500" style={{fontFamily:"cursive "}}>
        <p>
        A full-stack developer with entry-level experience specializing in user interface design, application development, and continuous improvement, an organized and dependable candidate successful, at managing multiple priorities with a positive attitude and willingness to take on added responsibilities to meet team goals.
        </p>
      </p>
    </Card>

    </div>
  )
}

export default About