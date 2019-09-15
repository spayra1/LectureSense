import React, { useState } from 'react';

const StudentFeedback = ({n, changeNumber}) => {

    return (
    <div style={{ backgroundColor: '', height: '100%', width: '25vw', borderRight: '3px solid #757575'}}>
        <h3>How's lecture?</h3>
        <button onClick={() => changeNumber(n + 1)}>Click me!</button>
    </div>
    )
};

export default StudentFeedback;