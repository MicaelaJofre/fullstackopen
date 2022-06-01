import React, { useState } from 'react'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import { PersonsForm } from './components/PersonsForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      phone: '39-44-5329993'
    },
    {
      name: 'Ada Lovelace',
      phone: '39-44-5323523'
    }, {
      name: 'Dan Abramov',
      phone: '12-43-234345'
    }, {
      name: 'Mary Poppendieck',
      phone: '39-23-6423122'
    }
  ]) 

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={ persons }/>
      <form>
        <h2>Add a new</h2>
        <PersonsForm persons={persons} setPersons={ setPersons }/>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export  {App};
