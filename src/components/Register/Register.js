import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
import PageThree from "./PageThree/PageThree";
import "./Register.css";
import React, { useState } from "react";
import StepProgressBar from "./StepProgressBar/StepProgressBar";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import axios from "axios";
/**
 * {
  "firstName": "Jon",
  "lastName": "Snow",
  "gender": "Male",
  "email": "jonsnow@gmail.com",
  "contactNumber": "9123123123",
  "userRole": "UITAN",
  "department": "IT",
  "year": 3,
  "batch": "",
  "companyName": "",
  "instituteName": "",
  "password": "Kolk@t@2023"
}
 */

const updateData = (values) => {
  let nameArray = values.firstName.split(" ", 2);
  values.firstName = nameArray[0];
  values.lastName = nameArray[1];
  if (
    values.userRole === "student" ||
    values.userRole === "faculty" ||
    values.userRole === "alumina"
  ) {
    values.instituteName =
      "University Institute of Technology, Burdwan University";
  }
  delete values.confirmPassword;
};

const initialValues = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  gender: "",
  userRole: "",
  department: "",
  year: "",
  rollNumber: "",
  batch: "",
  companyName: "",
  instituteName: "",
  password: "",
};

const Register = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      updateData(values);
      // onSubmit(values);
      console.log(values);
    },
  });

  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  return (
    <div className="Register">
      <div className="signin-container containe">
        <h1 className="signin-head-txt">Let's Get Classy</h1>
        <div className="card-container borde" style={{ height: "81%" }}>
          <div
            className="card borde mb-3 shadow rounded"
            style={{ width: "90%", height: "90%" }}
          >
            <div className="row g-0">
              <div className="col-md-6 borde part1 shadow rounded">
                <span className="extra-txt d-flex align-items-center justify-content-center">
                  Already Registered?{" "}
                  <a className="extra-txt-link" href="/signin">
                    {" "}
                    Sign In{" "}
                  </a>
                </span>
              </div>
              <div className="col-md-6   borde part2 shadow rounded">
                <h5 className="card-title text-center">Register</h5>

                <StepProgressBar page={page} />

                <form onSubmit={handleSubmit}>
                  {
                    {
                      pageone: (
                        <PageOne
                          values={values}
                          errors={errors}
                          touched={touched}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleSubmit={handleSubmit}
                          nextPage={nextPage}
                          setFieldValue={setFieldValue}
                        />
                      ),

                      pagetwo: (
                        <PageTwo
                          values={values}
                          errors={errors}
                          touched={touched}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          nextPage={nextPage}
                          setFieldValue={setFieldValue}
                        />
                      ),
                      pagethree: (
                        <div>
                          <PageThree
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                          />

                          <div className="submit-btn">
                            <button
                              className="btn text-white rounded-pill d-flex mx-auto align-items-center justify-content-center"
                              type="submit"
                              style={{
                                height: "3rem",
                                width: "30%",
                                backgroundColor: "#A023BF",
                              }}
                              onClick={() => nextPage("pagetwo")}
                            >
                              PREVIOUS
                            </button>
                            <button
                              className="btn text-white rounded-pill d-flex mx-auto align-items-center justify-content-center"
                              type="submit"
                              style={{
                                height: "3rem",
                                width: "30%",
                                backgroundColor: "#A023BF",
                              }}
                            >
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      ),
                    }[page]
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
