import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

const StudentViewer = ({q}) => {
    let questionList = q
    
    function sortByVotes(entry1, entry2){
        return entry2.votes - entry1.votes;
    }
    
    function mapQuestions(questions) { 
        return questions.map(q =>
        <tr key={q.id}>
            <td>{q.votes}</td>
            <td>{q.question}</td>
        </tr>)
    }
    
    questionList.sort(sortByVotes);

    return (
    <div style={{backgroundColor: '', height: '80%'}}>
        <br/>
        <h3>Questions asked:</h3>
        <table className="questions-table">
            <tr>
                <th>Points</th>
                <th>Question</th>
            </tr>
            {mapQuestions(questionList)}
        </table>
    </div>
    );
};

export default StudentViewer;