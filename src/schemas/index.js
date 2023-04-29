import * as Yup from "yup" 

export const signInSchema = Yup.object({
    email: Yup.string().email().min(10).max(50).required("Please enter your email"),
    password: Yup.string().min(8).max(20).required("Please enter your password")
})