import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const styles = {
  root: {
    margin: "auto",
    marginTop: "40px",

    backgroundColor: "#8e9cea"
  }
};

class BottomNav extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case "back":
        this.props.history.goBack();
        break;
      case "forward":
        this.props.history.goForward();
        break;
      case "home":
        this.props.history.push("/");
        break;
      default:
        return;
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        color='primary'
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label='Back'
          value='back'
          icon={<ArrowBackIcon />}
        />
        <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
        <BottomNavigationAction
          label='Forward'
          value='forward'
          icon={<ArrowForwardIcon />}
        />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomNav);
