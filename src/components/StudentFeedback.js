import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { green, indigo } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const StudentFeedback = ({s, ss, l, sl, b, sb}) => {

    const ColorButton = withStyles(theme => ({
        root: {
          margin: 20,
          color: theme.palette.getContrastText(indigo[500]),
          backgroundColor: indigo[500],
          '&:hover': {
            backgroundColor: indigo[700],
          },
        },
      }))(Button);
    return (
    <div style={{textAlign: "center"}}>
        <h3>How's lecture?</h3>
        <ColorButton onClick={() => ss(s + 1)} variant="contained" color='primary' className="btn">Slow down!</ColorButton>
        <ColorButton onClick={() => sl(l + 1)} variant="contained" color='primary' className='btn'>Speak louder!</ColorButton>
        <ColorButton onClick={() => sb(b + 1)} variant="contained" color='primary' className='btn'>Write bigger!</ColorButton>
        <Typography id="discrete-slider-small-steps" gutterBottom style={{paddingTop: 20}}>
        Comprehension
        </Typography>
        <div style={{width: 200, paddingLeft: "19%"}}><Slider
            defaultValue={5}
            step={1}
            marks
            min={0}
            max={10}
            valueLabelDisplay="auto"
            className="slider"
      /></div>
        
    </div>
    )
};

export default StudentFeedback;