import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBookmarkDoc } from "../../hooks/user";

export const DoctorCard = ({ doctor }) => {
  console.log("doctor card props", doctor);
  const [bookmark, setbookmark] = useState(doctor.isBookmarked);
  const bookmarkDoc = useBookmarkDoc();
  console.log("doctor card bookmarked", bookmark);

  // const addBookmark = async (doctorId, bookmark) => {
  const addBookmark = async (doctorId, bookmark) => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    let userId = onlineUser.userId;
    setbookmark(bookmark);
    let data = { doctorId, bookmark, userId };
    console.log("doctor card bookmark data", data);
    await bookmarkDoc(data);
    console.log("doctor card bookmarked");
  };
  return (
    <>
      {/* <div className="our-doctor">
      <div className="row"> */}
      <div className="col-lg-3 col-md-6">
        <div className="profile-widget">
          <div className="doc-img">
            <a href="doctor-profile.html">
              <img
                className="img-fluid"
                alt="User Image"
                src="assets/img/doctors/doctor-08.jpg"
              />
            </a>
            <a
              // href="javascript:void(0)"
              onClick={() => addBookmark(doctor.doctorId, !bookmark)}
              // className="fav-btn"
              className={!bookmark ? "fav-btn" : "fav-btn active"}
            >
              {bookmark}
              <i className="far fa-bookmark" />
            </a>
          </div>
          <div className="pro-content">
            <h3 className="title">
              <a href="doctor-profile.html">{doctor.doctorName}</a>
              <i className="feather-check-circle verified" />
            </h3>
            <p className="speciality">
              MBBS, MD - Dermatology , Venereology &amp; Lepros
            </p>
            <p className="speciality">
              Clinic - Apollo{" "}
              <span style={{ marginLeft: "65px" }}>
                Experience - {doctor.experience}
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
                <i className="far fa-money-bill-alt" /> $
                {doctor.consultationFees}
                <i
                  className="feather-info"
                  data-bs-toggle="tooltip"
                  title="Lorem Ipsum"
                />
              </li>
            </ul>
            <div className="profile-btn-list">
              <Link
                // to="/docpro1"
                to={`/docpro1/${doctor.doctorId}`}
                id={"001"}
                className="btn book-btn"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-3 col-md-6">
            <div className="profile-widget">
              <div className="doc-img">
                <a href="doctor-profile.html">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src="assets/img/doctors/doctor-01.jpg"
                  />
                </a>
                <a href="javascript:void(0)" className="fav-btn">
                  <i className="far fa-bookmark" />
                </a>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <a href="doctor-profile.html">Ruby Perrin</a>
                  <i className="feather-check-circle verified" />
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
                    <i className="far fa-money-bill-alt" /> $100 - $400
                    <i
                      className="feather-info"
                      data-bs-toggle="tooltip"
                      title="Lorem Ipsum"
                    />
                  </li>
                </ul>
                <div className="profile-btn-list">
                  <Link to="/docpro2" className="btn book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="profile-widget">
              <div className="doc-img">
                <a href="doctor-profile.html">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src="assets/img/doctors/doctor-02.jpg"
                  />
                </a>
                <a href="javascript:void(0)" className="fav-btn">
                  <i className="far fa-bookmark" />
                </a>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <a href="doctor-profile.html">Darren Elder</a>
                  <i className="feather-check-circle verified" />
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
                    <i className="far fa-money-bill-alt" /> $100 - $400
                    <i
                      className="feather-info"
                      data-bs-toggle="tooltip"
                      title="Lorem Ipsum"
                    />
                  </li>
                </ul>
                <div className="profile-btn-list">
                  <Link to="/docprooo" className="btn book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="profile-widget">
              <div className="doc-img">
                <a href="doctor-profile.html">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src="assets/img/doctors/doctor-03.jpg"
                  />
                </a>
                <a href="javascript:void(0)" className="fav-btn">
                  <i className="far fa-bookmark" />
                </a>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <a href="doctor-profile.html">Deborah Angel</a>
                  <i className="feather-check-circle verified" />
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
                    <i className="far fa-money-bill-alt" /> $100 - $400
                    <i
                      className="feather-info"
                      data-bs-toggle="tooltip"
                      title="Lorem Ipsum"
                    />
                  </li>
                </ul>
                <div className="profile-btn-list">
                  <Link to="/prodoc" className="btn book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div>
    </div> */}
    </>
  );
};
