import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DocHeader = () => {
  const [user, setuser] = useState("");
  console.log("user details", user);

  useEffect(() => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    if (onlineUser) {
      onlineUser = onlineUser.name;
      setuser(onlineUser);
    } else {
      onlineUser = "";
      setuser(onlineUser);
    }
  }, []);
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="/">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <a href="index.html" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="index.html" className="menu-logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a id="menu_close" className="menu-close" href="/">
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li>
                <a href="doctor-dashboard.html">
                  <i className="fas fa-plus" /> Doctor Dashboard
                </a>
              </li>
              <li className="login-link">
                <a href="doctor-login.html">Login / Register</a>
              </li>
            </ul>
          </div>
          {user ? (
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                {/* <Link className=" header-login" to="/"> */}
                Hi {user}
                {/* </Link> */}
              </li>
            </ul>
          ) : (
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-login" to="/signupPage">
                  Login
                </Link>
              </li>
            </ul>
          )}
          {/* <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <a className="nav-link header-login" href="doctor-login.html">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-login login" href="doctor-register.html">Register</a>
              </li>
            </ul> */}
        </nav>
      </header>
    </>
  );
};

export default DocHeader;
