import React, { useState, useEffect } from 'react'
import dataService from './services/callApi'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import { PersonsForm } from './components/PersonsForm'

const App = () => {
  const [notes, setNotes] = useState() 

  useEffect(() => {
    dataService
      .getAll()
      .then(response => setNotes(response))
      .catch(error => console.log('Error', error.message))
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
