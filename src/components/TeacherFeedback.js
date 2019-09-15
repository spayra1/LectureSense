import React from 'react';

const TeacherFeedback = ({s, l, b}) => (
    <div class = "col" style={{backgroundColor: ''}}>
        <h3>Live feedback:</h3>
        <br />
        <label>Slow down: {s}</label>
        <label>Speak louder: {l}</label>
        <label>Write bigger: {b}</label>
    </div>
);

export default TeacherFeedback;