import React, { useState } from 'react'

const Filter = ({persons}) => {

    const [filter, setFilter] = useState([])

    const handleSearch = (e) => {

        setFilter([])
        let search = e.target.value
        let res = []

        if (search !== '') res = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) && person)

        setFilter(res)
        
    }
    
    
    return (
        <>
            <div>
                <label>Filter shown with:</label>
                <input
                    name= 'name'
                    onKeyUp={handleSearch}
                />
            </div>
            <div>
                {
                    filter.map((p, index) => <p key={index}>{p.name} </p>)
                }
            </div>
        </>
    )
}

export { Filter }