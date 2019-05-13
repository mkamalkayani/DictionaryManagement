import React, { Component } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

export default class DictTable extends Component {
  state = {
    columns: [
      { title: "Domain", field: "domain" },
      { title: "Range", field: "range" }
    ]
  };
  render() {
    const dictName = this.props.match.params.name;
    return (
      <div>
        <MaterialTable
          options={{ paging: false, search: false }}
          title={dictName}
          columns={this.state.columns}
          data={this.props.dicts[dictName]}
        />
        <Button
          color='default'
          variant='contained'
          component={Link}
          to={`/editDict/${dictName}`}
        >
          Edit
        </Button>
      </div>
    );
  }
}
