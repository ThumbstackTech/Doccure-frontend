import React from "react";

export const DocFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src="assets/img/logo.png" alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "} */}
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="/" target="_blank">
                            <i className="feather-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                            <i className="feather-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                            <i className="feather-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                            <i className="feather-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="favourites.html">Bookmarks</a>
                    </li>
                    <li>
                      <a href="patient-dashboard.html">Tokens</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <a href="doctor-login.html">Login</a>
                    </li>
                    <li>
                      <a href="doctor-register.html">Register</a>
                    </li>
                    <li>
                      <a href="doctor-dashboard.html">Doctor Dashboard</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <i className="feather-map-pin" />
                      </span>
                      <p>
                        {" "}
                        Mumbai Maharastra,
                        <br /> India{" "}
                      </p>
                    </div>
                    <p>
                      <i className="feather-phone" />
                      +1 315 369 5943
                    </p>
                    <p className="mb-0">
                      <i className="feather-mail" />
                      <a
                        href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="3a5e5559594f485f7a5f425b574a565f14595557"
                      >
                        [email&nbsp;protected]
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container-fluid">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">© 2021 Doccure. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <a href="term-condition.html">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DocFooter;
