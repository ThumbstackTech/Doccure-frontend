import React, {useState} from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';





export const DocSection = ({docData}) => {




  // const [doctorid, setDoctor] = useState('');
  // const [userid, setUser] = useState('');

  // const [message, setMessage] = useState(false);

  // const createAppoint = (event) => {
  //   event.preventDefault();
  //   console.log('doctorId', doctorid);
  //   console.log('userId', userid);

  //   var postData = {doctorId:doctorid,
  //     userId:userid};

  //     axios
  //     .post('https://doccure-api.herokuapp.com/api/doctor/create-appointment', postData)
  //     .then((response) => {
  //       console.log(response, 'response doctor appoint data...');
        
        
        
  //     })
  //     .catch((err) => {
  //       console.log('Error!! Something went Wrong..');
  //       setMessage(true);
  //     });

  // }


  
 
  
  
    return (
        <>

<section className="section section-doctor">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Doctors <span>Nearby You</span></h2>
              </div>
              <div className="our-doctor">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="doctor-profile.html">
                          <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-08.jpg" />
                        </a>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <a href="doctor-profile.html">{docDatadoctorName}</a>
                          <i className="feather-check-circle verified" />
                        </h3>
                        <p className="speciality">MBBS, MD - Dermatology , Venereology &amp; Lepros</p>
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
                          <Link to="/docpro1" id={"001"}  className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="doctor-profile.html">
                          <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-01.jpg" />
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
                          <Link to="/docpro2" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="doctor-profile.html">
                          <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg" />
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
                          <Link to="/docprooo" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="doctor-profile.html">
                          <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-03.jpg" />
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
                          <Link to="/prodoc" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


            
        </>
    )

  }




export default DocSection;