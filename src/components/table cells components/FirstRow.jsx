import React, { Component } from "react";
import TableDataCell from "./TableDataCell";

function returnResultCell(result) {
  return <TableDataCell text={result.result} />;
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
