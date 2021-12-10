import React from "react";
import SignupPageFooter from "../forms/SignupPageFooter";
import SignupPageHeader from "../forms/SignupPageHeader";

export const FavourPage = () => {
  return (
    <>
      <div class="main-wrapper">
        <SignupPageHeader />

        <div>
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <h2 className="breadcrumb-title">My Bookmarks</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Bookmarks
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div style={{ justifyContent: "center" }} className="row">
                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div className="row row-grid">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="doctor-profile.html">
                            <img
                              className="img-fluid"
                              alt="no"
                              src="assets/img/doctors/doctor-01.jpg"
                            />
                          </a>
                          <a href="/" className="fav-btn">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="doctor-profile.html">Dr. Ruby Perrin</a>
                            <i className="fas fa-check-circle verified" />
                          </h3>
                          <p className="speciality">
                            MDS - Periodontology and Oral Implantology, BDS
                          </p>
                          <p className="speciality">
                            Clinic - Apollo{" "}
                            <span style={{ marginLeft: "65px" }}>
                              Experience - 10+ years
                            </span>
                          </p>
                          <ul className="available-info">
                            <li>
                              <i className="feather-map-pin" /> Mumbai
                            </li>
                            <li>
                              <i className="far fa-calendar" /> Available Today
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $100 -
                              $400
                              <i
                                className="feather-info"
                                data-bs-toggle="tooltip"
                                title="Lorem Ipsum"
                              />
                            </li>
                          </ul>
                          <div className="profile-btn-list">
                            <a
                              href="doctor-profile.html"
                              className="btn book-btn"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="doctor-profile.html">
                            <img
                              className="img-fluid"
                              alt="no"
                              src="assets/img/doctors/doctor-02.jpg"
                            />
                          </a>
                          <a href="/" className="fav-btn">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="doctor-profile.html">Dr. Darren Elder</a>
                            <i className="fas fa-check-circle verified" />
                          </h3>
                          <p className="speciality">
                            BDS, MDS - Oral &amp; Maxillofacial Surgery
                          </p>
                          <p className="speciality">
                            Clinic - Apollo{" "}
                            <span style={{ marginLeft: "65px" }}>
                              Experience - 10+ years
                            </span>
                          </p>
                          <ul className="available-info">
                            <li>
                              <i className="feather-map-pin" /> Mumbai
                            </li>
                            <li>
                              <i className="far fa-calendar" /> Available Today
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $100 -
                              $400
                              <i
                                className="feather-info"
                                data-bs-toggle="tooltip"
                                title="Lorem Ipsum"
                              />
                            </li>
                          </ul>
                          <div className="profile-btn-list">
                            <a
                              href="doctor-profile.html"
                              className="btn book-btn"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="doctor-profile.html">
                            <img
                              className="img-fluid"
                              alt="no"
                              src="assets/img/doctors/doctor-03.jpg"
                            />
                          </a>
                          <a href="/" className="fav-btn">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="doctor-profile.html">Dr. Deborah Angel</a>
                            <i className="fas fa-check-circle verified" />
                          </h3>
                          <p className="speciality">
                            MBBS, MD - General Medicine, DNB - Cardiology
                          </p>
                          <p className="speciality">
                            Clinic - Apollo{" "}
                            <span style={{ marginLeft: "65px" }}>
                              Experience - 10+ years
                            </span>
                          </p>
                          <ul className="available-info">
                            <li>
                              <i className="feather-map-pin" /> Mumbai
                            </li>
                            <li>
                              <i className="far fa-calendar" /> Available Today
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $100 -
                              $400
                              <i
                                className="feather-info"
                                data-bs-toggle="tooltip"
                                title="Lorem Ipsum"
                              />
                            </li>
                          </ul>
                          <div className="profile-btn-list">
                            <a
                              href="doctor-profile.html"
                              className="btn book-btn"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="doctor-profile.html">
                            <img
                              className="img-fluid"
                              alt="no"
                              src="assets/img/doctors/doctor-04.jpg"
                            />
                          </a>
                          <a href="/" className="fav-btn">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="doctor-profile.html">Dr. Sofia Brient</a>
                            <i className="fas fa-check-circle verified" />
                          </h3>
                          <p className="speciality">
                            MBBS, MS - General Surgery, MCh - Urology
                          </p>
                          <p className="speciality">
                            Clinic - Apollo{" "}
                            <span style={{ marginLeft: "65px" }}>
                              Experience - 10+ years
                            </span>
                          </p>
                          <ul className="available-info">
                            <li>
                              <i className="feather-map-pin" /> Mumbai
                            </li>
                            <li>
                              <i className="far fa-calendar" /> Available Today
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $100 -
                              $400
                              <i
                                className="feather-info"
                                data-bs-toggle="tooltip"
                                title="Lorem Ipsum"
                              />
                            </li>
                          </ul>
                          <div className="profile-btn-list">
                            <a
                              href="doctor-profile.html"
                              className="btn book-btn"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="doctor-profile.html">
                            <img
                              className="img-fluid"
                              alt="no"
                              src="assets/img/doctors/doctor-05.jpg"
                            />
                          </a>
                          <a href="/" className="fav-btn">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="doctor-profile.html">
                              Dr. Marvin Campbell
                            </a>
                            <i className="fas fa-check-circle verified" />
                          </h3>
                          <p className="speciality">
                            MD - Ophthalmology, DNB - Ophthalmology
                          </p>
                          <p className="speciality">
                            Clinic - Apollo{" "}
                            <span style={{ marginLeft: "65px" }}>
                              Experience - 10+ years
                            </span>
                          </p>
                          <ul className="available-info">
                            <li>
                              <i className="feather-map-pin" /> Mumbai
                            </li>
                            <li>
                              <i className="far fa-calendar" /> Available Today
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $100 -
                              $400
                              <i
                                className="feather-info"
                                data-bs-toggle="tooltip"
                                title="Lorem Ipsum"
                              />
                            </li>
                          </ul>
                          <div className="profile-btn-list">
                            <a
                              href="doctor-profile.html"
                              className="btn book-btn"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="doctor-profile.html">
                            <img
                              className="img-fluid"
                              alt="no"
                              src="assets/img/doctors/doctor-06.jpg"
                            />
                          </a>
                          <a href="/" className="fav-btn">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="doctor-profile.html">
                              Dr. Katharine Berthold
                            </a>
                            <i className="fas fa-check-circle verified" />
                          </h3>
                          <p className="speciality">
                            MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                          </p>
                          <p className="speciality">
                            Clinic - Apollo{" "}
                            <span style={{ marginLeft: "65px" }}>
                              Experience - 10+ years
                            </span>
                          </p>
                          <ul className="available-info">
                            <li>
                              <i className="feather-map-pin" /> Mumbai
                            </li>
                            <li>
                              <i className="far fa-calendar" /> Available Today
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $100 -
                              $400
                              <i
                                className="feather-info"
                                data-bs-toggle="tooltip"
                                title="Lorem Ipsum"
                              />
                            </li>
                          </ul>
                          <div className="profile-btn-list">
                            <a
                              href="doctor-profile.html"
                              className="btn book-btn"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SignupPageFooter />
      </div>
    </>
  );
};

export default FavourPage;
