import React, { useState } from 'react';
import { FaPaperPlane, FaFacebook, FaGithub, FaLinkedin, FaDownload, FaCaretUp, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-scroll';
import Skills from '../Skills/Skills';
import aboutImage from '../../assets/img/Taher-Ahmed.png';
import cv from "../../assets/img/Taher-Ahmed.pdf"

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showMore, setShowMore] = useState(false);

  // Switching Sections
  const switchToAbout = ()=>{
    setActiveSection('about');
  }
  const switchToSkills = ()=>{
    setActiveSection('skills');
  }

  // Extend to Skills
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
      {/* About Section */}
      <section>
        <div className="container mx-auto py-16 md:pt-20 md:pb-36" id='about'>
          <div className="grid grid-cols-12 grid-flow-row gap-5 relative px-5 sm:px-0">
            {/* About Image */}
            <div className="col-span-12 md:col-span-6">
              <img className='w-auto mx-auto bg-subText image-radius' src={aboutImage} alt="picture_of_mine" />
            </div>
            {/* About Content */}
            <div className="col-span-12 md:col-span-6 flex flex-col justify-start">
              {/* Switching Button */}
              <div className='overflow-hidden w-[250px] mx-auto flex flex-row justify-evenly items-center mt-5 md:mt-0 mb-12 md:mb-14 lg:mb-20 rounded-full text-xl font-semibold border border-secondary'>
                <button onClick={switchToAbout} className={`${activeSection === 'about' ? 'activeSection' : ''} capitalize duration-300 py-3 pr-8 pl-10`}>about</button>
                <button onClick={switchToSkills} className={`${activeSection === 'skills' ? 'activeSection' : ''} capitalize duration-300 py-3 pl-8 pr-10`}>skills</button>
              </div>

              {/* The About Section */}
              <section className={activeSection === 'about' ? '' : 'hidden'}>
                {/* Section Title */}
                <div className="uppercase border-b border-lightDark pb-5 mb-5">
                  <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>taher ahmed tanveer
                  <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">about</span></h4>
                  <p className='text-lg text-subText font-semibold italic'>Frontend Web Developer</p>
                </div>
                {/* Content */}
                <p className='text-sm md:text-base text-justify text-subText mb-2.5'>
                  My name is Tanveer Ahmed. I am a Frontend Web Developer, and I'm
                  very passionate and dedicated to my work.
                </p>
                <p className='text-sm md:text-base text-justify text-subText mb-2.5'>
                  With a fresh mindset to start my Frontend Journey, I have acquired
                  the skills and knowledge necessary to make your project a success.
                  I enjoy every step of the design process, from discussion and
                  collaboration.
                </p>
                {/* Social Buttons */}
                <div className="flex justify-start gap-3 py-3">
                      <a className='hover:scale-125 duration-300' href="https://github.com/amdtaher" target="_blank"><FaGithub size={35}/></a>
                      <a className='hover:scale-125 duration-300' href="https://web.facebook.com/profile.php?id=100015140653815" target="_blank"><FaFacebook size={35}/></a>
                      <a className='hover:scale-125 duration-300' href="https://www.linkedin.com/in/tanveer-ahmed7296/" target="_blank"><FaLinkedin size={35}/></a>
                </div>
                {/* About Buttons */}
                <div className="capitalize flex text-sm md:text-base gap-5 mt-5">
                  <Link  
                  to="contact" //it catches id
                  activeClass="btn group"
                  smooth={true} 
                  duration={1000} 
                  onSetActive={handleSetActive}
                  className='btn group cursor-pointer'>
                    contact me <FaPaperPlane className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 inline-block ml-1.5' />
                  </Link>
                  <a download='Taher_Ahmed' href={cv} className="btn group">
                    download CV <FaDownload className='group-hover:translate-y-1 duration-300 inline-block ml-1.5' />
                  </a>
                </div>
              </section>
              
              {/* The Skills Section */}
              <section className= {activeSection === 'skills' ? '' : 'hidden'}>
                {/* Section Title */}
                <div className="uppercase border-b border-lightDark pb-5 mb-5">
                  <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>what i learned
                  <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">skills</span></h4>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-2.5 text-subText py-5">
                  <ul className='flex gap-2.5 text-lg md:text-xl font-semibold uppercase text-white'>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>html5</li>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>css3</li>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>javascript <span className='capitalize'>(core)</span></li>
                  </ul>
                  <ul className='flex gap-2.5 text-lg md:text-xl font-semibold uppercase text-white'>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>react</li>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>tailwind</li>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>bootstrap</li>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>sass</li>
                  </ul>
                  <ul className='flex gap-2.5 text-lg md:text-xl font-semibold uppercase text-white'>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>github</li>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>figma</li>
                    <li className='bg-secondary cursor-pointer rounded-full duration-300 hover:bg-primary py-2.5 px-4'>wordpress</li>
                  </ul>
                </div>
                {/* About Buttons */}
                <div className="capitalize flex text-sm gap-5 mt-5">
                  <button className='btn text-base capitalize group' style={{ display:'inline-flex', alignItems: 'center' }} onClick={toggleShowMore}>
                      {showMore ? 'show less' : 'show all'}
                      {showMore ? <FaCaretUp size={20} className='ml-1' /> : <FaCaretDown size={20} className='ml-1' />}
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
      </section>
    </>
  );
};

export default About;
