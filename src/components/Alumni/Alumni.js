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
                    Warm greetings from the students of University Institute of Technology! We hope this letter finds you in good health and high spirits.

We are excited to inform you about the upcoming Cultural Fest Waltz 2k23, scheduled to take place on 26th may 2023 to 28th may 2023 at our campus. As valued members of our alumni community, we extend a heartfelt invitation for you to join us in celebrating this vibrant and diverse event.

The Waltz 2k23 serves as a platform for our current students to showcase their talents, creativity, and cultural heritage through a wide range of performances, exhibitions, and activities. It is an occasion where students, faculty, staff, and alumni come together to foster a sense of unity and pride in our college.

By attending the Waltz 2k23, you will have the opportunity to witness the exceptional talent of our students and reconnect with fellow alumni. We believe your presence and support will greatly inspire and motivate our current students, who look up to you as role models.

We kindly request you to RSVP by 23rd may 2023 to confirm your attendance. If you have any special requirements or if there is anything we can do to facilitate your participation, please let us know, and we will be more than happy to assist you.

Your support and presence at the Cultural Fest will contribute to its success and strengthen the bond between our alumni and our college community. We truly value your continued association with University Institute of Technology and look forward to your presence at this joyful celebration.

Thank you for considering our invitation. We eagerly await your positive response.
{" "}
                  </span>
                  <span className="text3 row mx-auto mt-4 p-2 mb-5 borde ">
                    <span className="col-5 text3-part1 mx-auto borde text-start">
                      <span className="text3-part1-uptxt">26 MAY</span>

                      <br />
                      <span className="text3-part1-uptxt">2023</span>
                    </span>

                    <span className="col-6   text3-part2 mx-auto borde text-start">
                      <span className="text3-part1-uptxt">
                        Students of UIT<br/>
Media Committee of Waltz 2k23<br/>
University Institute of Technology
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
