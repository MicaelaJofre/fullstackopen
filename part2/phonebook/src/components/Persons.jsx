import React from 'react';

const Persons = ({persons}) => {
    return (
        <>
            <div>
                {
                    persons.map((person, index) => <p key={index}>{person.name}  {person.phone}</p>)
                }
            </div>
        </>
    )
}

export { Persons }