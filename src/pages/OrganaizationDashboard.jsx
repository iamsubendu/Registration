import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../redux/actions";
import Navbar from "../components/Navbar";

const OrganizationDashboard = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleCreateEmployee = () => {
    if (!employeeName || !email || !password) {
      setError("All fields are required.");
      return;
    }

    const employee = {
      id: Date.now(),
      name: employeeName,
      password,
      email,
      role: "employee",
      approved: true,
    };

    dispatch(createEmployee(employee));

    setEmployeeName("");
    setPassword("");
    setEmail("");
    setError("");

    alert("Employee created successfully!");
  };

  return (
    <>
      <Navbar />
      <section className="organizationDashboard">
        <h2>Organization Dashboard</h2>
        <h3>Create Employee</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Employee Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleCreateEmployee}>Create Employee</button>
      </section>
    </>
  );
};

export default OrganizationDashboard;
