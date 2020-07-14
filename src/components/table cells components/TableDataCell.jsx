import React from "react";

export default class TableDataCell extends React.Component {
  render() {
    return (
      <td className="text-center" contentEditable={this.props.isEditable}>
        {this.props.text}
      </td>
    );
  }
}
