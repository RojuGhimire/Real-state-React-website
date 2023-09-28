import { useState } from 'react'
import './App.css'
import Hero from './component/hero'
import { NewestDeal } from './component/NewestDeal'
import { AboutUs } from './component/AboutUs'
import BestDeal from './component/BestDeal'
import { Footer } from './component/Footer'


function App() {
  return (
    <div className='App'>
      <Hero />
      <NewestDeal />
      <AboutUs />
      <BestDeal />
      <Footer />
            
    </div>
  )
}

export default App
