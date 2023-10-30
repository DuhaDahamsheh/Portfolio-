import React from 'react'
'use client';
import { Button, Navbar } from 'flowbite-react';

const Navbars = () => {
  return (
    <div  className="bg-slate-900" >  
        <Navbar  rounded  className="bg-slate-900" style={{border:"1px solid black"}}>
        <div className="relative">
        <img className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt=""/>
        <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white"></span>
    </div>

    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active className='text-xl'>
        Home
      </Navbar.Link>
      <Navbar.Link href="#" className='text-xl'>About</Navbar.Link>
      <Navbar.Link href="#" className='text-xl'>My Project</Navbar.Link>
      <Navbar.Link href="#" className='text-xl'>Passion</Navbar.Link>
      <Navbar.Link href="#" className='text-xl'>Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
</div>
  )
}

export default Navbars