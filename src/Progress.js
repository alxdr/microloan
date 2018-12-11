import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  button: {
    margin: "2rem auto"
  }
};

function LinearIndeterminate(props) {
  const { classes, handleSubmit, loading } = props;
  return loading ? (
    <div className={classNames(classes.root, classes.button)}>
      <LinearProgress />
    </div>
  ) : (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={handleSubmit}
    >
      Apply
    </Button>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(LinearIndeterminate);
