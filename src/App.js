import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentBar from './components/StudentBar';
import TeacherBar from './components/TeacherBar';
import StudentFeedback from './components/StudentFeedback';
import StudentQuestions from './components/StudentQuestions';
import TeacherFeedback from './components/TeacherFeedback';
import TeacherQuestions from './components/TeacherQuestions';

function App() {
  const [number, getNumber] = useState(0);

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', height: '10vx', width: '100%'}}>
          <StudentBar/>
          <TeacherBar/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', height: '90vh', width: '100%'}}>
          <StudentQuestions n={number} changeNumber={getNumber} />
          <StudentFeedback n={number} changeNumber={getNumber} />
          <TeacherQuestions n={number}/>
          <TeacherFeedback n={number}/>
        </div>
      </div>
    </div>
  );
}

export default App;
