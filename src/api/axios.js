import axios from "axios";

export const api = axios.create({
    timeout : 10000,
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json"
    }
})


api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config
})



