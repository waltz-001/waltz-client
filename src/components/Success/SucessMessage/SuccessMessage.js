import { Link } from "react-router-dom";

const SuccessMessage = ({ data, id, tokenId }) => {
  if (data === null) return;

  if (data.status === 200) {
    return (
      <>
        <h1 className="signin-head-txt">Welcome, Let's Roll in</h1>
        <div className="col-md-6 right-destination-page borde part2 shadow rounded ">
          <div className="top-container">
            <h1 className="text-success">Successful</h1>
            <div className="icon-container bg-success">
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
          <div>
            <p className="text-white success-message">
              Congratulations! Your account has been created
            </p>
            <button className="continue-btn-container text-white rounded-pill d-flex mx-auto align-items-center justify-content-center">
              <Link to={"/"} className="continue-btn">
                Continue
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="signin-head-txt">Oops! Try again</h1>
        <div className="col-md-6 right-destination-page  borde part2 shadow rounded ">
          <div className="top-container">
            <h1 className="text-danger">Registration Unsuccessful</h1>
            <div className="icon-container bg-danger">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div>
            <p className="text-white success-message">{data.data.message}</p>
            <button className="continue-btn-container text-white rounded-pill d-flex mx-auto align-items-center justify-content-center mb-4">
              <Link to={"/"} className="continue-btn ">
                Continue
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default SuccessMessage;
