import "./Loading.css";
import Loader from "../../assests/gif/loadinggif.gif";

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
