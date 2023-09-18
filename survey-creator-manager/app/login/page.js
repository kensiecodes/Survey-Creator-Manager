"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!userName || !password) {
      setError("Both username and password are required.");
      return;
    }
    console.log(`Username: ${userName} \nPassword: ${password}`);
    setPassword("");
    setUserName("");
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-5 text-center">
        {/* this is a test commit message */}
        <h2>Login</h2>
      </div>
      <div className="input-group mb-4">
        <label htmlFor="userName" className="block mb-2">
          Username:
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          className="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="passwordInput">Password:</label>
        <input
          type="password"
          id="passwordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="passwordInput"
          className="input"
        />
      </div>
      <div className="submit-group">
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="mb-4">
          Login
        </button>
        <br />
        <p>
          Don't have an account?{" "}
          <Link href="/signup" className="text-black underline">
            Sign up
          </Link>
        </p>
        <p>
          Forgot your password?{" "}
          <Link href="/reset" className="text-black underline">
            Reset password
          </Link>
        </p>
      </div>
    </form>
  );
}
