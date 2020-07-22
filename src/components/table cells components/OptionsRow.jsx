import React, { Component } from "react";

function returnOptionCell(option, handleOptionNameChange, handleOptionDelete) {
  return (
    <td
      contentEditable="true"
      onInput={(event) => {
        handleOptionNameChange(event, option);
      }}
      onDoubleClick={() => handleOptionDelete(option)}
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
        returnOptionCell(
          option,
          props.handleOptionNameChange,
          props.handleOptionDelete
        )
      )}
      <td>
        <button onClick={props.handleAddNewOption}>+</button>
      </td>
    </tr>
  );
}

export default OptionsRow;
