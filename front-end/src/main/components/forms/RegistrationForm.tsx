import React, { useState } from "react";
import axios from "axios";
import { userServiceUrl } from "src/main/data/urls";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [callbackMessage, setCallbackMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .post(userServiceUrl, { name, surname, email, password })
      .then((response) => {
        if (response.data.success === "true") {
          setCallbackMessage("Użytkownik został zarejestrowany");
        } else {
          setCallbackMessage("Adres email jest już zajęty");
        }
      })
      .catch((error) => setError(error));
  };

  return (
    <div>
      <h1 className="text-center">Sign in</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="login-form-name">Name</label>
          <div className="input-group my-2">
            <input
              id="login-form-name"
              className="form-control"
              value={name}
              type="text"
              placeholder="Type name..."
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="login-form-surname">Surname</label>
          <div className="input-group my-2">
            <input
              id="login-form-surname"
              className="form-control"
              value={surname}
              type="text"
              placeholder="Type surname..."
              onChange={(event) => setSurname(event.target.value)}
            />
          </div>
        </div>
        <div className="input-group my-2">
          <label htmlFor="login-form-password">Password</label>
          <div className="input-group">
            <input
              id="login-form-password"
              className="form-control"
              value={email}
              type="text"
              placeholder="Type password..."
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="input-group my-2">
          <label htmlFor="login-form-email">Email</label>
          <div className="input-group">
            <input
              id="login-form-email"
              className="form-control"
              value={password}
              type="password"
              placeholder="Type email..."
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary" value="submit">
          Sign in
        </button>
      </form>
      {callbackMessage !== "" && (
        <h3 className="text-center">{callbackMessage}</h3>
      )}
      {error && <span>Wystąpił błąd podczas rejestracji</span>}
    </div>
  );
}
