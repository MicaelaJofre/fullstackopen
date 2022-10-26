import React, { useState, useEffect } from 'react'
import dataService from './services/callApi'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import { PersonsForm } from './components/PersonsForm'
import { Notification } from './components/Notification'
import './main.css'

const App = () => {
  const [persons, setPersons] = useState() 
  const [messageNotification, setMessageNotification] = useState({message:null, status:null})


  useEffect(() => {
    dataService
      .getAll()
      .then(response => setPersons(response))
      .catch(error => alert(error.message))
  }, [])

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification messageNotification={messageNotification}  />
      <Filter persons={ persons }/>
      <form>
        <h2>Add a new</h2>
        <PersonsForm persons={persons} setPersons={ setPersons } setMessageNotification={ setMessageNotification }/>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} setMessageNotification={ setMessageNotification } messageNotification = { messageNotification } />
    </div>
  )
}

export  {App};
