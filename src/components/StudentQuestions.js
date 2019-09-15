import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

const StudentQuestions = ({q, changeQ}) => {

    return (
    <div style={{ backgroundColor: '', height: '100%', width: '25vw', borderRight: '1.5px solid #eceff1'}}>
        <h3>Ask a question!</h3>
        <QuestionForm q={q} changeQ={changeQ}/>
    </div>
    )
};

export default StudentQuestions;