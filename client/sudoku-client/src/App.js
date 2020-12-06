import React from 'react';
import './App.css';
import Board from './components/board';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { board: [] };
    this.handleSolve = this.handleSolve.bind(this);
  }

  componentDidMount(){
    axios.get(`http://localhost:8000/sudoku/api/board`)
      .then(res => {
        this.setState({board: res.data});
      });
  }

  handleSolve(){
    axios.post('http://localhost:8000/sudoku/api/solve', { data: this.state.board })
    .then(res => {
      console.log(res.status);
      this.setState({ board: res.data.result});
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Sudoku Solver</h1>
        <Board id="board" board={this.state.board}></Board>
        <button onClick={this.handleSolve}>Solve</button>
      </div>
    );
  }
}

export default App;
