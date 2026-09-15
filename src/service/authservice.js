import { api } from "../api/axios"

const loginService = async(credential) => {
    const res = await api.post('/api/v1/users/login' , credential);
    console.log(res.data);
    return res.data;
}


export {loginService}