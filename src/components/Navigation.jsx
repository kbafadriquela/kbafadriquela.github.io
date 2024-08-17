import { Outlet } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react'

export default function Navigation () {
  return (
    <>
      <div class='navbar container flex justify-end mx-auto md:justify-center md:w-[75%]'>
        <nav class='navbar flex justify-around items-center text-[1.2em] mt-10 font-camphor font-light'>
          <Link to='work' spy={true} smooth={true} duration={500} class='nav-link relative decoration-0'>
            Work
          </Link>
          <Link to='contact' spy={true} smooth={true} duration={500} class='nav-link relative decoration-0'>
            Contact
          </Link>
          <Link to='about' spy={true} smooth={true} duration={500} class='nav-link relative decoration-0'>
            About
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
