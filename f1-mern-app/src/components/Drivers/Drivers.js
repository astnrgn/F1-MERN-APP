import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Drivers.css";

class Drivers extends Component {
  // render() {
  render() {
    let drivers = this.props.driverData.map((driver, index) => {
      if (index <= 5) {
        return (
          <div
            key={index}
            className="driverDivs"
            style={{
              backgroundImage: `url(${driver.image})`,
              backgroundPosition: "center",
              backgroundSize: "250px 250px",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* <Link to={"/birddetail/" + driver.name}>
              <h3>{driver.name}</h3>
            </Link> */}
          </div>
        );
      }
    });
    return (
      <div>
        <div className="driverGrid">{drivers}</div>

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

  // return (
  //   <div>
  //     <div className="drivers">
  //       <div className="driverDivs">DRIVER</div>
  //       <div className="driverDivs">DRIVER</div>
  //       <div className="driverDivs">DRIVER</div>
  //       <div className="driverDivs">DRIVER</div>
  //       <div className="driverDivs">DRIVER</div>
  //       <div className="driverDivs">DRIVER</div>
  //     </div>
  //     <div className="edits">
  //       <Link to="/drivers/add">
  //         <div className="editDivs1">
  //           <p>Add</p>
  //         </div>
  //       </Link>
  //       <Link to="/drivers/update">
  //         <div className="editDivs2">
  //           <p>Update</p>
  //         </div>
  //       </Link>
  //       <div className="editDivs3">
  //         <p>Remove</p>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Drivers;
