import React from 'react';

const TeacherStatistics = ({s, l, b}) => (
    <div class = "col" style={{backgroundColor: ''}}>
        <h3>Post-Lecture Analytics:</h3>
        <label>{(s/30*100).toFixed(2)}% of students asked you to slow down at some point in your lecture</label>
        <label>{(l/30*100).toFixed(2)}% of students asked you to be louder</label>
        <label>{(b/30*100).toFixed(2)}% of students asked you to write bigger on the board</label>
    </div>
);

export default TeacherStatistics;