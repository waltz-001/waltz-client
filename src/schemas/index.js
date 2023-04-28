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
  fullName: Yup.string().min(3).max(20).required("Please enter your name"),
  phoneNumber: Yup.string().min(9).max(12).required("Please enter Number"),
  email: Yup.string()
    .email()
    .min(10)
    .max(50)
    .required("Please enter your email"),
  gender: Yup.mixed()
    .required("Please Select Gender")
    .oneOf(["male", "female", "unspecified"])
    .label("Gender"),
  userType: Yup.mixed()
    .required("Please Select User Type")
    .oneOf(["student", "faculty", "alumni", "other"])
    .label("User Type"),
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
    .required("Enter a Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], 'Must match "password" field value')
    .required("Re-enter the password"),
});
