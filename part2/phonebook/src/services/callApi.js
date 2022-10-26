import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = (personsObject) => {    
    const request = axios.post(baseUrl, personsObject)
    return request.then(response => response.data)
}
const clear = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
const update = (id, personsObject) => {
    const request = axios.put(`${baseUrl}/${id}`, personsObject)
    return request.then(response => response.data)
}
export default {
    getAll,
    create, 
    clear,
    update
}