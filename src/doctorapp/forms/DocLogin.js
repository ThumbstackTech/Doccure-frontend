import React, {useState} from 'react'
import DocFooter from './DocFooter';
import DocHeader from './DocHeader';
import axios from 'axios';

export const DocLogin = () => {

    // const [user, setUser] = useState({
    //     phone: "" , otp: ""
    // });

    // let name, value;

    // const handleInputs = (e) => {
    //     /* console.log(e.target.value); */
    //     name = e.target.name;
    //     value = e.target.value;

    //     setUser({ ...user, [name]:value});
    // }

    // const onSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(user);
    // }

    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
  
    const [message, setMessage] = useState(false);
  
    const getOtp = (event) => {
      event.preventDefault();
      console.log('phone number', phone);
  
      var postData = {};
      axios
        .post('url', postData)
        .then((response) => {
          console.log(response, 'response data...');
        })
        .catch((err) => {
          console.log('Error!! Something went Wrong..');
          setMessage(true);
        });
    };
  
    const loginHandle = (event) => {
      event.preventDefault();
      console.log('phone number', phone);
  
      var postData = {};
      axios
        .post('url', postData)
        .then((response) => {
          console.log(response, 'response data...');
          // history.push('/')
        })
        .catch((err) => {
          console.log('Error!! Something went Wrong..');
          setMessage(true);
        });
    };
  

    return (
        <>
             <div className="main-wrapper">
        
        <DocHeader />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Login" />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>Doctor <span>Login</span></h3>
                      </div>
                      <form action="doctor-register.html">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input type="number" name="phone" id="phone" className="form-control"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                         />
                        </div>
                        <div className="form-group">
                          <label>OTP</label>
                          <input type="number" name="otp" id="otp" className="form-control" 
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                          />
                        </div>
                        <ul style={{justifyContent: 'center', marginBottom: '20px'}} className="nav nav-tabs nav-tabs-solid">
                          <li className="nav-item">
                            <button type="button" className="btn btn-primary">Get OTP</button>
                          </li>
                          <li className="nav-item">
                            <button type="button" className="btn btn-success">Verify OTP</button>
                          </li>
                        </ul>
                        <button style={{justifyCcontent: 'center', width: '100%'}} className="btn btn-primary btn-lg login-btn" onClick={loginHandle} type="submit">Login</button>
                      </form>
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

export default DocLogin;
