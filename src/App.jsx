import React from 'react'
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import SectionThree from './component/SectionThree'
import SectionFour from './component/SectionFour'
import AreaOfInterst from './component/AreaOfInterst'
import ContactForm from './component/ContactForm'
import HomePage from './component/HomePage'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <SectionThree />
      <SectionFour />
      <AreaOfInterst />
      <HomePage />
      <ContactForm />
    </>
  )
}

export default App