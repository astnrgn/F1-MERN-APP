import React from "react";
import "./TableRow.css";

const TableRow = ({
  name = "",
  birthplace = "",
  team = "",
  rank,
  image = "",
  onChange = () => {},
  onClick = () => {}
}) => (
  <div>
    <div>
      <div
        className="driverDivs"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "250px 250px",
          backgroundRepeat: "no-repeat",
          position: "relative",
          textAlign: "center"
        }}
      >
        <div className="textContainer">
          <div className="text">
            <p>
              <span className="description">Name: </span>
              {name}
            </p>
            <p>
              <span className="description">Birthplace: </span>
              {birthplace}
            </p>
            <p>
              <span className="description">Team: </span>
              {team}
            </p>
            <p>
              <span className="description">Rank: </span>
              {rank}
            </p>
          </div>
        </div>
      </div>
      <td>
        <input onChange={onChange} name="quantity" type="text" value={name} />
      </td>
      <td>
        <select onChange={onChange} name="team" value={team}>
          <option value="Mercades">Mercades</option>
          <option value="RedBull">RedBull</option>
          <option value="Ferrari">Ferrari</option>
        </select>
      </td>
      <td>
        <button onClick={onClick}>X</button>
      </td>
    </div>
  </div>
);

export default TableRow;
