import React from 'react'
import './Event.css'

const Event = ({url}) => {
  return (
    // console.log(url)
    <div className = "cardBox">
      {/* <img src={require(url)}/> */}
      {/* <img src={require( `${ props.url }` )} /> */}
      <img src={url} alt="event Photos" />
    </div>
  );
}

export default Event
