import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentBar from './components/StudentBar';
import TeacherBar from './components/TeacherBar';
import StudentFeedback from './components/StudentFeedback';
import StudentQuestions from './components/StudentQuestions';
import StudentViewer from './components/StudentViewer';
import TeacherFeedback from './components/TeacherFeedback';
import TeacherQuestions from './components/TeacherQuestions';
import QuestionForm from './components/StudentBar';

function App() {
  const [slower, setSlower] = useState(0);
  const [louder, setLouder] = useState(0);
  const [bigger, setBigger] = useState(0);

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
        <div className="student-section">
          <StudentBar/>
          <div class="row">
            <div class="col">
            <StudentQuestions q={question} changeQ={updateQuestionList}/>
            <StudentViewer q={question} changeQ={updateQuestionList}/>
            </div>
            <div class="col">
            <StudentFeedback s={slower} ss={setSlower} l={louder} sl={setLouder} b={bigger} sb={setBigger}/>
            </div>
          </div>
        </div>
        <div className="teacher-section">
          <TeacherBar/>
          <div class="row">
            <div class="col">
            <TeacherQuestions q={question}/>
            </div>
            <div class="col">
            <TeacherFeedback s={slower} l={louder} b={bigger}/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

/*
<div style={{display: 'flex', flexDirection: 'row', height: '10vh', width: '100%'}}>
          <StudentBar/>
          <TeacherBar/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', height: '90vh', width: '100%'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <StudentQuestions q={question} changeQ={updateQuestionList}/>
            <StudentViewer q={question} changeQ={updateQuestionList}/>
          </div>
          <StudentFeedback n={number} changeNumber={getNumber} />
          <TeacherQuestions q={question}/>
          <TeacherFeedback n={number}/>
        </div>*/