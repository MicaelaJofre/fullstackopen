import React from 'react';

const Content = ({ part, exercises}) => {
    return(
    <div>
        <p>
            {part} {exercises}
        </p>
    </div>
    )
}

export { Content }