import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./components/views/Heading";
import User from "./components/ListOfUser/User";
import Alert from "./components/views/Alert";
import Home from "./components/pages/Home";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <>
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Heading />
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/user/:login" component={User} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    </>
  );
};

export default App;
