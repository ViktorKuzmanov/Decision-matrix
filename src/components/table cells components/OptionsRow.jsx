import React, { Component } from "react";
import TableDataCell from "./TableDataCell";

function returnOptionCell(option) {
  return <td contentEditable="true" >{option.name}</td>;
}

function SecondRow(props) {
  return (
    <tr>
      <td></td>
      <td>Options</td>
      {props.state.options.map(returnOptionCell)}
      <td>
        <button type="submit" name="addOptionButton">
          +
        </button>
      </td>
    </tr>
  );
}

export default SecondRow;
