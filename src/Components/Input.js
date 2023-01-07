//Input react component that gets the dimensions of the board

import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 0,
      columns: 0
    };
    console.log(props)
  }

  render() {
    return (
      <div>
        <label>
          Rows:
          <input type="text" name="rows" />
        </label>
        <label>
          Columns:
          <input type="text" name="columns" />
        </label>
        <button onClick={() => this.props.onClick(
            document.getElementsByName("rows")[0].value,
            document.getElementsByName("columns")[0].value
        )}>Submit</button>
      </div>
    );
  }
}

export default Input;