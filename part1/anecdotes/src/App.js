import React, { useState } from 'react';
import { Button } from './Button';



const App = () => {
    
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
    //crea un array con ceros
    const [points, setPoints] = useState(new Array(6).fill(0))
    //mayor cantidad de votos
    const [mostVotes, setMostVotes] = useState([])
    
    const copy = [...points]
    
    const handlePoints = () => {
        copy[selected] += 1
        setPoints([...copy])
        let m = Math.max(...copy);
        copy[selected] === m && setMostVotes([[selected],m])
                
    }
    return (
        <div>
            <h1>Anecdotes</h1>
                <p>{anecdotes[selected]}</p>
                <p>has {points[selected]} votes</p>
                <Button onClick={handlePoints} text='vote'/>
                <Button onClick={handleAnecdotes} text='next anecdote'/>

                {mostVotes.length !== 0
                ? <>
                    <h1>Anecdotes with most votes</h1>
                    <p>{anecdotes[mostVotes[0]]}</p>
                    <p>has {mostVotes[1]} votes</p>
                    </>
                : <></>    
                }

        </div>

    )
};
export { App }