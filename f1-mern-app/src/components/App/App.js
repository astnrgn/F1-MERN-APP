import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home.js";
import Add from "../Add/Add.js";
import Update from "../Update/Update.js";
import Remove from "../Remove/Remove.js";
import "./App.css";
import NewAddForm from "../../containers/NewAddForm";

import RacerDisplay from "../../containers/RacerDisplay";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https://i.ndtvimg.com/i/2017-11/f1-logo-2018_827x510_81511713381.png"
              alt=""
            />
          </Link>
          <Link to="/drivers">
            <h3>Drivers</h3>
          </Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <div className="appCenter">
            <div className="appGrid">
              <div className="driversCenter">
                <Route path="/drivers" exact component={RacerDisplay} />
              </div>
              <div className="newDrivers">
                <Route path="/drivers" exact component={NewAddForm} />
              </div>
            </div>
          </div>
          <Route path="/drivers/add" exact component={Add} />
          <Route
            path="/drivers/update"
            exact
            render={routerProps => (
              <Update driverData={this.state.racers} {...routerProps} />
            )}
          />
          <Route
            path="/drivers/remove"
            exact
            render={routerProps => (
              <Remove driverData={this.state.racers} {...routerProps} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
