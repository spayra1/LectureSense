import React from 'react';

const TeacherQuestions = ({n}) => (
    <div style={{backgroundColor: '', height: '100%', width: '25vw', borderRight: '1.5px solid #eceff1'}}>
        <h3>Questions asked:</h3>
        <br />
        <label>This is the number!!!: {n}</label>
    </div>
);

export default TeacherQuestions;