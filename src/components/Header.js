import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>React Firebase Auth</h1>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
    </header>
  );
}
