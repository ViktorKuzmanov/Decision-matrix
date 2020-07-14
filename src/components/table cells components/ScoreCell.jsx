import React from "react";
import SelectScore from "../SelectScore";

export default class ScoreCell extends React.Component {
  render() {
    return (
      <td class="pt-3-half" contenteditable="true">
        <SelectScore />
      </td>
    );
  }
}
