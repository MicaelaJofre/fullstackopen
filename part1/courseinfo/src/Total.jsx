import React from 'react';

const Total = ({ parts }) => {
    
    let part = 0
    parts.forEach(element => {
        part += element.exercises
    });

    return(
    <div>
            <p>Number of exercises {part}</p>
    </div>
    )
}

export { Total }