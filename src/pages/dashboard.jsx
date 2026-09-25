import { useQuery } from '@tanstack/react-query'
import React , { useEffect, useState } from 'react'
import { getJobs } from '../service/jobsService'
import JobCard from '../shared/components/JobCard'
import Login from './auth/Login'
import { Link, useSearchParams } from 'react-router-dom'
import Filters from '../shared/components/Filters'
import { refreshService } from '../service/authservice'

export default function Dashboard() {

    const [searchParam] = useSearchParams();
    // const searchTitle = searchParam.get('title');
    const searchTitle = Object.fromEntries(searchParam.entries());
    const [filter , setFilter] = useState({
        yearOfExp : [],
        salary : [],
        jobType : []
    })

    // useEffect(() => {
    //     console.log(searchTitle);
        
        
    // }, [filter ,searchTitle])

    const handleFilterChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFilter(prev => {
            const updated = prev[name].includes(value) ? prev[name].filter(i => i != value) : [...prev[name] , value]
            return {...prev , [name] : updated}
        })
    }

    const {isLoading , isFetching , data , isError} = useQuery({
        queryKey : ['jobs' , filter , searchTitle],
        queryFn : () => getJobs({...filter  , ...searchTitle}),
        staleTime : 5 * 60 * 1000
    }) 


    const getJobDetails = () => {
        
    }



    // if(isLoading)return <p className='text-xl text-red-500'>LOADING...</p>
    const refrsh = async() => {
        const res = await refreshService();
        console.log(res);
        
    }

  return (
    <>
    <button onClick={refrsh}>refresh</button>
    <div className='grid grid-cols-12 gap-2.5 my-4 relative'>
        <div className='col-span-2 sticky top-4 self-start'>
            <Filters filter={filter} setFilter={setFilter} handleFilterChange={handleFilterChange}/>
        </div>
        {(isLoading || isFetching) && <p className='text-xl text-red-500'>LOADING...</p>}
        {!isLoading && !isFetching &&<div className='flex flex-col gap-4 col-span-10'>
            
            {data?.data.map(i => <div key={i?._id} onClick={getJobDetails}><JobCard details={i} /></div>)}
        </div>}
    </div>
    </>
  )
}

