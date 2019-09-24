import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Macros from "../images/Macros.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(),
    textAlign: "center",
    flex: "1 0 auto",
    height: "100vh",
    color: theme.palette.text.secondary
  }
}));
function Content(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid component={Hidden} only={["xl", "xs"]} item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="fill-image"></div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="fill">
                <div className="signUp_loginIn">
                    
                </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
Content.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(Content);
