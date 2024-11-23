import React from 'react'
import "./Photo.css"
import Img6 from '../../assets/pic 1 (1).jpg';
import Img7 from '../../assets/pic 1 (2).jpg';
import Img8 from '../../assets/pic 5.jpg';
import Img9 from '../../assets/pic 2.jpg';
import Img10 from '../../assets/pic 4.jpg';
import Img11 from '../../assets/pic 12.jpg';
function Photo() {
  return (
    <div className='Photo'>
        <br /><br />
<h1>My Photo</h1>
<div id="photos">
<img src={Img6} alt="ngabo pic" />
<img src={Img7} alt="ngabo pic" />
<img src={Img10} alt="ngabo pic" />
</div>
<div id="photos">
<img src={Img9} alt="ngabo pic" />
<img src={Img11} alt="ngabo pic" />
<img src={Img8} alt="ngabo pic" />
</div>
<h2>powered by me</h2>
    </div>
  )
}

export default Photo
