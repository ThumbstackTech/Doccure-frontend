import React from 'react'
import DocFooter from '../DocFooter';
import DocProHeader from './DocProHeader';

export const DocProfile = () => {
    return (
        <>
             <div className="main-wrapper">

        <DocProHeader />         
        


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
                      <img src="assets/img/doctors/doctor-thumb-02.jpg" className="img-fluid" alt="User Image" />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">Dr. Darren Elder</h4>
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
                      <a className="apt-btn" href="booking-success.html">Book Token No. 8</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DocFooter />
           


          </div>
        </div>
     </div>
        </>
    )
}

export default DocProfile;
