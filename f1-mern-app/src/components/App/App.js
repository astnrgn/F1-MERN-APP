import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home.js";
import Drivers from "../Drivers/Drivers.js";
import Add from "../Add/Add.js";
import Update from "../Update/Update.js";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     price: null
  //   };
  //   this.setPrice = this.setPrice.bind(this);
  // }

  // setPrice(price) {
  //   this.setState({ price: price });
  // }

  render() {
    const opts = {
      height: "800",
      width: "1200",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
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
          <Route path="/drivers" exact component={Drivers} />
          <Route path="/drivers/add" exact component={Add} />
          <Route path="/drivers/update" exact component={Update} />
        </main>
      </div>
    );
  }
}

export default App;
