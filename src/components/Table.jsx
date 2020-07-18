import React from "react";
import axios from "axios";
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

  handleScoreChange(event, factor) {
    console.log("handleScoreChange is triggered");
    console.log(event.target.value);
    console.log(factor);
  }

  handleWeightChange(event, factor) {
    console.log("handleWeightChange triggered");
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
        handleScoreChange={this.handleScoreChange}
        handleWeightChange={this.handleWeightChange}
        handleFactorNameChange={this.handleFactorNameChange}
      />
    );
  }
}
