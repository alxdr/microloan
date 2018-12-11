import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    padding: "5rem 2rem"
  },
  button: {
    margin: "1rem"
  }
};

function Login(props) {
  const {
    classes,
    handleChange,
    email,
    password,
    handleLogin,
    handleRoute
  } = props;
  return (
    <Paper className={classes.root} elevation={0}>
      <form>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item xs={12} sm={2}>
            <TextField
              required
              autoComplete="email"
              id="email"
              label="Email Address"
              value={email}
              onChange={handleChange("email")}
              type="email"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              required
              autoComplete="current-password"
              id="password"
              label="Password"
              value={password}
              onChange={handleChange("password")}
              type="password"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              className={classes.button}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              onClick={handleRoute("register")}
              className={classes.button}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRoute: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default withStyles(styles)(Login);
