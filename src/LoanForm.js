import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 200
  },
  menu: {
    width: 200
  },
  input: {
    display: "none"
  }
};

const terms = [
  {
    value: 5,
    label: "5 weeks"
  },
  {
    value: 13,
    label: "13 weeks"
  },
  {
    value: 26,
    label: "26 weeks"
  },
  {
    value: 39,
    label: "39 weeks"
  },
  {
    value: 52,
    label: "52 weeks"
  },
  {
    value: 65,
    label: "65 weeks"
  },
  {
    value: 78,
    label: "78 weeks"
  },
  {
    value: 91,
    label: "91 weeks"
  },
  {
    value: 104,
    label: "104 weeks"
  }
];

class LoanForm extends React.Component {
  componentDidUpdate() {
    const { approved } = this.props;
    if (approved) {
      const inputs = document.querySelectorAll("input");
      inputs.forEach(input => input.setAttribute("disabled", ""));
    }
  }
  render() {
    const {
      classes,
      handleChange,
      amount,
      term,
      name,
      email,
      id,
      acra,
      phone,
      approved,
      forwardedRef
    } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Personal Particulars</Typography>
          </Grid>
          <Grid item xs={12} container spacing={8}>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                id="name"
                label="Full Name"
                value={name}
                onChange={handleChange("name")}
                type="text"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                id="email"
                label="Email Address"
                value={email}
                onChange={handleChange("email")}
                type="email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                id="phone"
                label="Mobile No."
                value={phone}
                onChange={handleChange("phone")}
                type="tel"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                id="id"
                label="NRIC/Passport No."
                value={id}
                onChange={handleChange("id")}
                type="text"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                id="acra"
                label=" ACRA Registration No."
                value={acra}
                onChange={handleChange("acra")}
                type="text"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Loan Information
              </Typography>
            </Grid>
          </Grid>
          {approved ? (
            <Typography variant="subtitle2" gutterBottom>
              Please refer to the Account page.
            </Typography>
          ) : (
            <Grid item xs={12} container spacing={8}>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="amount"
                  label="Amount Required"
                  value={parseInt(amount) < 0 ? "" : amount}
                  onChange={handleChange("amount")}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    )
                  }}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  select
                  id="term"
                  label="Loan Term"
                  className={classes.textField}
                  value={term}
                  onChange={handleChange("term")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {approved
                    ? terms.map(option => {
                        return option.value === term ? (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ) : (
                          false
                        );
                      })
                    : terms.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                </TextField>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Financial Statements* and Credit Report*
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={8}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2">
                Balance Sheet, Profit and Loss statement, Cash Flow statement
                for past 12 months and a personal Credit Report
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <input
                accept=".pdf,.xlsx,.xlsm,.xlts,.xltm"
                className={classes.input}
                id="financials"
                multiple
                type="file"
                ref={forwardedRef}
              />
              <label htmlFor="financials">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

LoanForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
  term: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default withStyles(styles)(LoanForm);
