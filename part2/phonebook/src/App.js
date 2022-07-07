import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import { PersonsForm } from './components/PersonsForm'

const App = () => {
  const [ notes, setNotes ] = useState() 

  useEffect(() => {
    
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setNotes(response.data)
      })

  }, [])
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={ notes }/>
      <form>
        <h2>Add a new</h2>
        <PersonsForm persons={notes} setPersons={ setNotes }/>
      </form>
      <h2>Numbers</h2>
      <Persons persons={notes}/>
    </div>
  )
}

export  {App};
