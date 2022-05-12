import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { Content } from './Content';
import { Display } from './Display ';
import { Header } from './Header';
import { Total } from './Total';
import { History } from "./History";



const Statistics = ({all, good, bad}) => {
  return (
    <div>
      <p>average: {!all ? 0 : good / all - bad / all}</p>
      <p>positive: {!all ? 0 : (good/all)*100} %</p>
    </div>
  )
}

const App = () => {

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
  const [all, setAll] = useState(0)
  
  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1)
  }
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1)
  }

  return (
    <div>
      <Header course={course.name} />
      
      <Content parts={course.parts} />
      
      <Total parts={course.parts} />
      
      
      
      <div>
        <h2>give feedback</h2>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <h2>statistics</h2>
        <History prop={good} text='good' />
        <History prop={neutral} text='neutral' />
        <History prop={bad} text='bad' />
        <History prop={all} text='all' />
        <Statistics all={all} good={good} bad={ bad}/>
      </div>
    </div>
  )
};

ReactDOM.render( <App/> , document.getElementById('root'))