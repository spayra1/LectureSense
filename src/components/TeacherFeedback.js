import React from 'react';

const TeacherFeedback = ({n}) => (
    <div style={{backgroundColor: '', height: '100%', width: '25vw'}}>
        <h3>Live feedback:</h3>
        <br />
        <label>This is the number!!!: {n}</label>
    </div>
);

export default TeacherFeedback;