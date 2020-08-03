import React, { Component } from "react";

function returnOptionCell(
  option,
  handleOptionNameChange,
  handleOptionDelete,
  iOfOption
) {
  return (
    <td
      contentEditable="true"
      onInput={(event) => {
        handleOptionNameChange(event, option);
      }}
      onDoubleClick={() => handleOptionDelete(option, iOfOption)}
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
      {props.options.map((option, iOfOption) =>
        returnOptionCell(
          option,
          props.handleOptionNameChange,
          props.handleOptionDelete,
          iOfOption
        )
      )}
      <td>
        <button onClick={props.handleAddNewOption}>+</button>
      </td>
    </tr>
  );
}

export default OptionsRow;
