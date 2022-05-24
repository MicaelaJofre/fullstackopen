import React from 'react';

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => parts.map(part => <p key={part.id}>{part.name} { part.exercises }</p>)

const Total = ({ parts }) => {
    let part = 0
    parts.forEach(element => {
        part += element.exercises
    });
    return <p>Number of exercises {part}</p>
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