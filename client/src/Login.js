import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const Login = ({ errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">
        Log In
      </button>
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setErrors({ email: "Email is already taken" });
    resetForm();
    setSubmitting(false);
    // make axios request to backend
  }
})(Login);

export default FormikForm;
