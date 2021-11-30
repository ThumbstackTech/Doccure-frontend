import React from 'react'
import DocFooter from '../DocFooter';
import DocDashHeader from './DocDashHeader';

export const DocDashboard = () => {
    return (
        <>
<div className="main-wrapper">

    <DocDashHeader />


<div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="doctor-profile.html" className="booking-doc-img">
                        <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                      </a>
                      <div className="profile-det-info">
                        <h3>Dr. Darren Elder</h3>
                        <div className="patient-details">
                          <h5 className="mb-0">BDS, MDS - Oral &amp; Maxillofacial Surgery</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="dash-card">
                      <div className>
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="dash-widget-info">
                                <h6 style={{fontSize: '1.1rem'}} className="text-danger">Total Patients In Queue</h6>
                                <div className="dash-widget-count">
                                  <h3>7</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="dash-widget-info">
                                <h6 style={{fontSize: '1.1rem'}} className="text-success">Current Patient Token No.</h6>
                                <div className="dash-widget-count">
                                  <h3>4</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="dash-widget-info">
                                <h6 style={{fontSize: '1.1rem'}} className="text-info">Patients Left</h6>
                                <div className="dash-widget-count">
                                  <h3>3</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="sub-heading">Manage Patients</h4>
                    <div className="appointment-tab">
                      <ul style={{justifyContent: 'center'}} className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <button style={{borderRadius: '7px', padding: '10px'}} type="button" className="btn btn-primary">Pass Current Patient</button>
                        </li>
                        <li className="nav-item">
                          <button style={{borderRadius: '7px', padding: '10px'}} type="button" className="btn btn-success">Next Patient
                          </button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DocFooter />

        </div>    
        </>
    )
}


export default DocDashboard;