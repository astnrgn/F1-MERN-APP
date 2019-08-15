import React from "react";

// import Table from "../components/Table";
// import TableRow from "../components/TableRow";
import { connect } from "react-redux";
import { createNewRacer, deleteRacer, updateRacer } from "../actions/racer";
import Drivers from "../components/Drivers/Drivers";
import Table from "../components/Table";
import TableRow from "../components/TableRow";
import Add from "../components/Add/Add";

const Racers = ({ racers, onAdd, onRemove, onUpdate }) => {
  return (
    // <Drivers driverData={racers} />
    <Table>
      {racers.map((d, i) => (
        <TableRow
          key={i}
          {...d}
          onClick={e => {
            e.preventDefault();
            onRemove(i);
          }}
          onChange={e => {
            e.preventDefault();
            onUpdate(i, { [e.target.name]: e.target.value });
          }}
        />
      ))}
    </Table>
  );
};

const mapStateToProps = state => ({
  racers: state.racers
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteRacer(id)),
  onUpdate: (id, update) => dispatch(updateRacer(id, update))
});

const RacerDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Racers);

export default RacerDisplay;
