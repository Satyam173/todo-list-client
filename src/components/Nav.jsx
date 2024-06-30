import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="nav-bar">
      {auth ? 
        <ul className="nav-ul">
          <li><Link to='/' >Home</Link></li>
          <li><Link to="/login" onClick={logout}>Logout</Link></li>
        </ul>
       : 
        <ul className="nav-ul">
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      }
    </div>
  );
};

export default Nav;
