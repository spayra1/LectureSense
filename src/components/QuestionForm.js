import React, { useState } from 'react';
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';

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
        this.setState({value: ''});
    }

      

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <TextField
            id="standard-name"
            label="Question"
            className="input"
            value={this.state.value}
            onChange={this.handleChange}
            margin="normal"
            variant="filled"
      />
                {/*
                <label>
                    Question:  
                    <input
                        type="text"
                        name="question"
                        className="input"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                */}
            </form>
            
            </div>
        )
    }
}

export default QuestionForm;


// <Button variant="container" color="solid black" onClick={this.handleSubmit}>Submit</Button>