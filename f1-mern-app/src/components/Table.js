import React from "react";
import "./Table.css";

const Table = ({ children }) => <div className="grid5">{children}</div>;
// children.length > 0 ? (
//   <div className="grid5">{children}</div>
// ) : (
//   <p className="NoDrivers">No drivers</p>
// );

export default Table;
