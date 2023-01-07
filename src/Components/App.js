import './App.css';
import Board from './Board';
import Input from './Input';
import Load from './Load';
import React from 'react';

// input fields for dimensions on top, board at the bottom
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 4,
      columns: 4
    }
  }

  render() {
    return (
      <div className="App">
        <Input onClick={(i,j) => this.updateDimensions(i,j)}/>
        <Board rows={this.state.rows} columns={this.state.columns}/>
        <Load/>
      </div>
    );
  }

  updateDimensions(rows, columns) {
    this.setState({
      rows: rows,
      columns: columns
    });
    console.log(rows, columns)
  }
}

export default App;
