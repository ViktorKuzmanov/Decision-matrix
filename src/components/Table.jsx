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
    this.handleFactorDelete = this.handleFactorDelete.bind(this);
    this.handleOptionDelete = this.handleOptionDelete.bind(this);
  }
  componentDidMount() {
    axios.get("table").then((res) => {
      const { factors, options } = res.data;
      this.setState({ factors: factors, options: options });
    });
  }

  handleFactorDelete(event, factor) {
    console.log("handleFactorDelete triggered");
    const factorToDelete = factor;
    axios.post("deleteFactor", factorToDelete).then((res) => {
      this.setState((prevState) => {
        return res.data;
      });
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
    console.log("handleOptionNameChange treigered");
    const changedName = event.target.textContent;
    const changedOption = option;
    changedOption.name = changedName;
    axios.post("changeOptionName", { changedOption });
  }

  handleAddNewOption() {
    console.log("add new option");
    // ? zos vaka gi prakjam kaa js object na server i gi dodavam tamu u json obejct i ne mi
    // ? javua greska
    // Get the last option's id + 1 (new option id)
    const lastOption = this.state.options[this.state.options.length - 1];
    const newOptionId = lastOption.id + 1;
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
    console.log("handleAddNewFactor is triggered");
    const numOfOptions = this.state.options.length;
    const indexOfLastFactor = this.state.factors.length - 1;
    const lastFactor = this.state.factors[indexOfLastFactor];
    const idOfNewFactor = lastFactor.id + 1;
    const newFactor = {
      id: idOfNewFactor,
      name: "",
      weight: 1,
      scores: new Array(numOfOptions).fill(1),
    };
    axios.post("addNewFactor", { newFactor }).then((res) => {
      this.setState(res.data);
    });
  }

  handleOptionDelete(option, iOfOption) {
    // ? kaa kje go dodadam via event handler(callback) toa mi e 1 commit
    // ? drug commit kaa kje pratam post request na serverot i tamu kje ima porta so kje go prima
    // ? tret commit koa kje bide zavrsheno se i kje se update ui na frontent
    console.log("handleOptionDelete triggered");
    option = {
      ...option,
      iOfOption: iOfOption,
    };
    axios.post("deleteOption", option).then((res) => {
      this.setState(res.data);
    });
  }

  render() {
    const factors = this.state.factors;
    const options = this.state.options;
    return (
      // ? dali e dobro u mojta app so prenesuam props nekolku sloevi podole od parent do chil component
      // ? ... ili treba tia child components da imat svoj state
      <PresentationalTable
        factors={factors}
        options={options}
        handleScoreChange={this.handleScoreChange}
        handleWeightChange={this.handleWeightChange}
        handleFactorNameChange={this.handleFactorNameChange}
        handleOptionNameChange={this.handleOptionNameChange}
        handleAddNewFactor={this.handleAddNewFactor}
        handleAddNewOption={this.handleAddNewOption}
        handleFactorDelete={this.handleFactorDelete}
        handleOptionDelete={this.handleOptionDelete}
      />
    );
  }
}
