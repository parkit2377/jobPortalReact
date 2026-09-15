import React, { forwardRef } from 'react'

export default function Button({
    type='button',
    onClick,
    size,
    children,
    border,
    color
} ) {
  return (
    <>
         <button type={type} onClick={onClick} className={`px-2.5 cursor-pointer  rounded-3xl border-gray-200 border-${border || '2'} bg-[${color ||'white'}] py-2.5 text-${size || 'xl'} font-semibold hover:-translate-y-2 duration-300`}>{children}</button>
    
    </>
  )
}