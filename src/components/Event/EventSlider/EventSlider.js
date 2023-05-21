import React, { useState, useContext } from 'react'
import Event from './Event';
import './EventSlider.css'
import UserContext from "../../../utils/UserContext";


let eventOnScreen = 3;

let width = window.innerWidth;

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

  const { user, setUser } = useContext(UserContext);

  // ARRAY OF THE EVENT PHOTOS

  const moveRight = () => {
    if (lastImageNo + 1 < user.events.length) {
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
    <div className="my-container"
      id="cardID">
      <div className={firstImageNo === 0 ? "navArrows navArrows-inactive" : "navArrows"} onClick={moveLeft} id="left">&#10094;</div>
      {
        user.events.filter((event)=> event.hot).map((ev, i) => {
          if (i >= firstImageNo && i <= lastImageNo) {
            return (
              <Event key={i} url={ev.imageUrl} />
            );
          }
          else{
            return null
          }
          // console.log(ev)

        })

      }
      <div className={lastImageNo === user.events.length-1 ? "navArrows navArrows-inactive" : "navArrows"} onClick={moveRight} id="right">&#10095;</div>
    </div>
  );
}


