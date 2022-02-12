import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function ForgotPassword() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setLoading(false);
      setMessage("Check your inbox to reset your password");
    } catch (error) {
      setError("Failed to Reset Password");
      setLoading(false);
    }
  }

  return (
    <div className="forgot-password">
      {error && console.log(error)}
      {message && console.log(message)}
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} required></input>
        <button disabled={loading} type="submit">
          Reset Password
        </button>
      </form>
      <div>
        <Link to="/signin">Signin</Link>
      </div>
    </div>
  );
}
