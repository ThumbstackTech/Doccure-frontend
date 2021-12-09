import React, { useState } from "react";
import DocFooter from "./DocFooter";
import { DocRegHeader } from "./DocRegHeader";
import { useNavigate } from "react-router-dom";
import { useRegisterDoctor } from "../../../hooks/doctor";

export const DocRegister = () => {
  const register = useRegisterDoctor();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    specialization: [],
    consultationFees: "",
    experience: "",
    email: "",
    address: "",
    phone: "",
  });

  let name, value;

  const handleInputs = (e) => {
    /* console.log(e.target.value); */
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // console.log("data..", name, gender, age, email);
    let phoneNo = localStorage.getItem("localPhoneNo");
    let data = {
      name: user.name,
      phoneNo: phoneNo,
      // gender: user.gender,
      experience: user.experience,
      email: user.email,
      consultationFees: user.consultationFees,
      specialization: user.specialization,
      address: {
        longitude: 72.8258,
        latitude: 18.975,
      },
    };
    let res = await register(data);
    if (res) {
      navigate("/doctor-dashboard");
    } else {
      console.log("Error!! Something went Wrong..");
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <DocRegHeader />

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
                        alt="Login Banner"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Doctor Register{" "}
                          <a href="register.html">Not a Doctor?</a>
                        </h3>
                      </div>
                      <form action="doctor-dashboard.html">
                        <div className="custom-file" id="customFile1">
                          {/* <div
                            style={{ marginBottom: "10px" }}
                            className="avatar avatar-xxl"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/patients/patient8.jpg"
                            />
                          </div> */}
                          {/* <label className="custom-file-upload">
                            <input type="file" />
                            <span className="change-user">
                              <i className="feather-upload" /> choose-file
                            </span>
                          </label>
                          <p className="mb-0">
                            Recommended image size is 35px x 35px
                          </p>
                          <br /> */}
                        </div>
                        <div className="form-group">
                          <label className="focus-label">Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={user.name}
                            onChange={handleInputs}
                          />
                        </div>
                        <div className="form-group">
                          <label className="focus-label">Specialization</label>
                          <input
                            type="text"
                            name="specialization"
                            id="specialization"
                            className="form-control"
                            value={user.specialization}
                            onChange={handleInputs}
                          />
                        </div>
                        <div className="form-group">
                          <label className="focus-label">
                            Consultation Fees
                          </label>
                          <input
                            type="text"
                            name="consultationFees"
                            id="clinic"
                            className="form-control"
                            value={user.consultationFees}
                            onChange={handleInputs}
                          />
                        </div>
                        <div className="form-group">
                          <label className="focus-label">Experience</label>
                          <input
                            type="text"
                            name="experience"
                            id="experience"
                            className="form-control"
                            value={user.experience}
                            onChange={handleInputs}
                          />
                        </div>
                        <div className="form-group">
                          <label className="focus-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleInputs}
                          />
                        </div>
                        <div className="form-group">
                          {/* <label className="focus-label">Location</label>
                          <input type="text" name="location" id="location" className="form-control"
                          value={user.location}
                          onChange={handleInputs}
                         /> */}
                        </div>
                        <div className="form-group">
                          {/* <label className="focus-label">Phone Number</label>
                          <input type="number" name="phone" id="phone" className="form-control" 
                          value={user.phone}
                          onChange={handleInputs}
                          /> */}
                        </div>
                        <div className="text-start">
                          <a className="forgot-link" href="login.html">
                            Already have an account?
                          </a>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          onClick={onSubmit}
                          type="submit"
                        >
                          Register
                        </button>
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
  );
};

export default DocRegister;
