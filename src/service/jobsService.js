import { api } from "../api/axios"

const getJobs = async(data = {}) => {
    const res = await api.get('/api/v1/jobs/get-jobs' ,  data);
    console.log(res);
    return res.data
}

export {getJobs}