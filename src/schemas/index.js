import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string()
    .email()
    .min(10)
    .max(50)
    .required("Please enter your email"),
  password: Yup.string().min(8).max(20).required("Please enter your password"),
});

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().min(3).max(20).required("Please enter your name"),
  contactNumber: Yup.string()
  .required("Please enter phone number"),
  email: Yup.string()
    .email()
    .min(10)
    .max(50)
    .required("Please enter your email id"),
  gender: Yup.mixed()
    .required("Please select your gender")
    .oneOf(["male", "female", "unspecified"])
    .label("Gender"),
  userRole: Yup.mixed()
    .required("Please select user role")
    .oneOf(["student", "faculty", "alumni", "other"])
    .label("User Role"),
  // department: Yup.mixed()
  //   .required("Please Select Department")
  //   .oneOf(["IT", "CSE", "AEIE", "CIVIL", "ECE", "EE"])
  //   .label("Department"),
  // graduationYear: Yup.mixed()
  //   .required("Please Select Graduation Year")
  //   .oneOf(["first", "second", "third", "fourth"]),
  // rollNumber: Yup.string().min(8).max(10).required("Please enter Roll number"),
  // batch: Yup.mixed().required("Please Select Batch"),

  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Create a Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], 'Must match "password" field value')
    .required("Re-enter the password"),
});
