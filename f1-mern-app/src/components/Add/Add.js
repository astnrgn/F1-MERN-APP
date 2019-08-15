import React, { Component } from "react";
import axios from "axios";
import "./Add.css";
import { createNewRacer } from "../../actions/racer";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birthplace: "",
      team: "",
      rank: 1,
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    // axios
    //   .post("https://f1-mern-app-api.herokuapp.com", this.state)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    let name = this.state.name;
    let birthplace = this.state.birthplace;
    let team = this.state.team;
    let rank = this.state.rank;
    let image = this.state.image;

    this.props.dispatch(createNewRacer(name, birthplace, team, rank, image));
  }
  render() {
    return (
      <div className="form">
        <div className="driverGrid2">
          <div className="driverTitle">Add a Driver</div>
          <div className="name">
            <p>Name</p>
            <input
              className="extend"
              type="text"
              name="name"
              // name={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="birthplace">
            <p>Birthplace</p>
            <input
              className="extend"
              type="text"
              name="birthplace"
              // genus={this.state.genus}
              onChange={this.handleChange}
            />
          </div>
          <div className="team">
            <p>Team</p>
            <input
              className="extend"
              type="text"
              name="team"
              // image={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <div className="rank">
            <p>Rank (number)</p>
            <input
              className="extend"
              type="text"
              name="rank"
              // homepage={this.state.homepage}
              onChange={this.handleChange}
            />
          </div>
          <div className="image">
            <p>Image</p>
            <input
              className="extend"
              type="text"
              name="image"
              // conservation={this.state.conservation}
              onChange={this.handleChange}
            />
          </div>
          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
