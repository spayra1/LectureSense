import React, { useState } from 'react';
import Button from "@material-ui/core/Button"

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A question was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.changeQ(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Question:  
                    <input
                        type="text"
                        name="question"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <Button variant="container" color="solid black" onClick={this.handleSubmit}>Submit</Button>
            </form>
        )
    }
}

export default QuestionForm;