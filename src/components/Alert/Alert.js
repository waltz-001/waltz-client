import { useContext, useEffect } from "react";
import "./Alert.css";
import AlertContext from "../../utils/AlertContext";

const Alert = () => {
  const { alert, setAlert } = useContext(AlertContext);

  useEffect(() => {
    setTimeout(() => {
      setAlert({
        isShow: false,
        message: null,
      });
    }, 4000);
  }, [alert.isShow]);

  if (alert.isShow === false) return;

  if (alert.message.status === 201 || alert.message.status === 200) {
    return (
      <div className="alert-box position-absolute end-0">
        <div className="alert alert-success" role="alert">
          {alert.message.data.message}
          <div className="timer-line"></div>
        </div>
      </div>
    );
  } else if (alert.message.status === 208) {
    return (
      <div className="alert-box position-absolute end-0">
        <div className="alert alert-primary" role="alert">
          {alert.message.data.message}
          <div className="timer-line"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="alert-box position-absolute end-0">
        <div className="alert alert-danger" role="alert">
          {alert.message.data.message}
          <div className="timer-line"></div>
        </div>
      </div>
    );
  }
};
export default Alert;
