import React, { Component } from "react";
import TableDataCell from "./TableDataCell";

function ThirdRow() {
  return (
    <tr>
      <TableDataCell text="Decision making factors" isEditable="false" />
      <TableDataCell text="Weighting" />
      <TableDataCell text="Your score" />
      <TableDataCell text="Your score" />
      <td></td>
    </tr>
  );
}

export default ThirdRow;
