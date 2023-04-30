import formModel from "./formModel";
const {
  formField: {
    fullName,
    phoneNumber,
    email,
    gender,
    userType,
    department,
    graduationYear,
    rollNumber,
    batch,
    companyName,
    instituteName,
    password,
  },
} = formModel;

export default {
  [fullName.name]: "",
  [phoneNumber.name]: "",
  [email.name]: "",
  [gender.name]: "",
  [userType.name]: "",
  [department.name]: "",
  [graduationYear.name]: "",
  [rollNumber.name]: "",
  [batch.name]: "",
  [companyName.name]: "",
  [instituteName.name]: "",
  [password.name]: "",
};
