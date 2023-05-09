import React, { useContext, useState } from "react";
import google from "../../assests/images/icon1.png";
import facebook from "../../assests/images/icon2.png";
import "./SignIn.css";
import { useFormik } from "formik";
import { signInSchema } from "../../schemas";
import axios from "axios";
import Alert from "../Alert/Alert";
import UserContext from "../../utils/UserContext";
import { Link, redirect, useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};

function SignIn() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [events, setEvents] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const getGallery = async ({ data }) => {
    try {
      const response = await axios.get(
        "https://waltz-server.onrender.com/gallery",
        {
          headers: {
            Authorization: data.token,
          },
        }
      );
      setGallery(response.data.gallery);
    } catch (e) {
      console.log(e);
    }
  };

  const getEvents = async ({ data }) => {
    try {
      const response = await axios.get(
        "https://waltz-server.onrender.com/events",
        {
          headers: {
            Authorization: data.token,
          },
        }
      );
      setEvents(response.data.events);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://waltz-server.onrender.com/login",
        values
      );
      console.log(response);
      setData(response);
      getEvents(response);
      getGallery(response);

      setUser({
        token: response.data.token,
        isAlumni: response.data.isAlumni,
        events: events,
        gallery: gallery,
      });
      setIsShow(true); 
      navigate("/");
    } catch (e) {
      console.log(e.response);
      setData(e.response);
      setIsShow(true);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        onSubmit(values);

      },
    });

  return (
    <>
      <Alert isShow={isShow} setIsShow={setIsShow} data={data} />

      <div className="signin-container containe">
        <div className="card-container borde" style={{ height: "81%" }}>
          <div
            className="card borde shadow rounded"
            style={{ width: "90%", height: "100%", marginBottom: "6rem" }}
          >
            <div className="row g-0">
              <div className="col-md-6 borde part1 shadow rounded">
                {/* <img src={Box} className="img-fluid rounded-start boximg" alt="..."/> */}
                <span className="extra-txt d-flex align-items-center justify-content-center">
                  Don't have an account?{" "}
                  <Link className="extra-txt-link" to="/">
                    {" "}
                    Sign Up{" "}
                  </Link>
                </span>
              </div>
              <div className="col-md-6 container borde part2 shadow rounded">
                <form className="card-body" onSubmit={handleSubmit}>
                  <h5 className="card-title text-center borde">Sign In</h5>
                  <p className="card-text">
                    <span className="input-group mb-1 email-box">
                      <span className="input-group-text px-4">
                        <i
                          className="fa-solid fa-envelope fa-beat fa-xl"
                          style={{ color: "#DFB6FF" }}
                        ></i>
                      </span>
                      <span className="form-floating">
                        <input
                          type="email"
                          name="email"
                          autoComplete="off"
                          className="form-control text-warning"
                          id="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <label htmlFor="email" className="text-secondary">
                          Email
                        </label>
                      </span>
                    </span>
                    {errors.email && touched.email ? (
                      <span className="form-error text-danger borde">
                        {errors.email}
                      </span>
                    ) : null}
                    <span className="input-group mb-1 mt-2 pd-box">
                      <span className="input-group-text px-4">
                        <i
                          className="fa-solid fa-unlock-keyhole fa-bounce fa-xl"
                          style={{ color: "#DFB6FF" }}
                        ></i>
                      </span>
                      <span className="form-floating">
                        <input
                          type="password"
                          name="password"
                          autoComplete="off"
                          className="form-control text-warning"
                          id="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label
                          htmlFor="password"
                          className="text-secondary label-txt"
                        >
                          Password
                        </label>
                      </span>
                    </span>
                    {errors.password && touched.password ? (
                      <span className="form-error text-danger borde">
                        {errors.password}
                      </span>
                    ) : null}

                    {/* Remember me section */}

                    <span className="d-grid gap-2">
                      <span
                        className="mb-4 text-secondary d-flex justify-content-between align-items-center justify-content-center"
                        type="button"
                        style={{ height: "3rem", width: "100%" }}
                      >
                        <span className="rem ">
                          <input type="checkbox" required /> Remember me
                        </span>
                        <span className="forg">
                          <a href="/">Forgot password?</a>
                        </span>
                      </span>
                    </span>

                    {/* Button section */}
                    <span className="d-grid gap-2">
                      <button
                        className="btn text-white rounded-pill d-flex mx-auto align-items-center justify-content-center"
                        type="submit"
                        style={{
                          height: "3rem",
                          width: "50%",
                          backgroundColor: "#A023BF",
                        }}
                      >
                        SIGN IN
                      </button>
                    </span>
                    <span className="d-grid gap-2">
                      <span
                        className="borde mt-1 text-secondary d-flex mx-auto align-items-center justify-content-center"
                        type="button"
                        style={{ height: "3rem", width: "100%" }}
                      >
                        {" "}
                        ————— or continue with —————
                      </span>
                      <span className="d-flex mx-auto mt-2 gap-5">
                        <a
                          href="/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-dark me-4"
                        >
                          {/* <i className="fab fa-facebook fa-flip"></i> */}
                          <img
                            src={google}
                            alt=""
                            className="fa-flip fab"
                            style={{ width: "2rem" }}
                          />
                        </a>

                        <a
                          href="/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-dark me-4"
                        >
                          {/* <i className="fab fa-google  fa-flip"></i> */}
                          <img
                            src={facebook}
                            alt=""
                            className="fa-flip fab"
                            style={{ width: "2.2rem" }}
                          />
                        </a>
                      </span>
                    </span>
                    <span className="extra-txt-res align-items-center justify-content-center">
                      Don't have an account?{" "}
                      <a className="extra-txt-link" href="/">
                        {" "}
                        Sign Up{" "}
                      </a>
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
