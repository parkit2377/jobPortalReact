import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";

const logOut = () => {};

export default function Navbar() {
  return (
    <nav className="py-3 px-5 bg-[#032042] text-normal text-white rounded-xl">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="title flex items-center gap-2">
          <i className="fa-solid fa-briefcase p-1.5 bg-[#2A78D6] rounded-2xl"></i>
          <p className="font-semibold">JOB PORTAL</p>
        </div>

        <ul className="flex items-center justify-start gap-8 font-semibold">
          <li>
            <Link to={"/"}>Browse Jobs</Link>
          </li>

          <li>
            <Link to={"todo"}>Companies</Link>
          </li>

          <li>
            <button className="bg-[#2A78D6] w-24 h-8 rounded-xl hover:bg-[#2c66ad] cursor-pointer">
              Sign In
            </button>
          </li>
        </ul>
      </div>

      {/* Second row */}
      <div className="w-full mt-8 flex flex-col gap-3 tracking-wider ">
        <p className="text-5xl">Find your next opportunity</p>

        <p className="text-base ">
          Browse 100+ jobs from top companies across India
        </p>
      </div>

      <div className="py-3 my-3 rounded-xl searchbar flex items-center gap-2 bg-[#1A1A19] p-3.5 text-[#898781] text-lg">
        <div className="flex items-center gap-2.5 flex-1 ">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="w-full outline-none focus:outline-none" placeholder="Search"/>
        </div> 
        <div className="location flex items-center gap-2">
            <i class="fa-solid fa-location-crosshairs"></i>
            <p className="font-semibold">Location</p>
        </div>
        <button className="bg-[#2A78D6] w-24 h-8 rounded-xl hover:bg-[#2c66ad] cursor-pointer text-white ml-4">Search</button>
      </div>
    </nav>
  );
}
