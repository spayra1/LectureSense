import React, { useState } from 'react';
import QuestionForm from './QuestionForm';


const StudentQuestions = ({q, changeQ}) => {

    return (
    <div >
        <h3>Ask a question!</h3>
        <QuestionForm q={q} changeQ={changeQ} style={{ paddingLeft: 15}}/>
    </div>
    )
};

export default StudentQuestions;