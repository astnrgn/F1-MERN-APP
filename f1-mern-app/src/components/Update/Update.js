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
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }
  //   handleSubmit() {
  //     this.props.updateBirds(this.state);
  //   }
  render() {
    return (
      <div className="form">
        <div className="driverGrid">
          <div className="driverTitle">Update a Driver</div>
          <div className="formCatagory">
            <p>Name</p>
            <input
              className="extend"
              type="text"
              name="name"
              name={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formCatagory">
            <p>Birthplace</p>
            <input
              className="extend"
              type="text"
              name="genus"
              genus={this.state.genus}
              onChange={this.handleChange}
            />
          </div>
          <div className="formCatagory">
            <p>Team</p>
            <input
              className="extend"
              type="text"
              name="image"
              image={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <div className="formCatagory">
            <p>Rank (number)</p>
            <input
              className="extend"
              type="text"
              name="homepage"
              homepage={this.state.homepage}
              onChange={this.handleChange}
            />
          </div>
          <div className="formCatagory">
            <p>Image</p>
            <input
              className="extend"
              type="text"
              name="conservation"
              conservation={this.state.conservation}
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
