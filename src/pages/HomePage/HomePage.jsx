import React from 'react'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Services from '../../components/Services/Services'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import ContactUs from '../../components/ContactUs/ContactUs'

const HomePage = () => {
  return (
    <>
    <NavigationBar/>
    <About/>
    <Services/>
    {/* <Skills/> */}
    <Projects/>
    <Testimonials/>
    <Contact/>
    {/* <ContactUs/> */}
    <Footer/>
    </>
  )
}

export default HomePage