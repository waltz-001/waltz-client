import React from "react";
import "./PageTwo.css";
import MySelect from "../../../utils/Select/Select";
import {
  departmentOptions,
  yearOptions,
  batchOptions,
} from "../../../utils/Options/options";

import Input from "../../../utils/Fields/Input";

const PageTwo = ({
  nextPage,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  if (values.userType === "student") {
    return (
      <div className="d-flex flex-column gap-4">
        <MySelect
          options={departmentOptions}
          value={values.department}
          onChange={(value) => setFieldValue("department", value.value)}
          placeholder="Department"
          maxMenuHeight={180}
          classname={"fa-solid fa-network-wired"}
          errors={errors.department}
          touched={touched.department}
        />

        <MySelect
          options={yearOptions}
          value={values.graduationYear}
          onChange={(value) => setFieldValue("graduationYear", value.value)}
          placeholder="Graduation Year"
          maxMenuHeight={180}
          classname={"fa-solid fa-graduation-cap"}
          errors={errors.graduationYear}
          touched={touched.graduationYear}
        />

        <Input
          type={"text"}
          name={"rollNumber"}
          id={"rollNumber"}
          placeholder={"Roll Number"}
          value={values.rollNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          classname={"fa-solid fa-building-user"}
          errors={errors.rollNumber}
          touched={touched.rollNumber}
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
            onClick={() => nextPage("pageone")}
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
            onClick={() => nextPage("pagethree")}
          >
            NEXT
          </button>
        </div>
      </div>
    );
  } else if (values.userType === "alumni") {
    return (
      <div>
        <div className="d-flex flex-column gap-4">
          <MySelect
            options={batchOptions}
            value={values.batch}
            maxMenuHeight={220}
            onChange={(value) => setFieldValue("batch", value.value)}
            placeholder="Batch"
            classname={"fa-regular fa-calendar"}
            errors={false}
            touched={false}
          />
          <Input
            type={"text"}
            name={"companyName"}
            id={"companyName"}
            placeholder={"Company Name"}
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            classname={"fa-solid fa-building-user"}
            errors={false}
            touched={false}
          />

          <MySelect
            options={departmentOptions}
            value={values.department}
            onChange={(value) => setFieldValue("department", value.value)}
            placeholder="Department"
            maxMenuHeight={180}
            classname={"fa-regular fa-calendar"}
            errors={errors.department}
            touched={touched.department}
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
              onClick={() => nextPage("pageone")}
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
              onClick={() => nextPage("pagethree")}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="d-flex flex-column gap-4">
          <Input
            type={"text"}
            name={"instituteName"}
            id={"instituteName"}
            placeholder={"Institute Name"}
            value={values.instituteName}
            onChange={handleChange}
            onBlur={handleBlur}
            classname={"fa-solid fa-building-columns"}
            errors={errors.instituteName}
            touched={touched.instituteName}
          />

          <div className="submit-btn">
            <button
              className="btn text-white rounded-pill d-flex mx-auto align-items-center justify-content-center"
              style={{
                height: "3rem",
                width: "30%",
                backgroundColor: "#A023BF",
              }}
              onClick={() => nextPage("pageone")}
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
              onClick={() => nextPage("pagethree")}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default PageTwo;
