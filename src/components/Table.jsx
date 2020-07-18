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
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleFactorNameChange = this.handleFactorNameChange.bind(this);
    this.handleOptionNameChange = this.handleOptionNameChange.bind(this);
  }
  componentDidMount() {
    axios.get("table").then((res) => {
      const { factors, options } = res.data;
      this.setState({ factors: factors, options: options });
    });
  }

  handleScoreChange(event, factor, scoreIndex) {
    console.log("handleScoreChange is triggered");
    const changedScore = event.target.value;
    const changedFactor = factor;
    changedFactor.scores[scoreIndex] = parseInt(changedScore);
    axios.post("changeFactor", { changedFactor }).then((res) => {
      this.setState(res.data);
    });
  }

  handleWeightChange(event, factor) {
    console.log("handleWeightChange triggered");
    const changedWeight = event.target.value;
    const changedFactor = factor;
    changedFactor.weight = parseInt(changedWeight);
    axios.post("changeFactor", { changedFactor }).then((res) => {
      this.setState(res.data);
    });
  }

  handleFactorNameChange(event, factor) {
    console.log("handleFactorNameChange triggered");
    const changedName = event.target.textContent;
    const changedFactor = factor;
    changedFactor.name = changedName;
    axios.post("changeFactor", { changedFactor });
  }

  handleOptionNameChange(event, option) {
    const changedName = event.target.textContent;
    console.log(option);
    const changedOption = option;
    changedOption.name = changedName;
    axios.post("changeOptionName", { changedOption });
  }

  render() {
    return (
      <PresentationalTable
        state={this.state}
        handleScoreChange={this.handleScoreChange}
        handleWeightChange={this.handleWeightChange}
        handleFactorNameChange={this.handleFactorNameChange}
        handleOptionNameChange={this.handleOptionNameChange}
      />
    );
  }
}
