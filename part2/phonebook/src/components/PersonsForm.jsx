import axios from 'axios'
import React, { useState } from 'react'

const PersonsForm = ({ persons, setPersons}) => {
    
    const [newName, setNewName] = useState('')
    const [phone, setPhone] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const personsObject = {
            name: newName,
            phone
        }
        
        let exist = false
        
        persons.forEach(person =>person.name.toLowerCase() === personsObject.name.toLowerCase() && (exist = true));
        exist
            ? alert(`${personsObject.name} is already added to phonebook`)
            : axios
                .post('http://localhost:3001/persons', personsObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                })
            
        
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