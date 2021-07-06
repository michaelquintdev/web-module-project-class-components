import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.input);
    }

    handleChange = (e) => {
        this.setState({
          input: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>What do you have to do?
                    <input
                        name = 'todo'
                        type = 'text'
                        onChange = {this.handleChange}
                    />
                    </label>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;