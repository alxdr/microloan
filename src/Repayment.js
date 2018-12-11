import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    padding: "5rem 2rem"
  },
  textField: {
    width: "100%"
  },
  mask: {
    width: "100%",
    padding: "1rem",
    fontSize: "1.5rem",
    borderStyle: "none",
    "&:focus": {
      outline: "none"
    }
  }
};

class Repayment extends React.Component {
  render() {
    const { classes, amount, forwardedRef, handleRepay, approved } = this.props;
    const TextMask = () => (
      <MaskedInput
        mask={[
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          " ",
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          " ",
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          " ",
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          /[0-3]/,
          /\d/,
          " ",
          "/",
          " ",
          /[1-3]/,
          /\d/,
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          /\d/,
          /\d/,
          /\d/
        ]}
        ref={forwardedRef}
        className={classes.mask}
      />
    );
    return (
      <Paper className={classes.root} elevation={0}>
        <Grid container spacing={8} alignItems="center" justify="center">
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1">{`Weekly Repayment Amount: $${
              approved ? amount : 0
            }`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="card"
              label="Credit/Debit Card"
              type="text"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              helperText="16-Digits Card No. MM/YY CVC"
              InputProps={{
                inputComponent: TextMask
              }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            {approved ? (
              <Button variant="contained" color="primary" onClick={handleRepay}>
                Repay
              </Button>
            ) : (
              <Button
                disabled
                variant="contained"
                color="primary"
                onClick={handleRepay}
              >
                Repay
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

Repayment.propTypes = {
  classes: PropTypes.object.isRequired,
  handleRepay: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired
};

export default withStyles(styles)(Repayment);
