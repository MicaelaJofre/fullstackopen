import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { Content } from './Content';
import { Display } from './Display ';
import { Header } from './Header';
import { Total } from './Total';
import { History } from "./History";





const App = () => {


  const [counter, setCounter] = useState(0)


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <Header course={course.name} />
      
      <Content parts={course.parts} />
      
      <Total parts={course.parts} />
      
      
      
      <div>
        <h2>give feedback</h2>
        <Button onClick={()=>{setGood(good + 1)}} text='good' />
        <Button onClick={()=>{setNeutral(neutral + 1)}} text='neutral' />
        <Button onClick={()=>{setBad(bad + 1)}} text='bad' />
        <h2>statistics</h2>
        {<History prop={good} text='good' />}
        {<History prop={neutral} text='neutral' />}
        {<History prop={bad} text='bad'/>}
      </div>
    </div>
  )
};

ReactDOM.render( <App/> , document.getElementById('root'))