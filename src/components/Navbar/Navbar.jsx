import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/style.css';
import logo from '../../assets/img/logo.png';
import cv from '../../assets/img/Taher-Ahmed.pdf';

const NavBar = () => {
  return (
    <>
      {/* Navigation Bar Section */}
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-12 px-5 justify-between items-center ">
          {/* Logo */}
          <div className="w-16 col-span-12 md:col-span-4 mx-auto md:mx-0">
            <a href=""><img src={logo} alt="logo"/></a>
          </div>
          {/* Navigation Bar */}
          <div className="col-span-12 md:col-span-8 text-left text-lg font-semibold flex flex-row justify-end items-center gap-5 realative">
            <NavLink to='/' className="relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-hover before:scale-0 before:duration-300 hover:before:scale-100" activeClassName='active'>Home</NavLink>
            <NavLink to='/about' className="relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-hover before:scale-0 before:duration-300 hover:before:scale-100">About</NavLink>
            <NavLink to='/projects' className="relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-hover before:scale-0 before:duration-300 hover:before:scale-100">Projects</NavLink>
            <NavLink to='/contact' className="relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-hover before:scale-0 before:duration-300 hover:before:scale-100">Contact</NavLink>
            <a className="btn relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-hover before:scale-0 before:duration-300 hover:before:scale-100" download='Taher_Ahmed' href={cv}>Download CV</a>
          </div>
        </div>
      </div>
    </>
  );
};

{/* <NavLink to='/' className='' activeclassName="active">Home</NavLink>
<NavLink to='/about' className=''>About</NavLink>
<NavLink to='/projects' className=''>Projects</NavLink>
<NavLink to='/contact' className=''>Contact</NavLink>
<NavLink to='/download' className=''>DownLoad CV</NavLink> */}

export default NavBar