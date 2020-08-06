import React from "react";
import ScoreCell from "./ScoreCell";

function TableRow(props) {
  return (
    <tr>
      <td
        contentEditable="true"
        onInput={(event) => {
          props.handleFactorNameChange(event, props.factor);
        }}
        onDoubleClick={(event) => {
          props.handleFactorDelete(event, props.factor);
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
      {props.factor.scores.map((score, index) => {
        return (
          <ScoreCell
            value={score}
            onChange={(event) => {
              props.handleScoreChange(event, props.factor, index);
            }}
          />
        );
      })}
    </tr>
  );
}

export default TableRow;
