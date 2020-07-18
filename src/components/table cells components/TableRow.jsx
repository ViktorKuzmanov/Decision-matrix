import React from "react";
import TableDataCell from "./TableDataCell";
import ScoreCell from "./ScoreCell";

function TableRow(props) {
  // ? kako da znam dali da staam state na via component ili da si prezima state od Table Componentot
  // ? should i make event handler in the component that triggers the event or in parent ?
  return (
    <tr>
      <td
        contentEditable="true"
        onInput={(event) => {
          props.handleFactorNameChange(event, props.factor);
        }}
      >
        {props.factor.name}
      </td>
      <ScoreCell
        value={props.factor.weight}
        onChange={(event) => {
          props.handleWeightChange(event, props.factor);
        }}
      />
      {props.factor.scores.map((score) => {
        return (
          <ScoreCell
            value={score}
            onChange={(event) => {
              props.handleOptionChange(event, props.factor);
            }}
          />
        );
      })}
    </tr>
  );
}

export default TableRow;
