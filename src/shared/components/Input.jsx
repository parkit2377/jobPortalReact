import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { placeholder, type = "text", errors , icon, ...props },
  ref
) {
    
  return (
    <div>
        <div className="relative flex items-center w-full">
        <input
            ref={ref}
            {...props}
            type={type}
            placeholder={placeholder}
            className="
            w-full
            h-12
            px-4
            rounded-xl
            border border-white/10
            bg-white/5
            text-white
            text-sm
            outline-none
            transition-all
            duration-200
            placeholder:text-gray-500
            focus:border-blue-500/70
            focus:bg-white/[0.08]
            focus:ring-2
            focus:ring-blue-500/20
            "
        />

        {icon && (
            <span className="absolute right-4 text-gray-400 pointer-events-none">
            {icon}
            </span>
        )}
        </div>
        {errors && <p className="text-red-500">{errors?.message || ''}</p>}
    </div>
  );
});

export default Input;
