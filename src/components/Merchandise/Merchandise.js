import "../../assests/fonts/Antonio-Bold.ttf";
import "./Merchandise.css";
import merch1 from "../../assests/images/merch1.png";
import merch2 from "../../assests/images/mercg2.png";
import merch3 from "../../assests/images/merch3.png";
import alumni1 from "../../assests/images/alumni1.png";
import alumni2 from "../../assests/images/alumni2.png";
import alumni3 from "../../assests/images/alumni3.png";
import { useState } from "react";

const Merchandise = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="merch-container">
      <div className="merch-header">
        <h1>
          MERCHEN<br></br>
          <br></br>DISE
        </h1>
      </div>

      {option === 1 ? (
        <div className="merch-body">
          <div className="merch-option">
            <div className="student activebutton" onClick={() => setOption(1)}>
              <p>Student</p>
            </div>
            <div className="alumni " onClick={() => setOption(2)}>
              <p>Alumni</p>
            </div>
          </div>
          <div></div>
          <div className="body-content">
            <img src={merch1} alt="#" className="i1"></img>
            <img src={merch2} alt="#" className="i2"></img>
            <img src={merch3} alt="#" className="i3"></img>
            <p className="f">
              <span className="txtgrad0">F</span>
              <span className="txtgrad">ASHION</span>
            </p>
            <p className="g">
              <span className="txtgrad1">GIVE</span>
              <span className="txtgrad0">S</span>
            </p>
            <p className="i">
              <span className="txtgrad0">I</span>
              <span className="txtgrad">MPRE</span>
              <span className="txtgrad0">SS</span>
              <span className="txtgrad">ION</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="merch-body">
          <div className="merch-option">
            <div className="student" onClick={() => setOption(1)}>
              <p>Student</p>
            </div>
            <div className="alumni activebutton" onClick={() => setOption(2)}>
              <p>Alumni</p>
            </div>
          </div>
          <div></div>
          <div className="body-content">
            <img src={alumni1} alt="#" className="i1"></img>
            <img src={alumni2} alt="#" className="i2"></img>
            <img src={alumni3} alt="#" className="i3"></img>
            <p className="f">
              <span className="txtgrad0">F</span>
              <span className="txtgrad">ASHION</span>
            </p>
            <p className="g">
              <span className="txtgrad1">GIVE</span>
              <span className="txtgrad0">S</span>
            </p>
            <p className="i">
              <span className="txtgrad0">I</span>
              <span className="txtgrad">MPRE</span>
              <span className="txtgrad0">SS</span>
              <span className="txtgrad">ION</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Merchandise;
