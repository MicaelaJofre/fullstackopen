import React, { useState } from 'react'

const PersonsForm = ({ persons, setPersons}) => {
    
    const [newName, setNewName] = useState('')
    const [phone, setPhone] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const newPerson = {
            name: newName,
            phone
        }
        
        for (let i = 0; i < persons.length; i++) {

            if (newPerson.name.toUpperCase() === persons[i].name.toUpperCase()) {

                alert(`${persons[i].name} is already added to phonebook`)
                setNewName('')
                setPersons([...persons])

            } else {
                
                setPersons(persons.concat(newPerson))
                setNewName('')
                setPhone('')
            }
        }
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