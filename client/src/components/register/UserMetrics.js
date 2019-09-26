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

const ages = [];
for (let i = 18; i <= 60; i++) {
  ages.push(i);
}

const weight = [];
for (let i = 50; i <= 300; i++) {
  weight.push(i);
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  header: {
    margin: theme.spacing(1),
    textAlign: "center"
  },
  control: {
    padding: theme.spacing(2)
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

const Register = ({ errors, touched, isSubmitting }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h6" className={classes.header}>
          Register
        </Typography>

        <Form>
          <div>
            <Field
              autoFocus
              className={classes.formInput}
              type="name"
              name="name"
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <p className={classes.header}>{errors.name}</p>
            )}
          </div>

          <div>
            <Typography className={classes.header}>Gender</Typography>
            <Field
              className={classes.formInput}
              name="gender"
              component="select"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
          </div>

          <div>
            <Typography className={classes.header}>Age</Typography>
            <Field className={classes.formInput} name="age" component="select">
              {ages.map((age, index) => (
                <option key={index} value={age}>
                  {age}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <Typography className={classes.header}>Weight</Typography>
            <Field
              className={classes.formInput}
              name="weight"
              component="select"
            >
              {weight.map((weight, index) => (
                <option key={index} value={weight}>
                  {weight}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <Typography className={classes.header}>Height</Typography>
            <Field
              className={classes.formInput}
              name="height"
              component="select"
            >
              {weight.map((height, index) => (
                <option key={index} value={height}>
                  {height}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <Typography className={classes.header}>
              Days spent exercising
            </Typography>
            <Field
              className={classes.formInput}
              component="select"
              name="exercise"
            >
              {["0", "1-2", "3-4", "5-6", "7"].map(days => (
                <option key={days} value={days}>
                  {days}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <Typography className={classes.header}>Goal</Typography>
            <Field className={classes.formInput} component="select" name="goal">
              <option value="20% deficit">Aggressive weight loss</option>
              <option value="15% deficit">Moderate weight loss</option>
              <option value="10% deficit">Weight loss</option>
              <option value="0% deficit">Maintain weight</option>
              <option value="10% surplus">Moderate weight gain</option>
              <option value="15% surplus">Aggressive weight gain</option>
            </Field>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      exercise: 0,
      gender: "male",
      age: 18,
      weight: 50,
      height: "6'-0",
      goal: "10% deficit"
    };
  },
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setErrors({ email: "Email is already taken" });
    resetForm();
    setSubmitting(false);
    console.log(values);
    // make axios request to backend
  }
})(Register);

export default FormikForm;
