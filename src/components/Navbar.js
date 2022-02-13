import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-200">
      <div className="md:container md:mx-auto lg:px-10 px-2 py-2">
        <div className="flex justify-between items-center">
          <Link className="text-2xl font-semibold" to="/">
            Firebase Drive
          </Link>
          <Link className="text-xl" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
