import React from 'react'
import { Link } from 'react-router-dom';
import SignupPageFooter from '../forms/SignupPageFooter';
import SignupPageHeader from '../forms/SignupPageHeader';

export const Profile3 = () => {
    return (
        <>

<div className="main-wrapper">

<SignupPageHeader />

<div className="breadcrumb-bar">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-md-12 col-12">
        <h2 className="breadcrumb-title">Doctor Profile</h2>
        <nav aria-label="breadcrumb" className="page-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Doctor Profile</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
<div className="content">
  <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="doctor-widget">
          <div className="doc-info-left">
            <div className="doctor-img">
              <img src="assets/img/doctors/doctor-01.jpg" className="img-fluid" alt="User Image" />
            </div>
            <div className="doc-info-cont">
              <h4 className="doc-name"> Ruby Perrin</h4>
              <p className="doc-speciality">BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
              <div className="clinic-details">
                <p style={{marginBottom: '0px !important'}} className="doc-location"><i className="feather-map-pin" /> Mumbai - <a href="javascript:void(0);">Get Directions</a></p>
              </div>
            </div>
          </div>
          <div className="doc-info-right">
            <div className="clini-infos">
              <ul>
                <li><i className="feather-calendar" /> Available Now</li>
                <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="feather-info" data-bs-toggle="tooltip" title="Lorem Ipsum" /> </li>
              </ul>
              <h4 style={{margin: '25px 0'}} className="doc-name">Consultation Hours : <strong className="text-success">9am - 5pm</strong></h4>
              <h4 style={{margin: '25px 0'}} className="doc-name">Patients In Queue - <strong>7</strong></h4>
              <h4 style={{margin: '25px 0'}} className="doc-name">Current Token - <strong>4</strong></h4>
              <h4 style={{margin: '25px 0'}} className="doc-name">Last Token - <strong>7</strong></h4>
            </div>
            <div className="clinic-booking">
              <Link to="/tokenbooking" className="apt-btn" >Book Token No. 8</Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    <SignupPageFooter />

    </div>
</div>
</div>
    
            
        </>
    )
}

export default Profile3; 