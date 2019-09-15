import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentBar from './components/StudentBar';
import TeacherBar from './components/TeacherBar';
import StudentFeedback from './components/StudentFeedback';
import StudentQuestions from './components/StudentQuestions';
import TeacherFeedback from './components/TeacherFeedback';
import TeacherQuestions from './components/TeacherQuestions';
import QuestionForm from './components/StudentBar';

function App() {
  const [number, getNumber] = useState(0);
  const [question, setQuestion] = useState("");

  const [questionList, setQuestionList] = useState([
    {id: 0, question: "How are you?", votes: 0, studentName: "james"}
  ]);

  const updateQuestionList = q => {
    setQuestion(q);
    setQuestionList([...questionList, q]);
  }


  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', height: '10vx', width: '100%'}}>
          <StudentBar/>
          <TeacherBar/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', height: '90vh', width: '100%'}}>
        <StudentQuestions q={question} changeQ={updateQuestionList}/>
          <StudentFeedback n={number} changeNumber={getNumber} />
          <TeacherQuestions q={question}/>
          <TeacherFeedback n={number}/>
        </div>
      </div>
    </div>
  );
}

export default App;
