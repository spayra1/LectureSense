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
        <div key={q.id} className="question">
            <div className="content">
                <strong>{q.question}</strong>
                <span>{q.votes}</span>
            </div>
            <p>{q.studentName}</p>
        </div>)
    }
    
    questionList.sort(sortByVotes);

    return (
    <div style={{backgroundColor: '', height: '100%', width: '25vw', borderRight: '1.5px solid #eceff1'}}>
        <h3>Questions asked:</h3>
        <br />
        <p>{mapQuestions(questionList)}</p>
        <label>This is the number!!!: {n}</label>
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