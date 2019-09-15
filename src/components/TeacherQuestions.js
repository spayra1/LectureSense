import React from 'react';
import './css/Question.css';
import Divider from '@material-ui/core/Divider';

const TeacherQuestions = ({q}) => {
    let questionList = q
    
    function sortByVotes(entry1, entry2){
        return entry2.votes - entry1.votes;
    }
    
    function mapQuestions(questions) { 
        return questions.map(q =>
        <tr key={q.id} className="question">
            <td>{q.votes}</td>
            <td>{q.question}</td>
            <td>{q.studentName}</td>    
        </tr>)
    }
    
    questionList.sort(sortByVotes);

    return (
    <div style={{backgroundColor: '', height: '100%', paddingLeft: 15}}>
        <h3>Questions asked: </h3>
        <table className="questions-table">
            <tr>
                <th>Points</th>
                <th>Question</th>
                <th>Student</th>
            </tr>
            {mapQuestions(questionList)}
        </table>
    </div>
    );
}

export default TeacherQuestions;


// old

// import React from 'react';

// const TeacherQuestions = ({q}) => (
//     <div style={{backgroundColor: ''}}>
//         <h3>Questions asked:</h3>
//         <br />
//         <label>Question asked: {q}</label>
//     </div>
// );

// export default TeacherQuestions;