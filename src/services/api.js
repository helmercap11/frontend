import axios from 'axios';

// conexão com a API 
const api = axios.create({
    baseURL: 'https://helmbackend.herokuapp.com'
});


export default api;