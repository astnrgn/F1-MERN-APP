import React from "react";
// import "./Table.css";

const Table = ({ children = {} }) =>
  children.length > 0 ? (
    <table className="Table">
      <tbody className="grid">{children}</tbody>
    </table>
  ) : (
    <p className="NoDrivers">No drivers</p>
  );

export default Table;
