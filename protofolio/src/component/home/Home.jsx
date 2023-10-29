import React from 'react'
'use client';

import { Navbar } from 'flowbite-react';
import "./style.css"

const Home = () => {
     
  return(
    <div className='homePage' >
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Satisfy&display=swap" rel="stylesheet" />
    
    <main className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-black">
     
      <div id="main_container" 
      className="relative grid place-content-center place-items-center gap-2 before:bg-gradient-to-t before:from-teal-500/70 before:via-fuchsia-600 before:to-transparent before:blur-xl before:filter">
        <h1 className="title text-6xl font-black text-teal-400">DUHA</h1>
        <h2 className="cursive text-6xl font-thin text-pink-500">Dahamsheh</h2>
      </div>
    </main>
   
</div>
  )
}

export default Home