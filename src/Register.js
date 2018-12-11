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

class Register extends React.Component {
  state = {
    password2: "",
    open: false,
    message: ""
  };
  handlePassword2 = event => {
    this.setState({
      password2: event.target.value
    });
  };
  handleRegister = () => {
    const { password, handleLogin, handleMessage } = this.props;
    const { password2 } = this.state;
    if (password === password2) {
      handleLogin();
    } else {
      handleMessage("Both passwords are different. They must be the same.");
    }
  };
  render() {
    const { classes, handleChange, email, password } = this.props;
    const { password2 } = this.state;
    return (
      <Paper className={classes.root} elevation={0}>
        <form>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
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
                autoComplete="new-password"
                id="password"
                label="Password"
                value={password}
                onChange={handleChange("password")}
                type="password"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                autoComplete="new-password"
                id="password"
                label="Password"
                value={password2}
                onChange={this.handlePassword2}
                type="password"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleRegister}
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
}

Register.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleMessage: PropTypes.func.isRequired
};

export default withStyles(styles)(Register);
