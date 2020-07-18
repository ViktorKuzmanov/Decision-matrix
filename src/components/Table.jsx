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
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }
  componentDidMount() {
    axios.get("table").then((res) => {
      const { factors, options } = res.data;
      this.setState({ factors: factors, options: options });
    });
  }

  handleOptionChange(event, factor) {
    console.log("ohandleOptionChange is triggered");
    console.log(event.target.value);
    console.log(factor);
  }

  handleWeightChange(event, factor) {
    console.log("handleWeightChange triggered");
    // console.log(event.target.value);
    // console.log(factor);
    const changedWeight = event.target.value;
    const updatedFactor = factor;
    updatedFactor.weight = parseInt(changedWeight);
    axios.post("changeWeight", { updatedFactor }).then((res) => {
      this.setState(res.data);
    });
  }

  handleFactorNameChange(event, factor) {
    console.log("handleFactorNameChange triggered");
    console.log(event.target.textContent);
    console.log(factor);
  }

  render() {
    return (
      <PresentationalTable
        state={this.state}
        handleOptionChange={this.handleOptionChange}
        handleWeightChange={this.handleWeightChange}
        handleFactorNameChange={this.handleFactorNameChange}
      />
    );
  }
}
