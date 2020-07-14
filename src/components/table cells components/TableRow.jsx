import React from "react";
import TableDataCell from "./TableDataCell";
import ScoreCell from "./ScoreCell";

function TableRow(props) {
  return (
    <tr>
      <TableDataCell text={props.factor.name} isEditable="true" />
      <td>{props.factor.weight}</td>
      {props.factor.scores.map((score) => {
        return <td>{score}</td>;
      })}
    </tr>
  );
}

export default TableRow;
