import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 border-gray-300">
      <div className="md:container md:mx-auto lg:px-10 px-2 py-2">
        <div className="flex justify-between items-center">
          <Link className="text-2xl text-gray-700 hover:underline" to="/">
            Firebase Drive
          </Link>
          <Link className="text-xl text-gray-700" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
