import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    render(){
        return(
            <div onClick = {this.props.clear}>
            {this.props.list.map((todo, idx) => {
                return <Todo key = {idx} todo = {todo}/>
            })}
            </div>
        )
    }
}

export default TodoList;