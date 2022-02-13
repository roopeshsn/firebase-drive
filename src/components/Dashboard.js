import React from "react";
import DashboardContent from "./DashboardContent";
import DropdownMenu from "./DropdownMenu";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr] grid-cols-1">
      <Navbar />
      <DashboardContent />
    </div>
  );
}
