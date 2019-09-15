import React from 'react';
import Slow from './slow.jpg';
import Bigger from './bigger.jpg';
import Louder from './louder.png';

const TeacherFeedback = ({s, l, b}) => {
    
    if(s>3){return(<img src={Slow}/>)};
    if(b>3){return(<img src={Bigger}/>)};
    if(l>3){return(<img src={Louder}/>)};

    return(
        <div class = "col" style={{backgroundColor: ''}}>
            <h3>Quick Alerts:</h3>
            
            <label>Slow down: {s}</label>
            <label>Speak louder: {l}</label>
            <label>Write bigger: {b}</label>
        </div>
    )
}

export default TeacherFeedback;