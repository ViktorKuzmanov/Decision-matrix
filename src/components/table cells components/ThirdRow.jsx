import React, { Component } from "react";
import TableDataCell from "./TableDataCell";

function ThirdRow(props) {
  return (
    <tr>
      <TableDataCell text="Decision making factors" isEditable="false" />
      <TableDataCell text="Weighting" />
      {props.options.map((option) => {
        return <td>Your Score</td>;
      })}
    </tr>
  );
}

export default ThirdRow;
