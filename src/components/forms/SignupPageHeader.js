import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../actions/setUser";

import { setToken } from "../../actions/setToken";

export const SignupPageHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
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
    navigate("/signupPage");
  };
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="#">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to="/" className="navbar-brand logo">
              <img
                src="/assets/img/logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="index.html" className="menu-logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link id="menu_close" className="menu-close" to="#">
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav">
              <li>
                <Link to="/homepage">
                  <i className="fas fa-plus" /> Home
                </Link>
              </li>
              <li>
                <Link to="/bookmark">
                  <i className="fas fa-plus" /> Bookmarks
                </Link>
              </li>
              <li>
                <Link to="/tokenbooking">
                  <i className="fas fa-plus" /> Tokens
                </Link>
              </li>
              <li className="login-link">
                <Link to="login.html">Login / Register</Link>
              </li>
            </ul>
          </div>
          {user ? (
            <ul className="main-nav">
              <li className="nav-item">
                <Link to="/#">
                  <i className="fas fa-plus"> </i>Hi {user}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signupPage" onClick={logout}>
                  <i className="fas fa-plus"> </i>
                  Logout
                </Link>
                {/* <Link className=" header-login" to="/"> */}
                {/* Logout */}
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
              <Link className="nav-link header-login" to="/signupPage">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login login" to="/registerpage">
                Register
              </Link>
            </li>
          </ul> */}
        </nav>
      </header>
    </>
  );
};

export default SignupPageHeader;
