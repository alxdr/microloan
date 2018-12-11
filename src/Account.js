import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    padding: "5rem 2rem"
  }
};

function Account(props) {
  const { classes, amount, term, interest, approved } = props;
  return (
    <Paper className={classes.root} elevation={0}>
      {approved ? (
        <Typography variant="subtitle1">{`Remaining Repayment of $${(
          amount * interest
        ).toFixed(2)} over ${term} week(s)`}</Typography>
      ) : (
        <Typography variant="subtitle1">
          You have no outstanding loans.
        </Typography>
      )}
    </Paper>
  );
}

Account.propTypes = {
  classes: PropTypes.object.isRequired,
  amount: PropTypes.string.isRequired,
  term: PropTypes.number.isRequired,
  interest: PropTypes.number.isRequired,
  approved: PropTypes.bool.isRequired
};

export default withStyles(styles)(Account);
