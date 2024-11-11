// Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <button onClick={handleLogout} className="logoutButton">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
