import "./Loading.css";
import Loader from "../../assests/gif/loader3.gif";

const Loading = () => {
  return (
    <div className="center-loading">
      <div className="loading-container">
        <img src={Loader} />
      </div>
    </div>
  );
};

export default Loading;
