import React, { Component } from "react";

function returnResultCell(result) {
  return <td>{result.result}</td>;
}

function FirstRow(props) {
  return (
    <tr>
      <td></td>
      <td>Your weighted decision result:</td>
      {props.state.options.map(returnResultCell)}
    </tr>
  );
}

export default FirstRow;
