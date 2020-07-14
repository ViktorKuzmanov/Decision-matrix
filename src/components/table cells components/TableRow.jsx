import React from "react";
import TableDataCell from "./TableDataCell";
import ScoreCell from "./ScoreCell";

function TableRow(props) {
  return (
    <tr>
      <TableDataCell text={props.name} isEditable="true" />
      <td>23</td>
      <ScoreCell />
      <ScoreCell />
      <td></td>
    </tr>
  );
}

export default TableRow;
