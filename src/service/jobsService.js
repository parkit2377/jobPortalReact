import { api } from "../api/axios"

const getJobs = async(data = {}) => {
    const {salary , ...val} = data
    const res = await api.post('/api/v1/jobs/get-jobs' , val);
    // console.log(res);
    return res.data
}

export {getJobs}