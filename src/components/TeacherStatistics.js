import React from 'react';

const TeacherStatistics = ({s, l, b}) => (
    <div class = "col" style={{backgroundColor: ''}}>
        <h3>Quick Alerts:</h3>
        <label>Slow down: {s}</label>
        <label>Speak louder: {l}</label>
        <label>Write bigger: {b}</label>
    </div>
);

export default TeacherStatistics;