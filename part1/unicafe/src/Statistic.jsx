import React from 'react';

const Statistic = ({ prop, text, porcent}) => {
    return (
        <>
            <td>{text}:</td>
            <td>{prop} {porcent} </td>
        </>
    )
}

export { Statistic }