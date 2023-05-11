import "../Success/Success.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import { useEffect, useRef, useState } from "react";
// import SuccessMessage from "./SucessMessage/SuccessMessage";

const PasswordChange = () => {
  const navigate = useNavigate();
  const { id, tokenId } = useParams();
  const [data, setData] = useState(null);
  const passwordRef = useRef(null);
  const resetPasswordRef = useRef(null);
  const getData = async (values) => {
    try {
      const response = await axios.put(
        `https://waltz-server.onrender.com/reset-password/${id}/reset-password/${tokenId}`,
        values
      );
      console.log(id);
      console.log(tokenId);
      console.log(response);
      setData(response);
    } catch (e) {
      console.log(e);
      setData(e.response);
    }
  };

  const onSubmit = async (values, confValues) => {
    values = passwordRef.current.value;
    confValues = resetPasswordRef.current.value;
    // const obj = JSON.parse(`"password " : ${values}`)
    const str1 = JSON.stringify(values);
    const str2 = JSON.stringify(confValues);
    if (str1 === str2) {
      const obj = JSON.parse(`{"password" : ${str1}}`);
      console.log(str1);
      console.log(obj);
      getData(obj);
      alert("Password changed successfully!!")
      navigate("/");
      window.location.reload(true);
    }
    else{
      alert("Password does not match!!")
    }

    // const obj = Object.create(values)
  };

  const { errors, touched, handleBlur } = useFormik({
    validationSchema: registerSchema,
    // onSubmit: (values) => {
    //   console.log(values)
    // },
  });

  return (
    <div className="Register">
      <div className="signin-container containe">
        <span className="form-floating">
          <span>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              autoComplete="off"
              className="form-control text-warning"
              id="password"
              placeholder="Enter new password"
              //   value={values.password}
              onChange={(e) => e.target.value}
              //   onBlur={handleBlur}
              onBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            />
            
            <label htmlFor="password" className="text-secondary label-txt">
              {/* Enter new password */}
            </label>
            {errors.password && touched.password ? (
              <span className="form-error text-danger borde">
                {errors.password}
              </span>
            ) : null}
          </span>
          <span className=" borde">
            <input
              ref={resetPasswordRef}
              type="password"
              name="confirmPassword"
              autoComplete="off"
              className="form-control text-warning"
              id="confirmPassword"
              size="30"
              placeholder="Confirm password"
                // value={values.password}
              onChange={(e) => e.target.value}
              //   onBlur={handleBlur}
              onBlur={handleBlur}
                            errors={errors.confirmPassword}
              touched={touched.confirmPassword}
            />

            <label
              htmlFor="confirmPassword"
              className="text-secondary label-txt mb-5"
            >
              {/* Enter new password */}
             
            </label>
            {errors.confirmPassword && touched.confirmPassword ? (
                <span className="form-error text-danger borde mb-5">
                  {errors.confirmPassword}
                </span>
              ) : null}
          </span>
          <span className="borde"></span>
        </span>
        <button
          type="submit"
          className="btn text-light mt-"
          style={{ backgroundColor: "#5B13D1" }}
          onClick={onSubmit}
        >
          SUBMIT
        </button>
        {/* <SuccessMessage data={data} id={id} tokenId={tokenId} /> */}
      </div>
    </div>
  );
};

export default PasswordChange;
