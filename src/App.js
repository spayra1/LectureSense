import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentView from './components/StudentView';
import TeacherView from './components/TeacherView';

function App() {
  const [number, getNumber] = useState(0);

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'row', height: '100vh', width: '100%'}}>
        <StudentView n={number} changeNumber={getNumber} />
        <TeacherView n={number}/>
      </div>
    </div>
  );
}

export default App;
