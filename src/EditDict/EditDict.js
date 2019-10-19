import React, { Component } from "react";
import { withStyles, Button } from "@material-ui/core";
import MaterialTable from "material-table";

const styles = {
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
    ]
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { dicts, addRow } = this.props;
    const dictName = this.props.match.params.name;
    return (
      <div>
        <MaterialTable
          options={{ paging: false, search: false }}
          columns={this.state.columns}
          title={dictName}
          data={dicts[dictName]}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  addRow(dictName, newData);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = dicts[dictName];
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
                    const data = dicts[dictName];
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
            this.props.history.push(`/dict/${dictName}`);
          }}
        >
          Save
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(AddDict);
