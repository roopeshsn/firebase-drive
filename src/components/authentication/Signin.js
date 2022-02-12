import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Signin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to signin");
      setLoading(false);
    }
  }

  return (
    <div className="signin">
      {error && console.log(error)}
      {console.log(currentUser)}
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} required></input>
        <label>Password</label>
        <input type="password" ref={passwordRef} required></input>
        <button disabled={loading} type="submit">
          Signin
        </button>
      </form>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <p>
        Not Registered?<Link to="/signup"> Signup</Link>
      </p>
    </div>
  );
}
