import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const initialTodo =  [
  {
    item: '',
    id: 0,
    done: false
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: initialTodo,
    };
  }

  submitTodo = (todo) => {
    const newItem = {
      item: todo,
      id: Date.now(),
      done: false,
    }
    this.setState({
      ...this.state,
      list: [...this.state.list, newItem]
    })
  }
  

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        {/* map through list */}
        <TodoList list = {this.state.list}/>
        <TodoForm handleChange = {this.handleChange} input = {this.state.input} submit = {this.submitTodo}/>
      </div>
    );
  }
}

export default App;
