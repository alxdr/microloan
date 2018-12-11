import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 150
  }
};

class NavBar extends React.Component {
  state = {
    open: false
  };
  toggleDrawer = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };
  render() {
    const { classes, handleRoute, loggedIn } = this.props;
    const { open } = this.state;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button onClick={handleRoute("loan")}>
            <ListItemText primary="Loan" />
          </ListItem>
          <ListItem button onClick={handleRoute("repayment")}>
            <ListItemText primary="Repayment" />
          </ListItem>
          <ListItem button onClick={handleRoute("account")}>
            <ListItemText primary="Account" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Support" />
          </ListItem>
          {loggedIn ? (
            <ListItem button onClick={handleRoute("logout")}>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : (
            false
          )}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              MiniAspire
            </Typography>
            {loggedIn ? (
              <Button color="inherit" onClick={handleRoute("logout")}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={handleRoute("login")}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleRoute: PropTypes.func.isRequired
};

export default withStyles(styles)(NavBar);
