import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Awards from './components/Awards/Awards'
import Certifications from './components/Certifications/Certifications'
import Timeline from './components/Timeline/Timeline'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Certifications />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
