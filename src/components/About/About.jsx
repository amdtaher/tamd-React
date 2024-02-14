import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPaperPlane, FaFacebook, FaGithub, FaLinkedin, FaDownload, FaChevronDown } from "react-icons/fa";
import aboutImage from '../../assets/img/Taher-Ahmed.png';
import cv from "../../assets/img/Taher-Ahmed.pdf"
import Skills from '../Skills/Skills';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showMore, setShowMore] = useState(false);

  const switchToAbout = ()=>{
    setActiveSection('about');
  }
  const switchToSkills = ()=>{
    setActiveSection('skills');
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {/* About Section */}
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-12 grid-flow-row items-center gap-5 px-5 sm:px-0">
          {/* About Image */}
          <div className="col-span-12 md:col-span-6 custombg">
            <img className='w-auto mx-auto' src={aboutImage} alt="picture_of_mine" />
          </div>
          {/* About Content */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            {/* Switching Button */}
            <div className='overflow-hidden w-[250px] mx-auto flex flex-row justify-evenly items-center mt-5 md:mt-0 mb-12 md:mb-14 lg:mb-20 rounded-full text-xl font-semibold border border-black'>
              <button onClick={switchToAbout} className={`${activeSection === 'about' ? 'activeSection' : ''} capitalize duration-300 py-3 pr-8 pl-10`}>about</button>
              <button onClick={switchToSkills} className={`${activeSection === 'skills' ? 'activeSection' : ''} capitalize duration-300 py-3 pl-8 pr-10`}>skills</button>
            </div>

            {/* The About Section */}
            <section className={activeSection === 'about' ? '' : 'hidden'}>
              {/* Section Title */}
              <div className="uppercase border-b border-dark pb-5 mb-5">
                <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>taher ahmed tanveer
                <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">about</span></h4>
                <p className='text-lg text-secondary font-semibold italic'>Frontend Web Developer</p>
              </div>
              {/* Content */}
              <p className='text-sm md:text-base text-justify text-secondary mb-2.5'>
                My name is Tanveer Ahmed. I am a Frontend Web Developer, and I'm
                very passionate and dedicated to my work.
              </p>
              <p className='text-sm md:text-base text-justify text-secondary mb-2.5'>
                With a fresh mindset to start my Frontend Journey, I have acquired
                the skills and knowledge necessary to make your project a success.
                I enjoy every step of the design process, from discussion and
                collaboration.
              </p>
              {/* Social Buttons */}
              <div className="flex justify-start gap-3 my-2.5">
                    <a className='hover:scale-125 duration-300' href="https://github.com/amdtaher" target="_blank"><FaGithub size={35}/></a>
                    <a className='hover:scale-125 duration-300' href="https://web.facebook.com/profile.php?id=100015140653815" target="_blank"><FaFacebook size={35}/></a>
                    <a className='hover:scale-125 duration-300' href="https://www.linkedin.com/in/tanveer-ahmed7296/" target="_blank"><FaLinkedin size={35}/></a>
              </div>
              {/* About Buttons */}
              <div className="capitalize flex text-sm gap-5 mt-5">
                <NavLink to='/contact' className="btn group">
                  contact me <FaPaperPlane className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 inline-block ml-1.5' />
                </NavLink>
                <a download='Taher_Ahmed' href={cv} className="btn group">
                  download CV <FaDownload className='group-hover:translate-y-1 duration-300 inline-block ml-1.5' />
                </a>
              </div>
            </section>
            
            {/* Skills Section */}
            <section className={`${activeSection === 'skills' ? '' : 'hidden'} md:min-h-[473px] lg:min-h-[440px] xl:min-h-[400px]`}>
              {/* Section Title */}
              <div className="uppercase border-b border-dark pb-5 mb-5">
                <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>what i learned
                <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">skills</span></h4>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2.5 text-secondary md:px-3">
                <ul className='flex gap-2.5 text-xl font-semibold uppercase relative before:w-2 before:h-2 before:rounded-full before:absolute before:top-2.5 before:-left-4 before:bg-secondary'>
                  <li>html5,</li>
                  <li>css3,</li>
                  <li>javascript <span className='capitalize'>(core)</span></li>
                </ul>
                <ul className='flex gap-2.5 text-xl font-semibold uppercase relative before:w-2 before:h-2 before:rounded-full before:absolute before:top-2.5 before:-left-4 before:bg-secondary'>
                  <li>react,</li>
                  <li>tailwind,</li>
                  <li>bootstrap,</li>
                  <li>sass</li>
                </ul>
                <ul className='flex gap-2.5 text-xl font-semibold uppercase relative before:w-2 before:h-2 before:rounded-full before:absolute before:top-2.5 before:-left-4 before:bg-secondary'>
                  <li>github,</li>
                  <li>figma,</li>
                  <li>wordpress</li>
                </ul>
              </div>
              {/* About Buttons */}
              <div className="capitalize flex text-sm gap-5 mt-5">
                <button className='btn capitalize group' onClick={toggleShowMore}>
                    show all <FaChevronDown size={17} className='group-hover:translate-y-1 duration-300 inline-block ml-1.5'/>
                </button>  
              </div>
            </section>
          </div>

        {/* Skills Component */}
        {showMore && (
          <div className="col-span-12 w-full mx-auto">
            <Skills/>
          </div>
        )}

        </div>
      </div>
    </>
  );
};

export default About;
