import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography, Paper, CssBaseline } from '@material-ui/core';
import axios from 'axios';
import token from './config/config.js';


const Answer = (props) => {
  const [isHelpful, setIsHelpful] = useState(false);

  //format Date function
  const handleHelpful = (e) => {
    console.log('clicked');
  }

  // NEED TO GET ANSWER ID

// Logic for marking an answer as helpful
const markAnswerHelpful = (e) => {
  const queryParam = props.answer.answer_id;
  const config = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${queryParam}/helpful`,
    headers: {
      Authorization: token,
      ContentType: 'application/json'
    },
    data: null
  }
  if (!isHelpful) {
    console.log('mark this as helpful');
    axios(config)
      .then((result) => {
        setIsHelpful(true);
      })
      .catch((err) => {
        console.error("Error marking as helpful: ", error);
      })
  }
};


  return (
      <React.Fragment>
        <Typography>A: {props.answer.body} </Typography>
        <Typography variant="overline">By {props.answer.answerer_name}  | {props.answer.date.slice(0, 10)} | helpful  <span onClick={markAnswerHelpful}><u>yes</u></span> ({isHelpful ? props.answer.helpfulness + 1 : props.answer.helpfulness}) | <span><u>report</u></span></Typography>
      </React.Fragment>
  )
};


export default Answer;
