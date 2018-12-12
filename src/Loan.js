import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";
import LoanForm from "./LoanForm";
import Progress from "./Progress";

const styles = {
  root: {
    padding: "5rem 2rem"
  },
  apply: {
    margin: "2rem auto"
  },
  success: {
    color: grey[100],
    textAlign: "center"
  },
  bgColor: {
    backgroundColor: green["A700"]
  }
};

function PaperSheet(props) {
  const {
    classes,
    handleChange,
    handleSubmit,
    handleApprove,
    loading,
    forwardedRef,
    approved,
    ...state
  } = props;

  return (
    <Paper className={classes.root} elevation={0}>
      <LoanForm
        handleChange={handleChange}
        forwardedRef={forwardedRef}
        approved={approved}
        {...state}
      />
      {approved ? (
        <Paper elevation={2} className={classes.bgColor}>
          <Typography
            variant="h6"
            className={classNames(classes.success, classes.apply)}
          >
            Approved
          </Typography>
        </Paper>
      ) : (
        <Progress handleSubmit={handleSubmit} loading={loading} />
      )}
    </Paper>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  approved: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(PaperSheet);
