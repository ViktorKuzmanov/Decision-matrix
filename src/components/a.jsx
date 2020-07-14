return (
    <div>
      <table
        id="table"
        class="table table-bordered table-responsive-md table-striped text-center"
      >
        <thead>
          <tr>
            <td></td>
            <td>Your weighted decision resultt:</td>
            {this.state.options.map(this.returnResultCell)}
          </tr>
          <tr>
            <td></td>
            <td>Options</td>
            {this.state.options.map(this.returnOptionCell)}
            <td>
              <button type="submit" name="addOptionButton">
                +
              </button>
            </td>
          </tr>
          <tr>
            <TableDataCell
              text="Decision making factors"
              isEditable="false"
            />
            <TableDataCell text="Weighting" />
            <TableDataCell text="Your score" />
            <TableDataCell text="Your score" />
            <td></td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <TableDataCell text="Factor 1" isEditable="true" />
            <td onClick={this.handleClick}>23</td>
            <ScoreCell />
            <ScoreCell />
            <td></td>
          </tr>
          <tr>
            <TableDataCell text="Factor 2" isEditable="true" />
            <ScoreCell />
            <ScoreCell />
            <ScoreCell />
            <td></td>
          </tr>
          <tr class="hide">
            <TableDataCell text="Factor 3" isEditable="true" />
            <ScoreCell />
            <ScoreCell />
            <ScoreCell />
            <td></td>
          </tr>
          <tr>
            <td>
              <button type="submit" name="addFactorButton">
                +
              </button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  