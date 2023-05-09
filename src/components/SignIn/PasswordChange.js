import "../Success/Success.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import SuccessMessage from "./SucessMessage/SuccessMessage";

const PasswordChange = () => {

  const { id, tokenId } = useParams();
  const [data, setData] = useState(null);
  const passwordRef = useRef(null);
  const getData = async (values) => {
    try {
      const response = await axios.put(
        `https://waltz-server.onrender.com/reset-password/${id}/reset-password/${tokenId}`, values
      );
      console.log(id)
      console.log(tokenId)
      console.log(response)
      setData(response);
    } catch (e) {
      console.log(e);
      setData(e.response);
    }
  };


  const onSubmit= async (values) =>{

    values = passwordRef.current.value;
    // const obj = JSON.parse(`"password " : ${values}`)
    const str = JSON.stringify(values)
    const obj = JSON.parse(`{"password" : ${str}}`)
    // const obj = Object.create(values)
    console.log(str );
    console.log(obj );
    getData(obj);
    
  }
 

  return (
    <div className="Register">
      <div className="signin-container containe">
      <span className="form-floating">
                        <input
                        ref={passwordRef}
                          type="password"
                          name="password"
                          autoComplete="off"
                          className="form-control text-warning"
                          id="password"
                          placeholder="Password"
                        //   value={values.password}
                          onChange={(e)=>e.target.value}
                        //   onBlur={handleBlur}
                        />
                        <label
                          htmlFor="password"
                          className="text-secondary label-txt"
                        >
                          Password
                        </label>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>    
                      </span>
        {/* <SuccessMessage data={data} id={id} tokenId={tokenId} /> */}
      </div>
    </div>
  );
};

export default PasswordChange;
