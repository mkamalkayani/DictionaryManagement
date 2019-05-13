import React from "react";
import LibraryContext from "../LibraryContext";

let iphoneColor = [
  { domain: "Stonegrey", range: "Dark Grey" },
  { domain: "Midnight Black", range: "Black" },
  { domain: "Mystic Silver", range: "Silver" }
];

let iphoneColor2 = [
  { domain: "Stonegrey", range: "Dark Grey" },
  { domain: "Midnight Black", range: "Black" },
  { domain: "Mystic Silver", range: "Silver" }
];

export class Main extends React.Component {
  state = {
    dicts: { iphoneColor, iphoneColor2 }
  };

  componentDidMount() {
    if (localStorage.getItem("dictStore")) {
      let data = JSON.parse(localStorage.getItem("dictStore"));
      this.setState({ ...data });
    }
  }

  componentDidUpdate() {
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.clear();
    localStorage.setItem("dictStore", JSON.stringify(this.state));
  }

  addDict = (dictName, dict) => {
    dictName &&
      this.setState(prevState => {
        let newState = { ...prevState };
        let newDicts = { ...newState.dicts };
        Object.assign(newDicts, { [dictName]: dict });
        return Object.assign(newState, { dicts: newDicts });
      });
  };

  removeDict = dictToDelete => {
    this.setState(({ dicts }) => {
      return delete dicts[dictToDelete];
    });
  };

  addRow = (dictName, row) => {
    const newDict = [...this.state.dicts[dictName]];
    newDict.push(row);
    delete this.state.dicts[dictName];
    this.setState(prevState => {
      let newState = { ...prevState };
      let newDicts = { ...newState.dicts };
      Object.assign(newDicts, { [dictName]: newDict });
      return Object.assign(newState, { dicts: newDicts });
    });
  };

  removeRow = (dictName, row) => {
    const newDict = [...this.state.dicts[dictName]];
    newDict.push(row);
    delete this.state.dicts[dictName];
    this.setState(({ dicts }) => {
      return Object.assign(dicts, { [dictName]: newDict });
    });
  };

  render() {
    return (
      <LibraryContext.Provider
        value={{
          dicts: this.state.dicts,
          addDict: this.addDict,
          removeDict: this.removeDict,
          addRow: this.addRow
        }}
      >
        {this.props.children}
      </LibraryContext.Provider>
    );
  }
}

export default Main;
