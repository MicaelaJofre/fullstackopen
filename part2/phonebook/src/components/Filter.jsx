import React, { useState } from 'react'

const Filter = ({persons}) => {

    const [person, setPerson] = useState([])

    const handleSearch = (e) => {

        setPerson([])
        let search = e.target.value
        let res = []

        if (search !== '') res = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) && person)

        setPerson(res)
        
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
                    person.map((p, index) => <p key={index}>{p.name} </p>)
                }
            </div>
        </>
    )
}

export { Filter }