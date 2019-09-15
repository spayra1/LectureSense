import React, { useState } from 'react';

const StudentFeedback = ({n, changeNumber}) => {

    return (
    <div style={{ backgroundColor: ''}}>
        <h3>How's lecture?</h3>
        <button onClick={() => changeNumber(n + 1)}>Click me!</button>
    </div>
    )
};

export default StudentFeedback;