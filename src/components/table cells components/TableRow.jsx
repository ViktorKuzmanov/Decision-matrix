import React from "react";
import TableDataCell from "./TableDataCell";
import ScoreCell from "./ScoreCell";

function TableRow(props) {
  return (
    <tr>
      <TableDataCell text={props.factor.name} isEditable="true" />

      <ScoreCell
        value={props.factor.weight}
        onChange={props.handleWeightChange}
      />
      {props.factor.scores.map((score) => {
        return <ScoreCell value={score} onChange={props.handleOptionChange} />;
      })}
    </tr>
  );
}

export default TableRow;
