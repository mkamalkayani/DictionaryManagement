import React, { Component } from "react";
import { Paper, Card, withStyles, Typography } from "@material-ui/core";

const styles = {
  paper: {
    padding: "20px"
  },
  bullet: {
    minWidth: 275,
    padding: "5px",
    marginLeft: "40px"
  }
};

class Overview extends Component {
  render() {
    const { classes, dicts } = this.props;

    let list = "";
    console.log(this.props.dicts);
    if (Object.keys(dicts).length) {
      list = Object.keys(dicts).map(key => (
        <li className={classes.bullet}>{key}</li>
      ));
    }
    return (
      <Paper className={classes.paper}>
        <Typography variant='h5'>Available Dictionaries</Typography>
        {list}
      </Paper>
    );
  }
}

export default withStyles(styles)(Overview);
