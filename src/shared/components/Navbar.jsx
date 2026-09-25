import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const auth = useSelector(state => state.auth.isLoggedIn);
  const {register , handleSubmit} = useForm();
  const navigate = useNavigate();


  const searchJob = (data) => {
    // console.log(data);
    navigate(`/job?title=${data?.search || ''}&location=${data?.location || ''}`)  
  }

  return (
    <nav className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-[#032042]
      px-5
      py-4
      text-white
      shadow-lg
      shadow-black/20
    ">

      {/* Top navigation */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-[#2A78D6]
            shadow-md
            shadow-blue-500/20
          ">
            <i className="fa-solid fa-briefcase text-sm"></i>
          </div>

          <span className="text-sm font-bold tracking-wider">
            JOB PORTAL
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="
              text-sm
              font-medium
              text-gray-300
              transition-colors
              hover:text-white
            "
          >
            Browse Jobs
          </Link>

          <Link
            to="/todo"
            className="
              text-sm
              font-medium
              text-gray-300
              transition-colors
              hover:text-white
            "
          >
            Companies
          </Link>

          {!auth && <Link to={'/auth/sign-in'}>
            <button
              className="
                rounded-lg
                bg-[#2A78D6]
                px-5
                cursor-pointer
                py-2
                text-sm
                font-semibold
                transition-all
                duration-200
                hover:bg-[#3988e5]
                hover:shadow-lg
                hover:shadow-blue-500/20
                active:scale-95
              "
            >
              Sign In
            </button>
          </Link>}

        </div>
      </div>


      {/* Hero */}
      <div className="mt-12 max-w-2xl">

        <h1 className="
          text-4xl
          font-bold
          tracking-tight
          sm:text-5xl
        ">
          Find your next
          <span className="text-[#4b9af0]">
            {" "}opportunity
          </span>
        </h1>

        <p className="
          mt-4
          text-sm
          leading-6
          text-gray-400
          sm:text-base
        ">
          Browse 100+ jobs from top companies across India
          and find the opportunity that's right for you.
        </p>

      </div>


      {/* Search */}
      <form onSubmit={handleSubmit(data => searchJob(data))}>
        <div className="
          mt-8
          flex
          flex-col
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-[#101820]
          p-3
          md:flex-row
          md:items-center
        ">

          {/* Search input */}
          <div className="
            flex
            flex-1
            items-center
            gap-3
            rounded-xl
            px-3
          ">
            <i className="
              fa-solid
              fa-magnifying-glass
              text-gray-500
            " />

            <input
              type="text"
              {...register('search')}
              placeholder="Search jobs, skills or companies"
              className="
                w-full
                bg-transparent
                py-2
                text-sm
                text-white
                outline-none
                placeholder:text-gray-500
              "
            />
          </div>


          {/* Location */}
          <div className="
            flex
            items-center
            gap-3
            border-t
            border-white/10
            px-3
            py-3
            text-sm
            text-gray-400
            md:border-l
            md:border-t-0
          ">
            <i className="fa-solid fa-location-crosshairs text-[#2A78D6]" />

            {/* <span>
              Location
            </span> */}
            <input
              type="text"
              {...register('location')}
              placeholder="Search by location"
              className="
                w-full
                bg-transparent
                py-2
                text-sm
                text-white
                outline-none
                placeholder:text-gray-500
              "
            />
          </div>


          {/* Search button */}
          <button type="submit" className="
            rounded-xl
            bg-[#2A78D6]
            px-7
            py-2.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-[#3988e5]
            hover:shadow-lg
            hover:shadow-blue-500/20
            active:scale-95
          ">
            Search
          </button>

        </div>
      </form>

    </nav>
  );
}
