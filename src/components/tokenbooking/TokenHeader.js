import React from 'react'
import { Link } from 'react-router-dom';

export const TokenHeader = () => {
    return (
        <>
            <header className="header">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="javascript:void(0);">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="index.html" className="navbar-brand logo">
                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="index.html" className="menu-logo">
                  <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                </Link>
                <Link id="menu_close" className="menu-close" to="javascript:void(0);">
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li>
                  <Link to="/homepage"><i className="fas fa-plus" /> Home</Link>
                </li>
                <li>
                  <Link to="/bookmark"><i className="fas fa-plus" /> Bookmarks</Link>
                </li>
                <li>
                  <Link to="/tokenbooking"><i className="fas fa-plus" /> Tokens</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>






        </>
    )
}


export default TokenHeader;