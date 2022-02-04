import axios from 'axios';

const instance = axios.create({
    baseUrl:"https://tinder4backend.herokuapp.com/"
})

export default instance;