import React, { forwardRef } from 'react'

export default  forwardRef(function Input({
    placeholder,
    type,
    icon,
    refi,
    ...props
} , ref) {
  return (
    <>
        <div className='rounded-3xl flex items-center gap-2 border-gray-200 outline none border-2 w-full'>
            <input ref={ref} {...props} placeholder={placeholder} type={type} className='py-2 text-white bg-transparent text-lg w-[92%] ml-[5%] outline-none placeholder-white placeholder:text-xl placeholder:font-light'/>
                    
             {icon}       
        </div>
    
    </>
  )
})