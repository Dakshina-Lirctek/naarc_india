import React from "react";
import "./Slider.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
  url: img1,
  caption: 'First Slide'
  },
  {
  url: img2,
  caption: 'Second Slide'
  },
  {
  url: img3,
  caption: 'Third Slide'
  },
];

export default function Slider () {
  return (
    <div className="slide">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div class="img-fluid" style={{'backgroundImage': `url(${slideImage.url})`, minHeight:"537px" , width:"100%" }}>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

