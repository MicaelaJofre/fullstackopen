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
            <table>
                <tbody>
                    <tr>
                        <Statistic prop={good} text='good' />
                    </tr>
                    <tr>
                        <Statistic prop={neutral} text='neutral' />
                    </tr>
                    <tr>
                        <Statistic prop={bad} text='bad' />
                    </tr>
                    <tr>
                        <Statistic prop={all} text='all' />
                    </tr>
                    <tr>
                        <Statistic prop={good / all - bad / all} text='average' />
                    </tr>
                    <tr>
                        <Statistic prop={(good / all) * 100} text='positive' porcent='%' />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export { Statistics }