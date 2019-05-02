import React, { Component } from "react";
import { DisplayState } from "../helper";
import {
  Paper,
  Typography,
  withStyles,
  TextField,
  Button
} from "@material-ui/core";

const styles = {
  inputRow: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    padding: "20px"
  }
};

class AddDict extends Component {
  state = {
    dictName: "",
    domain: "",
    range: "",
    dict: {}
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addRowToDict = () => {
    this.setState(prevState => {
      prevState.dict[prevState.domain] = prevState.range;
      prevState.domain = "";
      prevState.range = "";
      return prevState;
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h5'>Create New Dictionary</Typography>
        <TextField
          name='dictName'
          id='outlined-name'
          label='Name'
          className={classes.textField}
          margin='normal'
          variant='outlined'
          onChange={this.handleChange}
          value={this.state.dictName}
        />

        {this.state.dictName && (
          <div>
            <div className={classes.inputRow}>
              <TextField
                placeholder='domain'
                name='domain'
                value={this.state.domain}
                onChange={this.handleChange}
              />
              <TextField
                placeholder='range'
                name='range'
                value={this.state.range}
                onChange={this.handleChange}
              />
              <Button
                variant='outlined'
                color='primary'
                onClick={this.addRowToDict}
              >
                Add
              </Button>
            </div>
            <DisplayState {...this.state.dict} />

            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                this.props.handleSave(this.state.dictName, this.state.dict);
              }}
            >
              Save
            </Button>
          </div>
        )}

        <DisplayState {...this.state} />
      </Paper>
    );
  }
}

export default withStyles(styles)(AddDict);
