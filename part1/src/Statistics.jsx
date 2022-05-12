import React from 'react';
import { Statistic } from './Statistic';

const Statistics = ({ all, good, bad, neutral }) => {
    if (all === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <div>
            <Statistic prop={good} text='good' />
            <Statistic prop={neutral} text='neutral' />
            <Statistic prop={bad} text='bad' />
            <Statistic prop={all} text='all' />
            <Statistic prop={good / all - bad / all} text='average'/>
            <Statistic prop={(good / all) * 100} text='positive'/>
        </div>
    )
}

export { Statistics }