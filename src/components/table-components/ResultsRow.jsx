import React from "react";

function returnResultCell(result) {
  return <td>{result.result}</td>;
}

function ResultsRow(props) {
  return (
    <tr>
      <td></td>
      <td>Your weighted decision result:</td>
      {props.options.map(returnResultCell)}
    </tr>
  );
}

export default ResultsRow;
