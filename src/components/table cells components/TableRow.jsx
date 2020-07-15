import React from "react";
import TableDataCell from "./TableDataCell";
import ScoreCell from "./ScoreCell";

function TableRow(props) {
  return (
    <tr>
      <TableDataCell text={props.factor.name} isEditable="true" />
      <td contentEditable="true">{props.factor.weight}</td>
      {props.factor.scores.map((score) => {
        return (
          <ScoreCell
            value={score}
            handleOptionChange={props.handleOptionChange}
          />
        );
      })}
    </tr>
  );
}

export default TableRow;
