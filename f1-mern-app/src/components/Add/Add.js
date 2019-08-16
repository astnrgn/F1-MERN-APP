import React, { Component } from "react";
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
    evt.preventDefault();
    let name = evt.target[0].value;
    let birthplace = evt.target[1].value;
    let team = evt.target[2].value;
    let rank = evt.target[3].value;
    let image = evt.target[4].value;

    this.props.dispatch(createNewRacer(name, birthplace, team, rank, image));

    evt.target[0].value = "";
    evt.target[1].value = "";
    evt.target[2].value = "";
    evt.target[3].value = "";
    evt.target[4].value = "";
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>Add a Driver -</div>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Birthplace:</label>
          <input type="text" />
        </div>
        <div>
          <label>Team:</label>
          <input type="text" />
        </div>
        <div>
          <label>Rank:</label>
          <input type="number" />
        </div>
        <div>
          <label>Image:</label>
          <input type="text" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
