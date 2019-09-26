import React from "react";
import { withFormik, Form, Field } from "formik";
import {
  Typography,
  makeStyles,
  Button,
  Container,
  CssBaseline
} from "@material-ui/core";
import * as yup from "yup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  header: {
    margin: theme.spacing(1),
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(1),
    width: "100%"
  },
  input: {
    display: "none"
  },
  formInput: {
    margin: theme.spacing(1),
    width: "100%",
    height: 40,
    borderRadius: 5,
    padding: theme.spacing(1)
  },
  container: {
    marginTop: theme.spacing(5)
  }
}));

const Login = ({ errors, touched, isSubmitting }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h6" className={classes.header}>
          Login
        </Typography>

        <Form>
          <div>
            <Field
              autoFocus
              className={classes.formInput}
              type="text"
              name="username"
              placeholder="Username"
            />
            {touched.username && errors.username && (
              <p className={classes.header}>{errors.username}</p>
            )}
          </div>
          <div>
            <Field
              className={classes.formInput}
              type="password"
              name="password"
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <p className={classes.header}>{errors.password}</p>
            )}
          </div>
          {/* <button disabled={isSubmitting} type="submit">
        Log In
      </button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setErrors({ email: "Email is already taken" });
    resetForm();
    setSubmitting(false);
    console.log(values);
    // make axios request to backend
    // route to dashboard on success
  }
})(Login);

export default FormikForm;
