import React from "react";
import Navbar from "../shared/components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
        <div className="p-2 ">
            <Navbar />
            <Outlet />
        </div>
    </>
  );
}