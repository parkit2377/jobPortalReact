import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Auth() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#151515]">
        
      
        <div className="flex flex-col items-center form w-[30%] py-5 px-8  bg-transparent backdrop-brightness-70 rounded-2xl border-gray-200 border-2">
          <div>
        <h1 className='text-white text-2xl font-bold tracking-wider'>Search Jobs</h1>
      </div>
          <Outlet/>
        </div>
      </div>
    </>
  );
}
