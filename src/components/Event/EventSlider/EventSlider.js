import React, { useState } from 'react'
import Event from './Event';
import './EventSlider.css'
import img from '../../../assests/images/blanck.png'

let eventOnScreen = 3;

let width = window.innerWidth;
// console.log(width);
changeImgNo(width);

window.addEventListener("resize",changeImgNo);
//function for checking screen width and show respective amount of images
function changeImgNo(width){
  if(width<=480){
    eventOnScreen=1;
  }
  else if(width<=1080){
    eventOnScreen = 2;
  }
}
// console.log(eventOnScreen);

export default function EventSlider() {
  const [firstImageNo, setFirstImageNo] = useState(0);
  const [lastImageNo, setLastImageNo] = useState(eventOnScreen - 1);

  // ARRAY OF THE EVENT PHOTOS
  const arr = [
    {
      url: img
    },
    {
      url: img
    },
    {
      url: img
    },
    {
      url: img
    },
    {
      url: img
    }
  ];


  const moveRight = () => {
    if (lastImageNo + 1 < arr.length) {
      setFirstImageNo(firstImageNo + 1);
      setLastImageNo(lastImageNo + 1);
    }
  }


  const moveLeft = () => {
    if (firstImageNo > 0) {
      setFirstImageNo(firstImageNo - 1);
      setLastImageNo(lastImageNo - 1);
    }
  }

  return (
    <div className="container"
      id="cardID">
      <div className="navArrows" onClick={moveLeft} id="left">&#10094;</div>
      {
        arr.map((ev, i) => {
          if (i >= firstImageNo && i <= lastImageNo) {
            return (
              <Event key={i} url={ev.url} />
            );
            
          }
          else{
            return null
          }
          // console.log(ev)

        })

      }
      <div className="navArrows" onClick={moveRight} id="right">&#10095;</div>
    </div>
  );
}


