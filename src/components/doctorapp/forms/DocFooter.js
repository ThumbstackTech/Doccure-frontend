import React from 'react';

export const DocFooter = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-bottom'>
          <div className='container-fluid'>
            <div className='copyright'>
              <div className='row'>
                <div className='col-md-6 col-lg-6'>
                  <div className='copyright-text'>
                    <p className='mb-0'>© 2021 Doccure. All rights reserved.</p>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='copyright-menu'>
                    <ul className='policy-menu'>
                      <li>
                        <a href='privacy-policy.html'>
                          Email: help@doccure.com
                        </a>
                      </li>
                      <li>
                        <a href='term-condition.html'>Terms and Conditions</a>
                      </li>
                      <li>
                        <a href='privacy-policy.html'>Policy</a>
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
