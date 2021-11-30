import React from 'react'
import DocFooter from '../doctorapp/forms/DocFooter';
import TokenHeader from './TokenHeader';

export const TokenBooking = () => {
    return (
        <>
            <div className="main-wrapper">
        
        <TokenHeader />

        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Tokens</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Tokens</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="content success-page-cont">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="success-cont">
                  <img src="assets/img/icons/check-circle.png" alt="logo" />
                  <h3>Token booked Successfully!</h3>
                  <h3 style={{fontSize: '2rem'}}>Token No. 8</h3>
                  <p style={{margin: '40px 0'}}>Token booked for <span className="text-info"><strong>Dr. Darren Elder</strong></span><br /> on <strong>12 Nov 2019 9:00AM to 5:00PM</strong></p>
                  <div style={{width: '100%'}} className="col-md-12 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-widget-info">
                        <h6 style={{fontSize: '1.1rem'}} className="text-danger">Total Patients In Queue</h6>
                        <div className="dash-widget-count">
                          <h2>7</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{width: '100%'}} className="col-md-12 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-widget-info">
                        <h6 style={{fontSize: '1.1rem'}} className="text-success">Current Patient Token No.</h6>
                        <div className="dash-widget-count">
                          <h2>4</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{width: '100%'}} className="col-md-12 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-widget-info">
                        <h6 style={{fontSize: '1.1rem'}} className="text-info">Last Token</h6>
                        <div className="dash-widget-count">
                          <h2>7</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Notify me 
                    <select style={{width: '30%', margin: '0 20px'}} className="form-select">
                      <option>15 mins</option>
                      <option className="sorting">30 mins</option>
                      <option className="sorting">1 hr</option>
                      <option className="sorting">2 hr</option>
                      <option className="sorting">3 hr</option>
                      <option className="sorting">4 hr</option>		
                    </select>
                    before
                  </p>
                  <a style={{marginTop: '20px'}} href="invoice-view.html" className="btn btn-primary view-inv-btn">Delete Token</a>
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

export default TokenBooking;