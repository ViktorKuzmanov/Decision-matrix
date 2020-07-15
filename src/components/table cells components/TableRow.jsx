import React from "react";
import TableDataCell from "./TableDataCell";
import ScoreCell from "./ScoreCell";

// ! prenesual onChange={props.handleWeightChange} a ne go koristam

function TableRow(props) {
  return (
    <tr>
      <TableDataCell text={props.factor.name} isEditable="true" />
      <td onInput={props.handleWeightChange} contentEditable="true">
        {props.factor.weight}
      </td>
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
