import React, { useState } from 'react';

const StudentQuestions = ({n, changeNumber}) => {

    return (
    <div style={{ backgroundColor: '', height: '100%', width: '25vw'}}>
        <h3>This is student question view</h3>
        <button onClick={() => changeNumber(n + 1)}>Click me!</button>
    </div>
    )
};

export default StudentView;