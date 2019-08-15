import React, { Component } from "react";
import axios from "axios";
import "./Remove.css";

class Remove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
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
        .delete(url, this.state)
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
      <div className="form">
        <div className="driverGrid3">
          <div className="driverTitle">Remove A Driver</div>
          <div className="name">
            <p>Name</p>
            <input
              className="extend"
              type="text"
              name="name"
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

export default Remove;
