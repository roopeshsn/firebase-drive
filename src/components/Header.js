import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="text-2xl">Firebase Drive</h1>
      <div className="flex gap-0.5">
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
      </div>
    </header>
  );
}
