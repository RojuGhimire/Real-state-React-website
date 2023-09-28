import React from 'react'
import heroImg from '../assets/image6.jpg'
export const hero = () => {
  return (
    <div>
     <nav>
        <h1> Real Estate </h1>
        <ul>
            <li>Feature</li>
            <li>Trending</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav> 
        <div>
        <img src={heroImg} alt="Hero Image" />  
<div>
    <div>
        <div>
            <label htmlFor='location'>Location</label>
            <input type="text" placeholder='US' />
        </div>
        <div>
            <label htmlFor='Property'>Property</label>
            <input type="text" placeholder='property' />
        </div>
        <div>
            <label htmlFor='price'>Price</label>
            <input type="text" placeholder='Price' />
        </div>
        

    </div>
</div>
        </div>

    </div>
  )
}
export default hero
