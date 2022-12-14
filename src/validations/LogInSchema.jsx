import * as Yup from "yup";

export const LogInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "The password needs at least 6 characters")
    .required("Password is required"),
});
