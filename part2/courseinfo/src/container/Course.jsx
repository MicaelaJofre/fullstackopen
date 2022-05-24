import React from 'react';

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => parts.map(part => <p key={part.id}>{part.name} { part.exercises }</p>)

const Total = ({ parts }) => {
    const someMagicHere = parts.reduce((a, b) => a +=  b.exercises, 0)
    return <p>Total of {someMagicHere} exercises</p> 
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} /> 
        </div>

    )
}

export { Course }