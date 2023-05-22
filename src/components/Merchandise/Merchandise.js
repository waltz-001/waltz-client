
import '../../assests/fonts/Antonio-Bold.ttf';
import "./Merchandise.css";
import merch1 from "../../assests/images/merch1.png"
import merch2 from "../../assests/images/mercg2.png"
import merch3 from "../../assests/images/merch3.png"

const Merchandise = () => {
  return (
    <div className="merch-container">
      <div className="merch-header"><h1>MERCHEN<br></br><br></br>DISE</h1></div>
          <div className='merch-body'>
          <div className='merch-option'>
              <div className='student'><a href='#'>Student</a></div>
              <div className='alumni'><a href='#'>Alumni</a></div>
          </div><div></div>
                <div className='body-content'>
                <img src={merch1} alt='#' className='i1'></img>
                <img src={merch2} alt='#' className='i2'></img>
                <img src={merch3} alt='#' className='i3'></img>
                <p className='f'><span className='txtgrad0'>F</span><span className='txtgrad'>ASHION</span></p>
                <p className='g'><span className='txtgrad1'>GIVE</span><span className='txtgrad0'>S</span></p>
                <p className='i'><span className='txtgrad0'>I</span><span className='txtgrad'>MPRE</span><span className='txtgrad0'>SS</span><span className='txtgrad'>ION</span></p>
                </div>
          </div>
    </div>
  );
};

export default Merchandise;
