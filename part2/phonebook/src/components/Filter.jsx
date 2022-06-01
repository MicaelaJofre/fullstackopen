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
    
    
    console.log(person);
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

/* let people = []
persons.forEach(person => {


    if (person.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        people = { ...people, name: person.name }

        console.log(people.name);

        setSearch(search.concat(...search, { name: people.name }))
    }

});
console.log(search); */