import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Typography } from "@material-ui/core";
import "./App.css";
import Main from "./Main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./Overview/Overview";
import DictTable from "./DictTable/DictTable";
import LibraryContext from "./LibraryContext";
import AddDict from "./AddDict/AddDict";
import EditDict from "./EditDict/EditDict";
import BottomNav from "./BottomNav/BottomNav";

const styles = {
  main: {
    "min-height": "400px"
  }
};

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Typography
        variant='display1'
        color='primary'
        align='center'
        gutterBottom
        style={{ padding: 20 }}
      >
        Dictionary Management App
      </Typography>
      <Main>
        <Router>
          <LibraryContext.Consumer>
            {context => (
              <div>
                <div style={styles.main}>
                  <Route
                    exact
                    path='/'
                    render={routerProps => (
                      <Overview {...routerProps} {...context} />
                    )}
                  />
                  <Route
                    exact
                    path='/addDict'
                    render={routerProps => (
                      <AddDict
                        {...routerProps}
                        {...context}
                        title={"Create New Dictionary"}
                      />
                    )}
                  />
                  <Route
                    path='/dict/:name'
                    render={routerProps => (
                      <DictTable {...routerProps} {...context} />
                    )}
                  />
                  <Route
                    path='/editDict/:name'
                    render={routerProps => (
                      <EditDict {...routerProps} {...context} />
                    )}
                  />
                </div>
                <Route
                  path='/'
                  render={routerProps => <BottomNav {...routerProps} />}
                />
              </div>
            )}
          </LibraryContext.Consumer>
        </Router>
      </Main>
    </div>
  );
}

export default App;
