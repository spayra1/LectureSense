import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentFeedback from './components/StudentFeedback';
import StudentQuestions from './components/StudentQuestions';
import TeacherFeedback from './components/TeacherFeedback';
import TeacherQuestions from './components/TeacherQuestions';

function App() {
  const [number, getNumber] = useState(0);

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'row', height: '100vh', width: '100%'}}>
        <StudentFeedback n={number} changeNumber={getNumber} />
        <StudentQuestions n={number} changeNumber={getNumber} />
        <TeacherFeedback n={number}/>
        <TeacherQuestions n={number}/>
      </div>
    </div>
  );
}

export default App;
