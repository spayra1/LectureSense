import React from 'react';
import './css/Question.css';

const TeacherQuestions = ({n}) => {
    let questionList = [
        {id: 1, question: "How are you?", votes: 100, studentName: "james"},
        {id: 2, question: "Hey", votes: 8, studentName: "packard"},
        {id: 3, question: "Okay", votes: 50, studentName: "english"}
    ];
    
    function sortByVotes(entry1, entry2){
        return entry2.votes - entry1.votes;
    }
    
    function mapQuestions(questions) { 
        return questions.map(q =>
        <tr key={q.id}>
            <td>{q.votes}</td>
            <td>{q.question}</td>
            <td>{q.studentName}</td>
        </tr>)
    }
    
    questionList.sort(sortByVotes);

    return (
    <div style={{backgroundColor: '', height: '100%'}}>
        <h3>Questions asked:</h3>
        <br />
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