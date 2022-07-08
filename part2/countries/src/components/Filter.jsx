import React, { useState } from 'react';

const Filter = ({ countries }) => {

    const [filterCountrie, setFilterCountrie] = useState([])
    let search;
    const handleSearch = (e) => {

        setFilterCountrie([])
        search = e.target.value
        let res = []
        if (countries !== undefined) {
            
            if (search !== '') res = countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()) && c)
        }
        setFilterCountrie(res)
        
        console.log(filterCountrie);

    }

    return (
        <div>
            <label>Find countries</label>
            <input onKeyUp={handleSearch} />
            {
                filterCountrie.length > 10
                    ? <p>Too many matches, especify another filter</p>
                    : filterCountrie.map((countrie) => {
                        let languages = countrie.languages
                        if (filterCountrie.length === 1) {
                            return (
                                <div key={countrie.name.official}>
                                    <h2> {countrie.name.common}</h2>
                                    <p>Capital: {countrie.capital}</p>
                                    <p>Population: {countrie.population}</p>
                                    <h3>Languages</h3>
                                    {
                                        Object.values(languages).map(e =>
                                            <li>{ e }</li>
                                        )  
                                    }
                                    <br/>
                                    <img src={countrie.flags.png} alt='bandera' width='100px' />
                                </div>
                            )
                        } else {
                            return <p key={countrie.name.official}> {countrie.name.common}</p>
                        }
                    }) 
                
            }
            
        </div>
    )
}

export { Filter }