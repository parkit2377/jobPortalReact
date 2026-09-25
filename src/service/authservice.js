import { api } from "../api/axios"

const loginService = async(credential) => {
    const res = await api.post('/api/v1/users/login' , credential);
    // console.log(res.data);
    return res.data;
}

const signInService = async(data) => {
    const res = await api.post('/api/v1/users/register' , data);
    // console.log(res);
    return res.data;
    
}

const refreshService = async() => {
    const res = await api.get('/api/v1/users/refresh');
    // console.log(res);
    return res?.data;
}


export {loginService , signInService , refreshService}