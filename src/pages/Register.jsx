import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(
      registerUser({
        id: Date.now().toString(),
        orgName,
        password,
        email,
        role: "organization",
        approved: false,
      })
    );
    setOrgName("");
    setPassword("");
    setEmail("");
  };

  return (
    <section className="formContainer">
      <h2>Register Organization</h2>
      <input
        type="text"
        placeholder="Organization Name"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
      <p>
        If you already have an account, <NavLink to="/login">Login</NavLink>
      </p>
    </section>
  );
};

export default Register;
