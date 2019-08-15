import React from "react";

const TableRow = ({
  name = "",
  birthplace = "",
  team = "",
  rank,
  image = "",
  onChange = () => {},
  onClick = () => {}
}) => (
  <tr>
    <table className="table">
      <td>{name}</td>
      <td>{birthplace}</td>
      <td>{team}</td>
      <td>{rank}</td>
      <td>{image}</td>
    </table>
    <td>
      <input onChange={onChange} name="quantity" type="text" value={name} />
    </td>
    <td>
      <select onChange={onChange} name="status" value={team}>
        <option value="Mercades">Mercades</option>
        <option value="RedBull">RedBull</option>
        <option value="Ferrari">Ferrari</option>
      </select>
    </td>
    <td>
      <button onClick={onClick}>X</button>
    </td>
  </tr>
);

export default TableRow;
