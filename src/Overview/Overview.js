import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  withStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const styles = {
  paper: {
    padding: "20px",
    marginBottom: 20
  }
};

class Overview extends Component {
  state = { selected: false };
  render() {
    const { classes } = this.props;
    const { dicts, removeDict } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h5'>Available Dictionaries</Typography>
        {Boolean(Object.keys(dicts).length) && (
          <List>
            {Object.keys(dicts).map(dictName => (
              <ListItem
                component={Link}
                to={`/dict/${dictName}`}
                key={dictName}
              >
                <ListItemText primary={dictName} />
                <ListItemSecondaryAction>
                  <IconButton
                    color='primary'
                    component={Link}
                    to={`/editDict/${dictName}`}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color='primary'
                    onClick={() => {
                      removeDict(dictName);
                      this.props.history.push("/");
                    }}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
        <Button
          component={Link}
          to='/addDict'
          color='primary'
          variant='contained'
        >
          Add Dictionary
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(Overview);
