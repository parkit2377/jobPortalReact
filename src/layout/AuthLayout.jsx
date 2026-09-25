// import React from 'react'
// import { Outlet } from 'react-router-dom';

// export default function Auth() {
//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-[#151515]">

//         <div className="flex flex-col items-center form w-1/3 py-5 px-8  bg-transparent backdrop-brightness-70 rounded-2xl border-gray-200 border-2">
//           <div>
//         <h1 className='text-white text-2xl font-bold tracking-wider'>Search Jobs</h1>
//       </div>
//           <Outlet/>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      py-10
      bg-[#0b0f19]
      relative
      overflow-hidden
    "
    >
      {/* Background glow */}
      <div
        className="
        absolute
        w-96
        h-96
        bg-blue-600/20
        rounded-full
        blur-3xl
        -top-32
        -left-32
      "
      />

      <div
        className="
        absolute
        w-96
        h-96
        bg-indigo-600/20
        rounded-full
        blur-3xl
        -bottom-32
        -right-32
      "
      />

      {/* Card */}
      <div
        className="
        relative
        w-full
        max-w-xl
        p-6
        sm:p-8
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        shadow-2xl
        shadow-black/40
      "
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="
            inline-flex
            items-center
            justify-center
            w-14
            h-14
            mb-4
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            to-indigo-600
            shadow-lg
            shadow-blue-500/20
          "
          >
            <span className="text-2xl">💼</span>
          </div>

          <h1
            className="
            text-3xl
            font-bold
            tracking-tight
            text-white
          "
          >
            Search Jobs
          </h1>

          <p
            className="
            mt-2
            text-sm
            text-gray-500
          "
          >
            Create your account and find your next opportunity.
          </p>
        </div>

        {/* Page content */}
        <Outlet />
      </div>
    </div>
  );
}
