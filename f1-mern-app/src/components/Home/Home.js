import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Home.css";

class Home extends Component {
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
        <main>
          <div className="center">
            <YouTube
              className="videoDiv"
              videoId="j2TXtvAetS0"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
