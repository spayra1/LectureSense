import React, { useState } from 'react';

const StudentView = ({n, changeNumber}) => {

    return (
    <div style={{ backgroundColor: '', height: '100%', width: '50vw'}}>
        <h3>This is student view</h3>
        <button onClick={() => changeNumber(n + 1)}>Click me!</button>
    </div>
    )
};

export default StudentView;