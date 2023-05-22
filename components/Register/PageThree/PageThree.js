import React from "react";
import "./PageThree.css";
import Input from "../../../utils/Fields/Input";

const PageThree = ({ values, errors, touched, handleBlur, handleChange }) => {
  return (
    <div>
      <div className="d-flex flex-column gap-4">
        <Input
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder={"Password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-solid fa-key fa-flip-horizontal"}
          errors={errors.password}
          touched={touched.password}
        />

        <Input
          type={"password"}
          name={"confirmPassword"}
          id={"confirmPassword"}
          placeholder={"Confirm Password"}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-regular fa-eye-slash"}
          errors={errors.confirmPassword}
          touched={touched.confirmPassword}
        />
        <div>
          <span className="emailcheckbox">
            <input type="checkbox" /> Opt for WALTZ email update
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
