import React from "react";
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
        onDoubleClick={(event) => {
          props.handleFactorDelete(event, props.factor);
        }}
      >
        {props.factor.name}
      </td>
      <ScoreCell
        // ? dali treba tuka kaa userot kje smene weight da se update odma tuka na frontent
        // ? ili da cheka da stigne od response od serverot so updated state pa posle
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
