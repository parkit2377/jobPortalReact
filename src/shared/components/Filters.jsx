import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Filters({handleFilterChange , filter , setFilter}) {
    
    

  return (
    <>
        <div className=' bg-[#15191F] text-white  rounded-xl p-4'>
            <p className=' tracking-wider text-gray-400'>Filters</p>
            <form >
            <div className='mt-5'>
                <label htmlFor="" className='text-gray-300 '>JOB TYPE</label>
                <div className='flex items-start flex-col gap-3 mt-2 ml-3 text-sm'>
                    <div className='flex items-center gap-2'>
                        <input value={"full-time"} type="checkbox" name="jobType" id="" onChange={(e) => handleFilterChange(e)}/>
                        <label htmlFor="">Full-Time</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"part-time"} type="checkbox" name="jobType" id="" onChange={(e) => handleFilterChange(e)}/>
                        <label htmlFor="">Part-Time</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"contract"} type="checkbox" name="jobType" id="" onChange={(e) => handleFilterChange(e)}/>
                        <label htmlFor="">Contract</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"internship"} type="checkbox" name="jobType" id="" onChange={(e) => handleFilterChange(e)}/>
                        <label htmlFor="">Intership</label>
                    </div>
                </div>
            </div>
            
            <div className='mt-5'>
                <label htmlFor="" className='text-gray-300 '>Experiance</label>
                <div className='flex items-start flex-col gap-3 mt-2 ml-3 text-sm'>
                    <div className='flex items-center gap-2'>
                        <input value={"0-1"} type="checkbox" name="yearOfExp" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">0-1</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"1-2"} type="checkbox" name="yearOfExp" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">1-2</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"2-5"} type="checkbox" name="yearOfExp" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">2-5</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"5-8"} type="checkbox" name="yearOfExp" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">5-8</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"8+"} type="checkbox" name="yearOfExp" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">8+</label>
                    </div>
                </div>
            </div>
            
            
            <div className='mt-5'>
                <label htmlFor="" className='text-gray-300 uppercase'>Salary Range</label>
                <div className='flex items-start flex-col gap-3 mt-2 ml-3 text-sm'>
                    <div className='flex items-center gap-2'>
                        <input value={"1000-10000"} type="checkbox" name="salary" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">0-1</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"10000-100000"} type="checkbox" name="salary" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">1-2</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"100000-200000"} type="checkbox" name="salary" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">2-5</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input value={"200000-300000"} type="checkbox" name="salary" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">5-8</label>
                    </div>
                    {/* <div className='flex items-center gap-2'>
                        <input value={"internship"} type="checkbox" name="jobType" id="" onChange={(e) => handleFilterChange(e)} />
                        <label htmlFor="">8+</label>
                    </div> */}
                </div>
            </div>
            </form>
        </div>
    </>
  )
}
