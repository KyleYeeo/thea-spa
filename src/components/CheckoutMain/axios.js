import axios from "axios";

const instance = axios.create({
    baseURL: 'https://spa-backend-b62l.onrender.com'
})

export default instance;
