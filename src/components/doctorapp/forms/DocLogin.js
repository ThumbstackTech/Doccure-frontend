import React, { useState, useEffect } from "react";
// import DocFooter from "./DocFooter";
import DocHeader from "./DocHeader";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSendOtp, useVerifyDoctor } from "../../../hooks/doctor";

import { useDispatch } from "react-redux";
import { setUser } from "../../../actions/setUser";
import SignupPageFooter from "../../forms/SignupPageFooter";
import { toast } from "react-toastify";

// import { setToken } from "../../../actions/setToken";

export const DocLogin = () => {
  const dispatch = useDispatch();

  const sendOtp = useSendOtp();
  const verify = useVerifyDoctor();

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otpcountdown, setotpcountdown] = useState(0);

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

  // const getOtp = () => {
  //   // event.preventDefault();
  //   console.log("phone number", phone);

  //   // var postData = {};
  //   // axios
  //   //   .post("url", postData)
  //   //   .then((response) => {
  //   //     console.log(response, "response data...");
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log("Error!! Something went Wrong..");
  //   //     setMessage(true);
  //   //   });
  // };

  // const getOtp = async () => {
  //   // event.preventDefault();

  //   localStorage.setItem("localPhoneNo", phone);

  //   let data = { phoneNo: phone };
  //   console.log("doctor number", data);
  //   await sendOtp(data);
  //   setShowOtp(true);
  // };

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
        navigate("/doctorregistration");
      } else {
        dispatch(setUser(res.success[1]));
        navigate("/doctordashboard");
      }
    } else {
      toast.error("Enter OTP");
    }
  };
  // const verifyOtp = async () => {
  //   // event.preventDefault();
  //   console.log("phone number", phone);
  //   console.log("otp", otp);

  //   let data = { phoneNo: phone, verifyotp: otp };
  //   let res = await verify(data);
  //   console.log("verify res", res.success[2]);
  //   if (!res.success[2]) {
  //     navigate("/doctorregistration");
  //   } else {
  //     dispatch(setUser(res.success[1]));

  //     // dispatch(setToken(res.success[3]));
  //     navigate("/doctordashboard");
  //     // navigate(-1);
  //   }
  // };

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
                      <img
                        src="/assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Doctor <span>Login</span>
                        </h3>
                      </div>

                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          maxLength="10"
                          className="form-control"
                          value={phone}
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
                      {/* <div className="form-group">
                          <label>OTP</label>
                          <input
                            type="number"
                            name="otp"
                            id="otp"
                            className="form-control"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                        </div> */}
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
                          type="submit"
                        >
                          Verify OTP
                        </button>
                      )}
                      {/* <ul
                          style={{
                            justifyContent: "center",
                            marginBottom: "20px",
                          }}
                          className="nav nav-tabs nav-tabs-solid"
                        >
                          <li className="nav-item">
                            <button
                              type="button"
                              onClick={getOtp}
                              className="btn btn-primary"
                            >
                              Get OTP
                            </button>
                          </li>
                          <li className="nav-item">
                            <button
                              type="button"
                              onClick={verifyOtp}
                              className="btn btn-success"
                            >
                              Verify OTP
                            </button>
                          </li>
                        </ul> */}
                      {/* <button
                          style={{ justifyCcontent: "center", width: "100%" }}
                          className="btn btn-primary btn-lg login-btn"
                          onClick={() => getOtp()}
                          type="submit"
                        >
                          Login
                        </button> */}
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SignupPageFooter />
        {/* <DocFooter />
         */}
      </div>
    </>
  );
};

export default DocLogin;
