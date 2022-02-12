import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const [error, setError] = useState("");
  const { signout, currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await signout();
      navigate("/signin");
    } catch (error) {
      setError("Failed to signout");
    }
  }

  return (
    <div>
      {error && console.log(error)}
      <h1>Profile</h1>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <Link to="/update-profile">Update Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
