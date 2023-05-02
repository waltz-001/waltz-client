import React from "react";
import "./PageOne.css";
import MySelect from "../../../utils/Select/Select";
import Input from "../../../utils/Fields/Input";
import { genderOptions, userOptions } from "../../../utils/Options/options";

const PageOne = ({
  nextPage,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <>
      <div className="d-flex flex-column gap-3 text-center ">
        <Input
          name={"firstName"}
          id={"firstName"}
          placeholder={"Full Name"}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-solid fa-user"}
          errors={errors.firstName}
          touched={touched.firstName}
        ></Input>

        <Input
          name={"contactNumber"}
          id={"contactNumber"}
          placeholder={"Contact Number"}
          value={values.contactNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-solid fa-phone-volume"}
          errors={errors.contactNumber}
          touched={touched.contactNumber}
        ></Input>

        <Input
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"Email"}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-solid fa-envelope"}
          errors={errors.email}
          touched={touched.email}
        ></Input>

        <MySelect
          name={"gender"}
          options={genderOptions}
          value={values.gender}
          onChange={(value) => setFieldValue("gender", value.value)}
          placeholder="Gender"
          classname={"fa-solid fa-venus-mars"}
          errors={errors.gender}
          touched={touched.gender}
        />

        <MySelect
          options={userOptions}
          name={"userRole"}
          value={values.userRole}
          classname={"fa-solid fa-briefcase"}
          onChange={(value) => setFieldValue("userRole", value.value)}
          placeholder="What best describes you"
          errors={errors.userRole}
          touched={touched.userRole}
        />

        <div className="d-flex">
          <button
            disabled={
              !values.firstName +
              !values.contactNumber +
              !values.email +
              !values.gender +
              !values.userRole
            }
            className="btn next-btn text-white rounded-pill d-flex mx-auto align-items-center justify-content-center"
            type="submit"
            style={{
              height: "3rem",
              width: "30%",
              backgroundColor: "#A023BF",
            }}
            onClick={() => nextPage("pagetwo")}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default PageOne;
