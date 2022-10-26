import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ countries }) => {

    const [filterCountrie, setFilterCountrie] = useState([])
    const [climate, setClimate] = useState()

    let search;
    
    const handleSearch = (e) => {

        setFilterCountrie([])
        search = e.target.value
        let res = []
        if (countries !== undefined) {
            
            if (search !== '') res = countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()) && c)
        }
        setFilterCountrie(res)
    }

    const handleShow = (e) => {

        let countrieShow = e.target.parentNode.firstChild.innerText
        setFilterCountrie(filterCountrie.filter(f => f.name.common.includes(countrieShow) && f))
    }

    useEffect(() => {

        let newCapital = filterCountrie.length === 1 ? filterCountrie[0].capital[0] : 'New York'
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: newCapital
        }
        axios
            .get('http://api.weatherstack.com/current', { params })
            .then(res => {
                setClimate(res.data)
            }).catch(error => {
                console.log(error);
            });
    }, [filterCountrie])
    
    return (
        <div>
            <label>Find countries</label>
            <input onKeyUp={handleSearch} />
            {
                filterCountrie.length > 10
                    
                    ? <p>Too many matches, especify another filter</p>

                    : filterCountrie.map(countrie => {

                        if (filterCountrie.length === 1) {
                            return (
                                <div key={countrie.name.official}>
                                    <h2> {countrie.name.common}</h2>
                                    <p>Capital: {countrie.capital}</p>
                                    <p>Population: {countrie.population}</p>
                                    <h3>Languages</h3>
                                    {
                                        Object.values(countrie.languages).map((e, index) =>
                                            <li key={index}>{ e }</li>
                                        )  
                                    }
                                    <br/>
                                    <img src={countrie.flags.png} alt='bandera' width='100px' />

                                    <div key={climate.current.observation_time}>
                                        <h3>Wheater in {climate.location.name}</h3>
                                        <p>Temperature: {climate.current.temperature} Celcius</p>
                                        <img src={climate.current.weather_icons} alt="clima" />
                                        <p>Wind: {climate.current.wind_speed} mph {climate.current.wind_dir} </p>
                                    </div>
                                </div>
                                
                            )
                            
                            
                        } else {
                            return <div key={countrie.altSpellings}>
                                        <span>{countrie.name.common}</span>
                                        <button onClick={handleShow}>Show</button>
                                    </div>
                        }
                    }) 
                
            }
            
            
        </div>
    )
}

export { Filter }