import React from 'react';

class TodoForm extends React.Component{
    render() {
        return (
            <div>
                <form>
                    <label>What's the next thing you have to do?
                    <input
                        type = 'text'
                        onChange = {this.props.handleChange} 
                        value = {this.props.input}
                    />
                    </label>
                </form>
            </div>
        )
    }
}

export default TodoForm;