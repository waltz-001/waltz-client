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
  // const {
  //   formField: { fullName, phoneNumber, email, gender, userType },
  // } = props;

  return (
    <>
      <div className="d-flex flex-column gap-3 text-center ">
        <Input
          name={"fullName"}
          id={"fullName"}
          placeholder={"Full Name"}
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-solid fa-user"}
          errors={errors.fullName}
          touched={touched.fullName}
        ></Input>

        <Input
          name={"phoneNumber"}
          id={"phoneNumber"}
          placeholder={"Phone Number"}
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-solid fa-phone-volume"}
          errors={errors.phoneNumber}
          touched={touched.phoneNumber}
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
          name={"userType"}
          value={values.userType}
          classname={"fa-solid fa-briefcase"}
          onChange={(value) => setFieldValue("userType", value.value)}
          placeholder="What best describes you"
          errors={errors.userType}
          touched={touched.userType}
        />

        <div className="d-flex">
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
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default PageOne;
