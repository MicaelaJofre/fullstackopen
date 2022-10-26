import React from 'react'
import dataService from '../services/callApi'

const Persons = ({ persons, setPersons, setMessageNotification, messageNotification }) => {

    const handleDelete = (deletePerson) => {
        window.confirm(`Delete ${deletePerson.name}`)
            && dataService
                .clear(deletePerson.id)
                .then(res => setPersons(persons.filter(person => person.id !== deletePerson.id)))
                .catch(error => {
                    persons.forEach(person => {
                        setMessageNotification({ message: `Information of '${person.content}' was already removed from server` , status: 'error'})
                        setTimeout(() => {
                            setMessageNotification({ message: null, status: null })
                        }, 5000)
                        console.log(messageNotification.message)
                    })
                })
    }

    return (
        <div>
            {
                persons?.map((person, index) => {
                    return (
                        <div key={index}>
                            <span>{person.name}  {person.phone}  </span>
                            <button onClick={(() => handleDelete(person))}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export { Persons }