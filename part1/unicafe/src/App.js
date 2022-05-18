import React, { useState } from 'react';
import { Button } from './Button';
import { Statistics } from './Statistics';



const App = () => {
    
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
          <h1>Comments</h1>
                <h2>give feedback</h2>
                <Button onClick={handleGood} text='good' />
                <Button onClick={handleNeutral} text='neutral' />
                <Button onClick={handleBad} text='bad' />
                <h2>statistics</h2>
                <Statistics all={all} good={good} bad={bad} neutral={neutral} />
        </div>

    )
};
export { App }