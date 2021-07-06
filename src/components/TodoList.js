import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    render(){
        return(
            <div>
            {this.props.list.map((todo, idx) => {
                console.log(todo)
                return <Todo key = {idx} todo = {todo}/>
            })}
            </div>
        )
    }
}

export default TodoList;