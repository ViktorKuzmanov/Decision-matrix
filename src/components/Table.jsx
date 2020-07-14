import React from "react";
import TableDataCell from "./table cells components/TableDataCell";
import ScoreCell from "./table cells components/ScoreCell";
import axios from "axios";
import FirstRow from "./table cells components/FirstRow";
import OptionsRow from "./table cells components/OptionsRow";
import ThirdRow from "./table cells components/ThirdRow";
import TableRow from "./table cells components/TableRow";
import PresentationalTable from "./PresentationalTable";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      factors: [],
      options: [],
    };
  }
  componentDidMount() {
    axios.get("table").then((res) => {
      const { factors, options } = res.data;
      this.setState({ factors: factors, options: options });
    });
  }

  handleOptionChange(event) {
    console.log("aa");
    console.log(event);
  }

  render() {
    return (
      <PresentationalTable
        state={this.state}
        handleOptionChange={this.handleOptionChange}
      />
    );
  }
}
