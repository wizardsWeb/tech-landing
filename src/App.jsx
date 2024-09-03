import React from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Counters from './pages/Counters'
import Solution from './pages/Solution'
import Portfolio from './pages/Portfolio'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-900'>
      <Hero />
      <About />
      <Counters />
      <Solution />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
