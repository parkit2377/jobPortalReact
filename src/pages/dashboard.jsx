import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getJobs } from '../service/jobsService'
import JobCard from '../shared/components/JobCard'

export default function Dashboard() {

    const {isLoading , isFetching , data , isError} = useQuery({
        queryKey : ['jobs'],
        queryFn : getJobs,
        staleTime : 5 * 60 * 1000
    })


  return (
    <>
    <div className='flex flex-col gap-5 my-4'>
        {data?.data.map(i => {
            return <JobCard details={i} key={i?._id}/>
                
        })}
    </div>
    </>
  )
}

