import { useEffect } from "react";
import "./Alert.css";

const Alert = ({ isShow, setIsShow, data }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 4000);
  }, [isShow]);

  if (isShow === false) return;

  if (data.status === 201 || data.status === 200) {
    return (
      <div className="alert-box position-absolute end-0">
        <div className="alert alert-success" role="alert">
          {data.data.message}
          <div className="timer-line"></div>
        </div>
      </div>
    );
  } else if (data.status === 208) {
    return (
      <div className="alert-box position-absolute end-0">
        <div className="alert alert-primary" role="alert">
          {data.data.message}
          <div className="timer-line"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="alert-box position-absolute end-0">
        <div className="alert alert-danger" role="alert">
          {data.data.message}
          <div className="timer-line"></div>
        </div>
      </div>
    );
  }
};
export default Alert;
