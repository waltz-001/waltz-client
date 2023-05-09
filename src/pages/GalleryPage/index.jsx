import * as React from "react";
const Card = React.lazy(() => import('./Card.jsx'));
const GalRenderImg = ({ filteredImages }) => {
  return (
    <div className="GalleryPics">
      {filteredImages.map((image) => (
        <React.Suspense fallback={null} key={image.id}>
        <Card image={image} />
      </React.Suspense>
      ))}
    </div>
  );
};
function GalleryPage() {
  const [imagesData, setImagesData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setImagesData(data);
        setLoading(false);
      } catch (error) {
        prompt(error);
      }
    };
    fetchData();
  }, []);
  const [select, setSelect] = React.useState(1);
  const filteredImages = React.useMemo(
    () => imagesData.filter((image) => image.albumId === select),
    [imagesData, select]
  );
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
    if (deviceType == "mobile") {
      import("./Gallery.css");
    } else if (deviceType == "tablet") {
      import("./Gallery.css");
    } else {
      import("./Gallery.css");
    }
  }, []);

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
              select === 1
                ? { backgroundColor: "var(--colYel)" }
                : { backgroundColor: "var(--colPnk)" }
            }
            onClick={() => setSelect(1)}
          >{"Featured"}</li>
          <li
            className="Goptnbt"
            style={
              select === 2
                ? { backgroundColor: "var(--colYel)" }
                : { backgroundColor: "var(--colPnk)" }
            }
            onClick={() => setSelect(2)}
          >{"Albums"}</li>
          <li
            className="Goptnbt"
            style={
              select === 3
                ? { backgroundColor: "var(--colYel)" }
                : { backgroundColor: "var(--colPnk)" }
            }
            onClick={() => setSelect(3)}
          >{"Public"}</li>
        </ul>
        {loading == true ? 
          null
        : (
          <GalRenderImg filteredImages={filteredImages} />
        )}
      </div>
    </div>
  );
}
export default GalleryPage;
