import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/UserContext";
const Card = React.lazy(() => import("./Card.jsx"));
const GalRenderImg = ({ selectedTag, imagesData }) => {
  return (
    <div className="GalleryPics">
      {imagesData
        .filter((image) => image.type === selectedTag)
        .map((image) => (
          <React.Suspense fallback={null} key={image.id}>
            <Card image={image} />
          </React.Suspense>
        ))}
    </div>
  );
};
function GalleryPage() {
  const userContext = React.useContext(UserContext);
  const user = userContext.user;
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user.token === "") {
      navigate("/signin");
    }
  }, [navigate, user]);
  const [imagesData, setImagesData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getGalery = async () => {
      try {
        const response = await axios.get(
          "https://waltz-server.onrender.com/gallery",
          {
            headers: {
              Authorization: user.token,
            },
          }
        );
        setImagesData(response.data.gallery);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    getGalery();
  }, [user]);
  const [select, setSelect] = React.useState("Featured");
  const [deviceType, setDeviceType] = React.useState(null);

  React.useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|windows phone|edge|crios/i.test(
        userAgent
      );
    const isTablet =
      /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
        userAgent
      );
    if (isMobile) {
      setDeviceType("mobile");
    } else if (isTablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("pc");
    }
    if (deviceType === "mobile") {
      import("./Gallery.css");
    } else if (deviceType === "tablet") {
      import("./Gallery.css");
    } else {
      import("./Gallery.css");
    }
  }, [deviceType]);
  console.log(select);

  return (
    <div className="GalleryPage">
      <div className="GalleryHead">
        <div className="Galinneropacityh">
          <p className="GalleryHeadText">GALLERY</p>
        </div>
      </div>
      <div className="GalleryBody">
        <ul className="GalleryBodyTopOpt">
          <li
            className="Goptnbt"
            style={
              select === "Featured"
                ? { backgroundColor: "var(--colYel)" }
                : { backgroundColor: "var(--colPnk)" }
            }
            onClick={() => setSelect("Featured")}
          >
            {"Featured"}
          </li>
          <li
            className="Goptnbt"
            style={
              select === "Albums"
                ? { backgroundColor: "var(--colYel)" }
                : { backgroundColor: "var(--colPnk)" }
            }
            onClick={() => setSelect("Albums")}
          >
            {"Albums"}
          </li>
          <li
            className="Goptnbt"
            style={
              select === "Public"
                ? { backgroundColor: "var(--colYel)" }
                : { backgroundColor: "var(--colPnk)" }
            }
            onClick={() => setSelect("Public")}
          >
            {"Public"}
          </li>
        </ul>
        {loading === true ? null : (
          imagesData===[]?<p>Gallery Images will be uploaded soon</p>:
          <GalRenderImg imagesData={imagesData} selectedTag={select} />
        )}
      </div>
    </div>
  );
}
export default GalleryPage;
