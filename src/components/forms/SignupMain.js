import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSendOtp, useVerifyUser } from "../../hooks/user";

import { useDispatch } from "react-redux";
import { setUser } from "../../actions/setUser";

import { setToken } from "../../actions/setToken";
import { toast } from "react-toastify";
export const SignupMain = () => {
  const dispatch = useDispatch();

  const sendOtp = useSendOtp();
  const verify = useVerifyUser();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otpcountdown, setotpcountdown] = useState(60);

  //Countdown
  useEffect(() => {
    var otpcountdown = 60;
    const timer = setInterval(() => {
      if (otpcountdown >= 0) {
        setotpcountdown(otpcountdown--);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  //Countdown

  // const [message, setMessage] = useState(false);

  const navigate = useNavigate();

  const getOtp = async () => {
    // event.preventDefault();
    // console.log("phone number", phone);
    if (phone.length === 10) {
      localStorage.setItem("localPhoneNo", phone);

      let data = { phoneNo: phone };
      await sendOtp(data);
      setShowOtp(true);
    } else {
      toast.error("Invalid Phone Number");
    }
  };

  const verifyOtp = async (event) => {
    event.preventDefault();
    console.log("phone number", phone);
    console.log("otp", otp);
    if (phone && otp) {
      let data = { phoneNo: phone, verifyotp: otp };
      let res = await verify(data);
      console.log("verify res", res.success[2]);
      if (!res.success[2]) {
        navigate("/registerpage");
      } else {
        dispatch(setUser(res.success[1]));
        dispatch(setToken(res.success[3]));
        // navigate("/homepage");
        navigate(-1);
      }
    } else {
      toast.error("Enter OTP");
    }

    // axios
    //   .post("https://doccure-api.herokuapp.com/api/user/verify-otp", postData)
    //   .then((response) => {
    //     console.log(response, "response verify otp data...");

    //     for (var i = 0; i < response.data.success.length; i++) {
    //       if (response.data.success[i])
    //         // console.log('success');
    //         navigate("/homepage");
    //       // console.log('fail');
    //       else navigate("/registerpage");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Error!! Something went Wrong..");
    //     setMessage(true);
    //   });
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
                    <img
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient <span>Login</span>
                      </h3>
                    </div>
                    <form action="register.html">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          value={phone}
                          maxLength="10"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      {showOtp && (
                        <div
                          // style={{ display: "none" }}
                          id="otpbox"
                          className="form-group"
                        >
                          <label>OTP</label>
                          <input
                            type="text"
                            className="form-control"
                            value={otp}
                            maxLength="6"
                            onChange={(e) => setOtp(e.target.value)}
                          />
                          <label
                            style={{
                              display:
                                otpcountdown === 0 ? "none" : "inline-block",
                            }}
                          >
                            Resend OTP in{" "}
                            <b class="count">{otpcountdown} secs&nbsp;</b>
                          </label>
                          <p
                            style={{
                              textDecoration: "underline",
                              color: "#0d6efd",
                              display: otpcountdown !== 0 ? "none" : "block",
                            }}
                            onClick={getOtp}
                          >
                            Resend OTP
                          </p>
                        </div>
                      )}
                      {!showOtp && (
                        <ul
                          style={{
                            justifyContent: "center",
                            marginBottom: "20px",
                          }}
                          className="nav nav-tabs nav-tabs-solid"
                        >
                          <li className="nav-item">
                            <button
                              id="otp"
                              type="button"
                              onClick={getOtp}
                              className="btn btn-primary"
                            >
                              Get OTP
                            </button>
                          </li>
                        </ul>
                      )}
                      {showOtp && (
                        <button
                          style={{
                            width: "100%",
                            backgroundColor: "#00e65b",
                            border: "1px solid #00e65b",
                          }}
                          className="btn btn-primary btn-lg login-btn"
                          onClick={verifyOtp}
                          type=""
                        >
                          Verify OTP
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
