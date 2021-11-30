import React, {} from 'react'
import { Link } from 'react-router-dom';

export const DocCard = () => {
    return (
        <>
                   <div className="col-lg-3 col-md-6">
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="doctor-profile.html">
                            <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-08.jpg" />
                          </a>
                          <Link href="#" className="fav-btn">
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <a href="doctor-profile.html">Ruby Perrin</a>
                            <i className="feather-check-circle verified" />
                          </h3>
                          <p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
                          <p className="speciality">Clinic - Apollo <span style={{marginLeft: '65px'}}>Experience - 10+ years</span></p>
                          <ul className="available-info">
                            <li>
                              <i className="feather-map-pin" /> Mumbai
                            </li>
                            <li>
                              <i className="far fa-calendar" /> Available Today
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $100 - $400
                              <i className="feather-info" data-bs-toggle="tooltip" title="Lorem Ipsum" />
                            </li>
                          </ul>
                          <div className="profile-btn-list">
                            <Link to="/docprofile" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                     
                     </div>
        </>
    )
}

export default DocCard;