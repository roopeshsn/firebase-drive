import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function UpdateProfile() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { currentUser, emailUpdate, passwordUpdate } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];

    if (emailRef.current.value !== currentUser.email) {
      promises.push(emailUpdate(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(passwordUpdate(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="update-profile">
      <h2>Update Profile</h2>
      {error && console.log(error)}
      {console.log()}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          ref={emailRef}
          defaultValue={currentUser.email}
          required
        ></input>
        <label>Password</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Leave blank to keep the same"
        ></input>
        <label>Password Confimation</label>
        <input
          type="password"
          ref={passwordConfirmationRef}
          placeholder="Leave blank to keep the same"
        ></input>
        <button disabled={loading} type="submit">
          Update Profile
        </button>
      </form>
      <Link to="/dashboard">Cancel</Link>
    </div>
  );
}
