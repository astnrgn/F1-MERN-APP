import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./Update.css";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birthplace: "",
      team: "",
      rank: "",
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    let driverNames = this.props.driverData.map(list => {
      return list.name;
    });
    console.log(driverNames);

    const apiUrl = "https://f1-mern-app-api.herokuapp.com/";
    const driver = this.state.name;
    const url = `${apiUrl}${driver}`;

    console.log(this.state);

    if (driverNames.includes(this.state.name)) {
      axios
        .put(url, this.state)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <div className="form2">
        <div className="driverGrid3">
          <div className="driverTitle">Update a Driver</div>
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
              // birthplace={this.state.birthplace}
              onChange={this.handleChange}
            />
          </div>
          <div className="team2">
            <p>Team</p>
            <input
              className="extend"
              type="text"
              name="team"
              // team={this.state.team}
              onChange={this.handleChange}
            />
          </div>
          <div className="rank">
            <p>Rank (number)</p>
            <input
              className="extend"
              type="text"
              name="rank"
              // rank={this.state.rank}
              onChange={this.handleChange}
            />
          </div>
          <div className="image">
            <p>Image</p>
            <input
              className="extend"
              type="text"
              name="image"
              // image={this.state.image}
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

export default Update;
