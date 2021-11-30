import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignupMain = () => {

    /* const [user, setUser] = useState({
        phone: "" , otp: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e.target.value); 
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]:value});
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
    } */

    const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const [message, setMessage] = useState(false);

  const navigate = useNavigate();

  const getOtp = (event) => {
    event.preventDefault();
    console.log('phone number', phone);
    localStorage.setItem('localPhoneNo', phone);
    

    var data= {phoneNo:phone};
    axios.post('https://doccure-api.herokuapp.com/api/user/send-otp', data)
      .then((response) => {
        console.log(response, 'response phone no data...');
      /*   localStorage.setItem('loginUserData', JSON.stringify (response));
        var userData = JSON.parse(localStorage.getItem("loginUserData")); */
        var msgData = response.data.response.response.messages
        //console.log(userData, 'response local user data...');
        console.log(msgData, 'response user id');
        for(var i=0;i<msgData.length;i++){
          var userId = msgData[i].id;
          console.log(userId,'userid data');
        }
        
      })
      .catch((err) => {
        console.log('Error!! Something went Wrong..');
        setMessage(true);
      });
  };

  const verifyOtp = (event) => {
    event.preventDefault();
    console.log('phone number', phone);
    console.log('otp', otp);


    var postData = {phoneNo:phone,
      verifyotp:otp};
    axios
      .post('https://doccure-api.herokuapp.com/api/user/verify-otp', postData)
      .then((response) => {
        console.log(response, 'response verify otp data...');
        
        for(var i=0; i<response.data.success.length; i++){
          if(response.data.success[i])
            // console.log('success');
            navigate('/homepage');
            else
              // console.log('fail');
              navigate('/registerpage');
        }
        
      })
      .catch((err) => {
        console.log('Error!! Something went Wrong..');
        setMessage(true);
      });
  };

  

    return (
        <>
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
                      <h3>Patient <span>Login</span></h3>
                    </div>
                    <form action="register.html">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" className="form-control"
                        value={phone} maxlength="10"
                        onChange={(e) => setPhone(e.target.value)}
                         />
                      </div>
                      <div style={{display: 'none'}} id="otpbox" className="form-group">
                        <label>OTP</label>
                        <input type="number" className="form-control"
                        value={otp} maxlength="6"
                        onChange={(e) => setOtp(e.target.value)}  
                        />
                      </div>
                      <ul style={{justifyContent: 'center', marginBottom: '20px'}} className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <button id="otp" type="button" onClick={getOtp} className="btn btn-primary">Get OTP</button>
                        </li>
                      </ul>
                      <button style={{width: '100%', backgroundColor: '#00e65b', border: '1px solid #00e65b'}} className="btn btn-primary btn-lg login-btn" onClick={verifyOtp} type="">
                        Verify OTP
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>         
        </>
    )
}
