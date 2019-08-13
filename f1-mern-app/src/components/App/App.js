import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import YouTube from "react-youtube";
import Drivers from "../Drivers/Drivers.js";

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
          <img
            src="https://i.ndtvimg.com/i/2017-11/f1-logo-2018_827x510_81511713381.png"
            alt=""
          />
          <Link to="/drivers">
            <h3>Drivers</h3>
          </Link>
        </nav>
        <main>
          <Route path="/" exact>
            <div className="center">
              <YouTube
                className="videoDiv"
                videoId="j2TXtvAetS0"
                opts={opts}
                onReady={this._onReady}
              />
            </div>
          </Route>
          <Route path="/drivers" component={Drivers} />
        </main>
      </div>
    );
  }
}

export default App;
