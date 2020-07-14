import React from "react";
import TableDataCell from "./TableDataCell";
import ScoreCell from "./ScoreCell";

// ! tuka prenesuam handleOptionChange u props a ne go povikuam na select

function TableRow(props) {
  return (
    <tr>
      <TableDataCell text={props.factor.name} isEditable="true" />
      <td>{props.factor.weight}</td>
      {props.factor.scores.map((score) => {
        return <ScoreCell value={score} />;
      })}
    </tr>
  );
}

export default TableRow;
