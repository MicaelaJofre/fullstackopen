import React, { useState } from 'react';
import { Button } from './Button';
import { Content } from './Content';
import { Header } from './Header';
import { Total } from './Total';
import { Statistics } from './Statistics';
import './index.css';



const App = () => {
    /*1*/
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

    /*1.6*/
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

    /*1.12*/
    const [selected, setSelected] = useState(0)
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    
    const handleAnecdotes = () => {
        const min = 0;
        const max = 5;
        let number = Math.floor(Math.random() * (max - min + 1) + min);
        setSelected(number)
    }


    return (
        <div>
            <Header course={course.name} />

            <Content parts={course.parts} />

            <Total parts={course.parts} />


            <div>
                <h1>Comments</h1>
                <h2>give feedback</h2>
                <Button onClick={handleGood} text='good' />
                <Button onClick={handleNeutral} text='neutral' />
                <Button onClick={handleBad} text='bad' />
                <h2>statistics</h2>
                <Statistics all={all} good={good} bad={bad} neutral={neutral} />
            </div>


            <div className='anecdotes'>
                <h1>Anecdotes</h1>
                <p>{anecdotes[selected]}</p>
                <Button onClick={handleAnecdotes} text='next anecdotes '/>
            </div>
        </div>
    )
};
export { App }