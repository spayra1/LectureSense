import React from 'react';

const TeacherQuestions = ({n}) => (
    <div style={{backgroundColor: 'lightblue', height: '100%', width: '25vw'}}>
        <h3>This is the teacher view.</h3>
        <br />
        <label>This is the number!!!: {n}</label>
    </div>
);

export default TeacherView;