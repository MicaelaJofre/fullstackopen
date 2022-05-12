import React from 'react';

const Statistic = ({prop, text}) => {
    return (
        <div>
            <p>{ text }: { prop }</p>
        </div>
    )
}

export { Statistic }