import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Drivers.css";

class Drivers extends Component {
  render() {
    return (
      <div>
        <div className="drivers">
          <div className="driverDivs">DRIVER</div>
          <div className="driverDivs">DRIVER</div>
          <div className="driverDivs">DRIVER</div>
          <div className="driverDivs">DRIVER</div>
          <div className="driverDivs">DRIVER</div>
          <div className="driverDivs">DRIVER</div>
        </div>
        <div className="edits">
          <Link to="/drivers/add">
            <div className="editDivs1">
              <p>Add</p>
            </div>
          </Link>
          <Link to="/drivers/update">
            <div className="editDivs2">
              <p>Update</p>
            </div>
          </Link>
          <div className="editDivs3">
            <p>Remove</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Drivers;
