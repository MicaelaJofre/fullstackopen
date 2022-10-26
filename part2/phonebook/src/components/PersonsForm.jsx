import React, { useState } from 'react'
import dataService from '../services/callApi'

const PersonsForm = ({ persons, setPersons, setMessageNotification }) => {

    const [newName, setNewName] = useState('')
    const [phone, setPhone] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const personsObject = {
            name: newName,
            phone
        }

        let id = 0;
        persons.forEach(person => {
            person.name.toLowerCase() === personsObject.name.toLowerCase()
                && (id = person.id)
        })
        id
            ? window.confirm(`${personsObject.name} is already added to phonebook, replace the old number with  a new one?`)
            && dataService
                .update(id, personsObject)
                .then(response => {
                    setPersons(persons.map(person => {
                        setMessageNotification({ message: `The number of the person '${person.name}' has been changed.` , status: 'message'})
                        setTimeout(() => {
                            setMessageNotification({ message: null, status: null })
                        }, 5000)
                        return person.id !== id ? person : response
                        }))
                })
                .catch(error => console.log(error.message))
            : dataService
                .create(personsObject)
                .then(response => {
                    setPersons(persons.concat(response))
                    persons.forEach(person => {
                        setMessageNotification({ message: `Added' ${person.name}'.` , status: 'message'})
                        setTimeout(() => {
                            setMessageNotification({message: null, status: null})
                        }, 5000)
                    })
                })
                .catch(error => console.log(error.message))


        setNewName('')
        setPhone('')
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleNewName = (e) => {
        setNewName(e.target.value)
    }

    return (
        <>
            <div>
                <label>Name:</label>
                <input
                    value={newName}
                    onChange={handleNewName}
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    value={phone}
                    onChange={handlePhone}
                />
            </div>
            <div>
                <button
                    type="submit"
                    onClick={handleSubmit}>
                    add</button>
            </div>
        </>
    )
}

export { PersonsForm }