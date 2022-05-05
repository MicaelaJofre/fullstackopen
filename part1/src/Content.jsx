import React from 'react';
import { Part } from './Part';

const Content = ({parts}) => {
    

    return (
        <div>
            {parts.map((part, index) => <Part key={index} parts={part} />)}
        </div>
    )
}

export { Content }