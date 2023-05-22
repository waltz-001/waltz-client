import "./Success.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SuccessMessage from "./SucessMessage/SuccessMessage";

const Success = () => {
  const { id, tokenId } = useParams();
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://waltz-server.onrender.com/register/${id}/verify/${tokenId}`
      );
      setData(response);
    } catch (e) {
      console.log(e);
      setData(e.response);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="Register">
      <div className="signin-container containe">
        {data == null ? (
          <>
            <h1 className="signin-head-txt">Welcome, Let's Roll in</h1>
            <div className="col-md-6 right-destination-page borde part2 shadow rounded ">
              <div className="top-container">
                <h1 className="text-success">Click To Verify</h1>
                <div className="icon-container bg-success text-white">
                  <i className="fa-solid fa-question"></i>
                </div>
              </div>
              <div>
                <p className="text-white success-message">
                  Great! You are just one click away
                </p>
                <button
                  className="continue-btn-container text-white rounded-pill d-flex mx-auto align-items-center justify-content-center"
                  onClick={() => getData()}
                >
                  Verify
                </button>
              </div>
            </div>
          </>
        ) : null}
        <SuccessMessage data={data} id={id} tokenId={tokenId} />
      </div>
    </div>
  );
};

export default Success;
