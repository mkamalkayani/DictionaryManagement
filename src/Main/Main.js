import React from "react";
import AddDict from "../AddDict/AddDict";
import Overview from "../Overview/Overview";
import { Paper, Typography, withStyles } from "@material-ui/core";
import { wrap } from "module";

let iphoneColor = {
  Stonegrey: "Dark Grey",
  "Midnight Black": "Black",
  "Mystic Silver": "Silver"
};

let iphoneColor2 = {
  Stonegrey: "Dark Grey",
  "Midnight Black": "Black",
  "Mystic Silver": "Silver"
};

const styles = {
  paper: {
    width: "100%"
  }
};

export class Main extends React.Component {
  state = {
    dicts: { iphoneColor, iphoneColor2 }
  };

  handleSave = (dictName, dict) => {
    this.setState(prevState => {
      prevState.dicts[dictName] = dict;
      console.log(prevState);
      return prevState;
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='display1' align='center' gutterBottom>
          Dictionary Management App
        </Typography>

        <Overview dicts={this.state.dicts} />
        <AddDict handleSave={this.handleSave} />
      </Paper>
    );
  }
}

export default withStyles(styles)(Main);
