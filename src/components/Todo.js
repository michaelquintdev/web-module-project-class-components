import React from 'react';

class Todo extends React.Component{
    
    render() {
        return (
            <div>
                <p>{this.props.todo.item}</p>
                <p>{this.props.todo.done}</p>
                {/* {console.log(this.props.todo)} */}
            </div>
        )
    }
}

export default Todo;