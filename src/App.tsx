import { useState } from 'react'
import './App.css'
import Hero from './component/Hero'
import NewestDeal from "./component/NewestDeal";

import { AboutUs } from './component/AboutUs'
import BestDeal from './component/BestDeal'
import { Footer } from './component/Footer'


function App() {
  return (
    <>
    <div className='App w-11/12 md:w-4/5 m-auto'>
      <Hero />
      <NewestDeal />
      <AboutUs />
      <BestDeal />
      
            
    </div>
    <Footer />
    </>
  )
}

export default App
