import React from 'react'
import "../../App.css"
import "./About.css"
function About() {
  return (
    <div className='About'>
         <div className="section-1">
            <br /><br /><br /><br /><br />
        <h1>About Me</h1> <br /><br /><br /><br />
            <fieldset>
                Name : Ngabo daniel <br />
                Birthdate : 30/11/2006 <br />
                Status : Boyhood <br />
                Proffession : Programmer
            </fieldset>
        <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
           ip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat
           e velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
           laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
      </div>
    <div className="section-2">
      <h1>My Skills</h1><br />
      <h2 style={{marginLeft:"500px"}}>HTML</h2>
      <div style={{display:"flex"}}>
        <p style={{width:"80%",backgroundColor:"gray",color:"gray"}}>j</p>
        <p style={{width:"10%",backgroundColor:"white"}}></p>
      </div>
      <h2 style={{marginLeft:"500px"}}>CSS</h2>
      <div style={{display:"flex"}}>
        <p style={{width:"75%",backgroundColor:"gray",color:"gray"}}>j</p>
        <p style={{width:"15%",backgroundColor:"white"}}></p>
      </div>
      <h2 style={{marginLeft:"500px"}}>Javascript</h2>
      <div style={{display:"flex"}}>
        <p style={{width:"70%",backgroundColor:"gray",color:"gray"}}>j</p>
        <p style={{width:"20%",backgroundColor:"white"}}></p>
      </div>
    </div>
    </div>
  )
}

export default About
