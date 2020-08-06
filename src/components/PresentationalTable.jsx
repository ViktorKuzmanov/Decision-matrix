import React from "react";
import ResultsRow from "./table-components/ResultsRow";
import OptionsRow from "./table-components/OptionsRow";
import ColumnNameRow from "./table-components/ColumnNameRow";
import TableRow from "./table-components/TableRow";

function PresentationalTable(props) {
  return (
    <div>
      <table
        id="table"
        class="table table-bordered table-responsive-md table-striped text-center"
      >
        <thead>
          <ResultsRow factors={props.factors} options={props.options} />
          <OptionsRow
            options={props.options}
            handleOptionNameChange={props.handleOptionNameChange}
            handleAddNewOption={props.handleAddNewOption}
            handleOptionDelete={props.handleOptionDelete}
          />
          <ColumnNameRow options={props.options} />
        </thead>

        <tbody>
          {props.factors.map((factor) => {
            return (
              <TableRow
                factor={factor}
                handleScoreChange={props.handleScoreChange}
                handleWeightChange={props.handleWeightChange}
                handleFactorNameChange={props.handleFactorNameChange}
                handleFactorDelete={props.handleFactorDelete}
              />
            );
          })}

          <tr>
            <td>
              <button onClick={props.handleAddNewFactor}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PresentationalTable;
