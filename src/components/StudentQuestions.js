import React, { useState } from 'react';

const StudentQuestions = ({n, changeNumber}) => {

    return (
    <div style={{ backgroundColor: '', height: '100%', width: '25vw', borderRight: '1.5px solid #eceff1'}}>
        <h3>Ask a question!</h3>
        <button onClick={() => changeNumber(n + 1)}>Click me!</button>
    </div>
    )
};

export default StudentQuestions;