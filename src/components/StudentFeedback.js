import React, { useState } from 'react';

const StudentFeedback = ({s, ss, l, sl, b, sb}) => {

    return (
    <div style={{ backgroundColor: ''}}>
        <h3>How's lecture?</h3>
        <button onClick={() => ss(s + 1)}>Slow down!</button>
        <button onClick={() => sl(l + 1)}>Speak louder!</button>
        <button onClick={() => sb(b + 1)}>Write bigger!</button>
    </div>
    )
};

export default StudentFeedback;