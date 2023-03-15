import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    title: "React App title"
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <button onClick={() => this.state.title === "React App title"
        ?
        this.setState({title: "Promjena"})
        :
        this.setState({title: "React App title"})
        }>
          Promjeni
        </button>
      </div>
    )
  } 
}

export default App;
