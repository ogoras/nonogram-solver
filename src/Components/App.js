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
        <Load onClick={(url) => this.loadImage(url)}/>
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

  loadImage(url) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.onload = () => {
          URL.revokeObjectURL(img.src);
          this.updateDimensions(img.height, img.width);
        }
      });
  }
}

export default App;
