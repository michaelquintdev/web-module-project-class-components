import React from 'react';
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [],
    };
  }

 handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        {/* map through list */}
        <TodoForm handleChange = {this.handleChange} input = {this.state.input}/>
        <p>You're typing... {this.state.input}</p>
      </div>
    );
  }
}

export default App;
