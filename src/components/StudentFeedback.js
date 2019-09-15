import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const StudentFeedback = ({s, ss, l, sl, b, sb}) => {

    return (
    <div class="col" style={{ backgroundColor: ''}}>
        <h3>How's lecture?</h3>
        <Button onClick={() => ss(s + 1)} variant="contained" color="primary" className='btn'>Slow down!</Button>
        <Button onClick={() => sl(l + 1)} variant="contained" color="primary" className='btn'>Speak louder!</Button>
        <Button onClick={() => sb(b + 1)} variant="contained" color="primary" className='btn'>Write bigger!</Button>
    </div>
    )
};

export default StudentFeedback;