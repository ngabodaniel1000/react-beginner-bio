import React from 'react'
import "./TemplateOne.css"
import Img2 from "../assets/pic 11.jpg"
import { Link } from 'react-router-dom'


function TemplateOne() {
  return (
    <div className='one'>
        <img src={Img2} alt="image 1" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Photo">Photos</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        
        </ul>
    </div>
  )
}

export default TemplateOne
