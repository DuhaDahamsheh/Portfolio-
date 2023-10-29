import React from 'react'
'use client';
import { Button, Navbar } from 'flowbite-react';

const Navbars = () => {
  return (
    <div  className="bg-slate-900" >  
        <Navbar  rounded  className="bg-slate-900" style={{border:"1px solid black"}}>
   
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
</div>
  )
}

export default Navbars