import React from "react";
import FirstRow from "./table cells components/FirstRow";
import OptionsRow from "./table cells components/OptionsRow";
import ThirdRow from "./table cells components/ThirdRow";
import TableRow from "./table cells components/TableRow";

function PresentationalTable(props) {
  return (
    <div>
      <table
        id="table"
        class="table table-bordered table-responsive-md table-striped text-center"
      >
        <thead>
          <FirstRow state={props.state} />
          <OptionsRow state={props.state} />
          <ThirdRow />
        </thead>

        <tbody>
          {props.state.factors.map((factor) => {
            return (
              <TableRow
                factor={factor}
                handleOptionChange={props.handleOptionChange}
                handleWeightChange={props.handleWeightChange}
              />
            );
          })}

          <tr>
            <td>
              <button>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PresentationalTable;
