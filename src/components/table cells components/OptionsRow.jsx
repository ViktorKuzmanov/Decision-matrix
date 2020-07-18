import React, { Component } from "react";

function returnOptionCell(option, handleOptionNameChange) {
  return (
    <td
      contentEditable="true"
      onInput={(event) => {
        handleOptionNameChange(event, option);
      }}
    >
      {option.name}
    </td>
  );
}

function OptionsRow(props) {
  return (
    <tr>
      <td></td>
      <td>Options</td>
      {props.state.options.map((option) =>
        returnOptionCell(option, props.handleOptionNameChange)
      )}
      <td>
        <button type="submit" name="addOptionButton">
          +
        </button>
      </td>
    </tr>
  );
}

export default OptionsRow;
