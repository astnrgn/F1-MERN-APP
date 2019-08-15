import React from "react";
// import "./Table.css";

const Table = ({ children = {} }) =>
  children.length > 0 ? (
    <table className="Table">
      <tbody>{children}</tbody>
    </table>
  ) : (
    <p className="NoData">No orders</p>
  );

export default Table;
