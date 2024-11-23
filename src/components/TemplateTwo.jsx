import "./TemplateTwo.css"
import React from 'react'
import Img1 from '../assets/pic 2.jpg';
import Img2 from '../assets/pic 11.jpg';
import Img3 from '../assets/img 1.png';
import Img4 from '../assets/img 2.jpg';
import Img5 from '../assets/img 3.jpeg';
import Img6 from '../assets/pic 1 (1).jpg';
import Img7 from '../assets/pic 1 (2).jpg';
import Img8 from '../assets/pic 5.jpg';
import Img9 from '../assets/pic 2.jpg';
import Img10 from '../assets/pic 4.jpg';
import Img11 from '../assets/pic 8.jpg';
function TemplateTwo() {
  return (
    <div className='two'>
      <div className="intro">

      <h1>I'm Daniel Ng</h1>
      <h2>Coder and Web developer</h2>
      <img src={Img2} alt="my image 1" />
      </div>
      <div className="section-1">
        <h1>About Me</h1>
        <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
           ip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat
           e velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
           laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
    <div className="section-3">
    <h1>My Review</h1>
    <div className="review-1">
      <img src={Img3} alt="my image of people" />
      <div>
        <h3>Faulk Nd</h3>
        <p>He is excellent in all</p>
      </div>
    </div>
    <div className="review-1">
    <img src={Img4} alt="my image of people" />
    <div>
        <h3>Faulk Nd</h3>
        <p>He is fellow brother</p>
      </div>
    </div>
    <div className="review-1">
    <img src={Img5} alt="my image of people" />
    <div>
        <h3>Faulk Nd</h3>
        <p>No one who is better as him</p>
      </div>
    </div>
    </div>
   <div className="section-4">
    <div id="null">
      
    </div>
 <div className="photo">
<h1>My Photo</h1>
<div id="photos">

<img src={Img6} alt="my image" />
<img src={Img7} alt="my image" />
<img src={Img10} alt="my image" />
</div>
<div id="photos">

<img src={Img9} alt="my image" />
<img src={Img11} alt="my image" />
<img src={Img8} alt="my image" />
</div>

 </div>
   </div>
   <div className="section-5">
   <div id="null">
      
      </div>
      <div className="contact">

    <h2>Contact Me</h2>
      <p> Chicago, US</p>
      <p> Phone: +250 783149241</p>
      <p> Email: ngabodaniel1000@gmail.com</p>

      <center><h3>Let's get in touch send me a message</h3></center>
      <input type="text" placeholder="name" /> <br /><br />
      <input type="text" placeholder="email" /> <br /><br />
      <input type="text" placeholder="message"/><br /><br />
      <button>Send message</button>
    </div>
      </div>

    </div>
  )
}

export default TemplateTwo
