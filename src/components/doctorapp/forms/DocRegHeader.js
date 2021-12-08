import React from 'react'

export const DocRegHeader = () => {
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
                <li className="login-link">
                  <a href="doctor-login.html">Login / Register</a>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item dropdown has-arrow logged-item">
                <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                  <span className="user-img">
                    <img className="rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" width={31} alt="Fred Ortego" />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <a className="dropdown-item" href="doctor-dashboard.html">Dashboard</a>
                  <a className="dropdown-item" href="doctor-profile-settings.html">Profile Settings</a>
                  <a className="dropdown-item" href="login.html">Logout</a>
                </div>
              </li>
            </ul>
          </nav>
        </header>  
        </>
    )
}

export default DocRegHeader;
