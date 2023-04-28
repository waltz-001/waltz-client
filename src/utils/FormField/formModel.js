export default form = {
  formId: "RegisterForm",
  formField: {
    fullName: {
      name: "fullName",
      label: "Full name*",
      requiredErrorMsg: "First name is required",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "Phone Number*",
      requiredErrorMsg: "Phone Number is required",
    },

    email: {
      name: "email",
      requiredErrorMsg: "email is required",
    },
    gender: {
      name: "gender",
      label: "Gender*",
      requiredErrorMsg: "gender is required",
    },
    userType: {
      name: "userType",
      requiredErrorMsg: "uset is required",
    },
    department: {
      name: "department",
      requiredErrorMsg: "department is required",
    },
    graduationYear: {
      name: "graduationYear",
      requiredErrorMsg: "graduationYear is required",
    },
    rollNumber: {
      name: "rollNumber",
      requiredErrorMsg: "rollNumber is required",
    },
    batch: {
      name: "batch",
      requiredErrorMsg: "batch is required",
    },
    companyName: {
      name: "companyName",
      requiredErrorMsg: "Card number is required",
      invalidErrorMsg: "Card number is not valid (e.g. 4111111111111)",
    },
    instituteName: {
      name: "instituteName",
      requiredErrorMsg: "Expiry date is required",
      invalidErrorMsg: "Expiry date is not valid",
    },
    password: {
      name: "password",
      requiredErrorMsg: "CVV is required",
      invalidErrorMsg: "CVV is invalid (e.g. 357)",
    },
  },
};
