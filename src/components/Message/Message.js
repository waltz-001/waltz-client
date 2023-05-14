import "./Message.css";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Message = ({ data }) => {
  return (
    <div className="message-box">
      {data ? (
        <div>
          {data.status === 201 ? (
            <div>
              <p className="text-white message-text-box">{data.data.message}</p>
              <p className="text-white message-text-box">Email Sent!</p>
              <p className="text-white message-text-box">
                Please, check your email inbox or spam to verify
              </p>
              {/* <button className="continue-btn-container text-white rounded-pill d-flex mx-auto align-items-center justify-content-center mb-4">
                <Link to={"/"} className="continue-btn ">
                  Continue
                </Link>
              </button> */}
            </div>
          ) : (
            <div>
              <p className="text-white message-text-box">{data.data.message}</p>
              <button className="continue-btn-container text-white rounded-pill d-flex mx-auto align-items-center justify-content-center mb-4">
                <Link to={"/"} className="continue-btn ">
                  Continue
                </Link>
              </button>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Message;
