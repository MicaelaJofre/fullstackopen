import { useState, useEffect } from "react"
import axios from 'axios'
import { Filter } from "./components/Filter"

function App() {

  const [countries, setCountries] = useState()

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  return (
    <div>
      <Filter countries={ countries } />
    </div>
  );
}

export default App;
