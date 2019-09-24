import "date-fns";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Macros Calculator
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            On Boarding
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Full Name"
              name="fullName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container justify={"space-between"}>
              <Input
                id="adornment-weight"
                className={clsx(classes.margin, classes.textField)}
                value={values.weight}
                onChange={handleChange("weight")}
                placeholder="Weight"
                variant="outlined"
                name="weight"
                endAdornment={
                  <InputAdornment position="end">Kg</InputAdornment>
                }
                aria-describedby="weight-helper-text"
                inputProps={{
                  "aria-label": "weight"
                }}
              />
              <Input
                id="adornment-height"
                className={clsx(classes.margin, classes.textField)}
                value={values.height}
                onChange={handleChange("height")}
                placeholder="Height"
                variant="outlined"
                name="height"
                endAdornment={
                  <InputAdornment position="end">Ft</InputAdornment>
                }
                aria-describedby="weight-helper-text"
                inputProps={{
                  "aria-label": "weight"
                }}
              />
            </Grid>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify={"space-between"}>
                <KeyboardDatePicker
                  margin="normal"
                  fullWidth
                  name="dob"
                  id="date-picker-dialog"
                  label="Date of Birth"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <TextField
                  fullWidth
                  select
                  name="gender"
                  label="Gender"
                  placeholder="Male/Female"
                  className={clsx(classes.margin, classes.textField)}
                  value={values.weightRange}
                  onChange={handleChange("weightRange")}
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                  ))}
                </TextField>
              </Grid>
            </MuiPickersUtilsProvider>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
