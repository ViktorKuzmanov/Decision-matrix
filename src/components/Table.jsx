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
    this.handleAddNewFactor = this.handleAddNewFactor.bind(this);
    this.handleAddNewOption = this.handleAddNewOption.bind(this);
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

  handleAddNewOption() {
    console.log("add new option");
    // ? zos vaka gi prakjam kaa js object na server i gi dodavam tamu u json obejct i ne mi
    // ? javua greska
    const newOptionId = this.state.options.length;
    const newOption = {
      id: newOptionId,
      name: "",
      result: 0,
    };
    axios.post("addNewOption", { newOption }).then((res) => {
      this.setState(res.data);
    });
  }

  handleAddNewFactor() {
    console.log("add new factor");
    const numOfOptions = this.state.options.length;
    const indexOfNewFactor = this.state.factors.length;
    const newFactor = {
      id: indexOfNewFactor,
      name: "",
      weight: 1,
      scores: new Array(numOfOptions).fill(1),
    };
    axios.post("addNewFactor", { newFactor }).then((res) => {
      this.setState(res.data);
    });
  }

  render() {
    return (
      <PresentationalTable
        state={this.state}
        handleScoreChange={this.handleScoreChange}
        handleWeightChange={this.handleWeightChange}
        handleFactorNameChange={this.handleFactorNameChange}
        handleOptionNameChange={this.handleOptionNameChange}
        handleAddNewFactor={this.handleAddNewFactor}
        handleAddNewOption={this.handleAddNewOption}
      />
    );
  }
}
