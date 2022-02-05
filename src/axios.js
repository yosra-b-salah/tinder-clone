import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tinder4backend.herokuapp.com/"
})

export default instance;