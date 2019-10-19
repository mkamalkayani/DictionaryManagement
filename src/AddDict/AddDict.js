import React, { Component } from "react";
import {
  Paper,
  Typography,
  withStyles,
  TextField,
  Button
} from "@material-ui/core";
import MaterialTable from "material-table";

const styles = {
  paper: {
    padding: "20px"
  },
  textField: {
    marginBottom: 10
  },
  saveButton: {
    marginTop: "15px"
  }
};

class AddDict extends Component {
  state = {
    dictName: "",
    columns: [
      { title: "Domain", field: "domain" },
      { title: "Range", field: "range" }
    ],
    data: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { classes, dicts, dictName } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h5'>{this.props.title}</Typography>
        <TextField
          required
          name='dictName'
          id='outlined-name'
          label='Name'
          margin='normal'
          variant='outlined'
          onChange={this.handleChange}
          value={this.state.dictName}
        />
        <div>
          <MaterialTable
            options={{ paging: false, search: false }}
            title={this.state.dictName}
            columns={this.state.columns}
            data={this.state.data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data || dicts[dictName];
                      data.push(newData);
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      let data = this.state.data;
                      const index = data.indexOf(oldData);
                      data.splice(index, 1000);
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1);
                })
            }}
          />

          <Button
            variant='contained'
            color='primary'
            style={styles.saveButton}
            onClick={() => {
              this.props.addDict(this.state.dictName, this.state.data);
              this.props.history.push("/");
            }}
          >
            Save
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(AddDict);
