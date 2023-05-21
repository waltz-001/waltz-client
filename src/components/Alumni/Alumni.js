import React, { useContext, useEffect, useState } from "react";
import "./Alumni.css";
import topPic from "../../assests/images/invite-bg.png";
// import bottomPic from "../../assests/images/invite-footer.png";
import txt from "../../assests/images/txt.png";
import ellipse from "../../assests/images/ellipse.png";
import axios from "axios";
import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import UserContext from "../../utils/UserContext";

function Alumni() {
  // DOWNLOAD
  const [userName, setUserName] = useState("");
  const { user, setUser } = useContext(UserContext);
  const getName = async () => {
    try {
      const response = await axios.get(
        "https://waltz-server.onrender.com/getuserfirstname",
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      setUserName(response.data.user);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getName();
  }, []);
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "waltz-invitation.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  // DOWNLOAD end
  return (
    <>
      <div className="capture container">
        <div
          className="main container rounded m-5  mt-3 d-block mx-auto"
          ref={ref}
        >
          {/* Head PNG */}
          <section className="hero-section">
            <img src={topPic} className="hero-bg-image img-fluid" alt="top" />
          </section>
          {/* Second section */}
          <section className="subhero-section">
            <div className="row   mx-auto">
              {/* PART 1 */}
              <div className="col-8 subhero-section-part1 mt-5">
                <span className="subhero-section-part1-headtxt">
                  INVITATION FOR <span className="waltz-txt">WALTZ 2K23</span>{" "}
                </span>
                <span className="subhero-section-part1-bodytxt row mt-4 text-light">
                  <span className="text1 mb-3">Dear {userName},</span>
                  <span className="text2  ">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero dignissimos distinctio repellat laborum quia
                    perferendis tempora libero quae, et nisi recusandae dolores
                    natus sed minima aspernatur assumenda, maxime voluptatum
                    blanditiis?{" "}
                  </span>
                  <span className="text3 row mx-auto mt-4 p-2 mb-5 borde ">
                    <span className="col-5 text3-part1 mx-auto borde text-start">
                      <span className="text3-part1-uptxt">26 MAY</span>

                      <br />
                      <span className="text3-part1-uptxt">2023</span>
                    </span>

                    <span className="col-6   text3-part2 mx-auto borde text-start">
                      <span className="text3-part1-uptxt">
                        University Institute of Technology, Burdwan
                      </span>
                      <br />
                      <span className="text3-part1-uptxt">4:00pm - 8:00pm</span>
                    </span>
                  </span>
                </span>
              </div>
              {/* PART 2 */}
              <div className="col-4 borde subhero-section-part2 ">
                <section className="hero-section-foot borde d-flex align-items-end">
                  <img
                    src={ellipse}
                    className="hero-bg-image img-fluid under fab fa-flip"
                    alt="top"
                  />
                  <img
                    src={txt}
                    className="hero-bg-image img-fluid over"
                    alt="top"
                  />
                </section>
              </div>
            </div>
            {/* Button section */}
          </section>
        </div>
      </div>
      <span className="d-grid gap-2 m-5">
        <button
          className="btn text-white rounded shadow d-flex mx-auto align-items-center justify-content-center fa-beat"
          type="submit"
          style={{
            height: "3rem",

            backgroundColor: "#A023BF",
          }}
          onClick={onButtonClick}
        >
          DOWNLOAD
        </button>
      </span>
    </>
  );
}

export default Alumni;
