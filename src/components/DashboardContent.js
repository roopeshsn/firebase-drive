import React from "react";
import Sidebar from "./Sidebar";

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto,1fr] md:grid-cols-[16rem,1fr] md:grid-rows-1">
      <Sidebar />
      <div className="border-2 border-red-500">Dashboard</div>
    </div>
  );
}
