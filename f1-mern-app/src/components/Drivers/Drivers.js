// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Drivers.css";

// class Drivers extends Component {
//   render() {
//     let drivers = this.props.driverData.map((driver, index) => {
//       return (
//         <div
//           className="driverDivs"
//           key={index}
//           style={{
//             backgroundImage: `url(${driver.image})`,
//             backgroundPosition: "center",
//             backgroundSize: "250px 250px",
//             backgroundRepeat: "no-repeat",
//             position: "relative",
//             textAlign: "center"
//           }}
//         >
//           <div className="textContainer">
//             <div className="text">
//               <p>
//                 <span className="description">Name: </span>
//                 {driver.name}
//               </p>
//               <p>
//                 <span className="description">Birthplace: </span>
//                 {driver.birthplace}
//               </p>
//               <p>
//                 <span className="description">Team: </span>
//                 {driver.team}
//               </p>
//               <p>
//                 <span className="description">Rank: </span>
//                 {driver.rank}
//               </p>
//             </div>
//           </div>
//         </div>
//       );
//     });
//     return (
//       <div>
//         <div>
//           <div className="edits">
//             <Link to="/drivers/remove">
//               <div className="editDivs3">
//                 <p>Remove</p>
//               </div>
//             </Link>
//             <Link to="/drivers/update">
//               <div className="editDivs2">
//                 <p>Update</p>
//               </div>
//             </Link>
//             <Link to="/drivers/add">
//               <div className="editDivs1">
//                 <p>Add</p>
//               </div>
//             </Link>
//           </div>
//           <div className="driverGrid">{drivers}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Drivers;
