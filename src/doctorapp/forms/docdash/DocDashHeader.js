import React from 'react'


export const DocDashHeader = () => {
    return (
        <>
            
            <header className="header">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
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
                  <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                </a>
                <a id="menu_close" className="menu-close" href="javascript:void(0);">
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li>
                  <a href="doctor-dashboard.html"><i className="fas fa-plus" /> Doctor Dashboard</a>
                </li>
                <li>
                  <a href="doctor-register.html"><i className="fas fa-plus" /> Update Doctor Info</a>
                </li>
                <li className="login-link">
                  <a href="doctor-login.html">Login / Register</a>
                </li>
              </ul>
            </div></nav>
        </header>
       

      
        </>
    )
}


export default DocDashHeader;