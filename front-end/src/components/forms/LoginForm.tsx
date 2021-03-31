import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassowrd] = useState("");

  return (
    <div>
      <h1 className="text-center">Log In</h1>
      <div>
        <label htmlFor="login-form-username">Username</label>
        <div className="input-group my-2">
          <input
            id="login-form-username"
            className="form-control"
            value={username}
            type="text"
            placeholder="Type username..."
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
      </div>
      <div className="input-group my-2">
        <label htmlFor="login-form-password">Password</label>
        <div className="input-group">
          <input
            id="login-form-password"
            className="form-control"
            value={password}
            type="password"
            placeholder="Type password..."
            onChange={(event) => setPassowrd(event.target.value)}
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => console.log({ username, password })}
      >
        Log in
      </button>
    </div>
  );
}
