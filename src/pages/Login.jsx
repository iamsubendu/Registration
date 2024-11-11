import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };
  return (
    <section className="formContainer">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        If you don't have an account, <NavLink to="/register">Register</NavLink>
      </p>
    </section>
  );
};

export default Login;
