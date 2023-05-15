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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Register">
      <div className="signin-container containe">
        <SuccessMessage data={data} id={id} tokenId={tokenId} />
      </div>
    </div>
  );
};

export default Success;