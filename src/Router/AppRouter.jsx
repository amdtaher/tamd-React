import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../components/About/About'
import HomePage from '../pages/homePage/HomePage'
import ContactPage from '../pages/ContactPage/ContactPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/projects' element={<ProjectPage/>}/>
        <Route exact path='/contact' element={<ContactPage/>}/>
      </Routes>
    </>
  )
}

export default AppRouter