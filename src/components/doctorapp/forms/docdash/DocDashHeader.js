import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../actions/setUser";

import { setToken } from "../../../../actions/setToken";
// ../../../actions/setToken";
export const DocDashHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const logout = () => {
    dispatch(setUser(""));

    dispatch(setToken(""));
    localStorage.setItem("localPhoneNo", "");
    navigate("/doctorlogin");
  };
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
            <a href="/" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="/" className="menu-logo">
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
                <a href="/doctorlogin" onClick={logout}>
                  <i className="fas fa-plus" /> Logout
                </a>
              </li>
              {/* <li>
                <a href="doctor-register.html">
                  <i className="fas fa-plus" /> Update Doctor Info
                </a>
              </li> */}
              {/* <li className="login-link">
                <a href="doctor-login.html">Login / Register</a>
              </li> */}
              {/* {user ? (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item">
                   
                    Hi {user}
                    
                  </li>
                </ul>
              ) : 
              (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item">
                    <Link className="nav-link header-login" to="/signupPage">
                      Login
                    </Link>
                  </li>
                </ul>
              )} */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DocDashHeader;
