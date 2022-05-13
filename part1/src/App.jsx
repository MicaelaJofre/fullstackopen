import React, { useState } from 'react';
import { Button } from './Button';
import { Content } from './Content';
import { Header } from './Header';
import { Total } from './Total';
import { Statistics } from './Statistics';



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
                <Statistics all={all} good={good} bad={bad} neutral={neutral} />
            </div>
        </div>
    )
};
export { App }