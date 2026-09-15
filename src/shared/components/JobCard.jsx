import React from 'react'
import Button from './Button'

export default function JobCard({details}) {
    const skills = ['mongo' , 'react' , 'angular']
  return (
    <>
        <div className="card p-4 rounded-xl bg-[#1A1A19] text-white mx-5">
            <div className='flex items-center justify-between p-4'>
                <div className="info">
                    <p className='text-xl'>{details?.title}</p>
                    <p className='ml-1'>{details?.recruiterId?.companyName}</p>
                </div>
                <div className="salary text-lg ">
                    <p>{details?.salary?.currency} {details?.salary?.min}-{details?.salary?.max}</p>
                </div>
            </div>
            <div className="exp flex items-center gap-3 my-3 ml-5 text-lg">
                <p className='flex items-center gap-2.5'><i class="fa-solid fa-briefcase"></i> {details?.yearOfExp}</p>
                <p>|</p>
                <p className='flex items-center gap-2.5'><i class="fa-solid fa-location-crosshairs"></i> {details?.location}</p>
            </div>
            <div className="description">
                <p className='py-2'>{details?.description}</p>
            </div>

            <div className="keyskills flex items-center gap-4">
                {details?.keySkills.map(s => <p className='px-2.5 py-1 rounded-2xl bg-[#151515] border border-'>{s}</p>)}
            </div>
            <div className='flex items-center justify-between'>
                <div className="applicationDetails flex items-center gap-8 my-5 ml-3">
                    {/* <div className='flex items-center gap-3'>
                        <i class="fa-regular fa-clock"></i>
                        <p>Full-time</p>
                    </div> */}
                    <div className='flex items-center gap-3'>
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>2 days ago</p>
                    </div>
                    {/* <div className='flex items-center gap-3'>
                        <i class="fa-solid fa-users"></i>
                        <p>100 Applications</p>
                    </div> */}
                    </div>
                    <Button color={'#2A78D6'} type='button' border={'0'} size={'sm'}>Apply Job</Button>
                    {/* <button className='bg-[#2A78D6] p-2.5 rounded-xl'>Apply </button> */}
            </div>
        </div>
    </>
  )
}
