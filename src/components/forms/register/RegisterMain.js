import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { useRegisterUser } from "../../../hooks/user";
// import { useRegisterUser } from "../../hooks/user";
export const RegisterMain = () => {
  const register = useRegisterUser();
  // const [user, setUser] = useState({
  //     name:"", address:"", gender:"", age:"", email:""
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

  /* const [values, setValues] = useState({
          name: '',
          address: '',
          gender: '',
          age: '',
          email: '',
          
      }); */

  const [name, setName] = useState("");

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("data..", name, gender, age, email);
    let phone = localStorage.getItem("localPhoneNo", phone);
    let data = {
      name: name,
      phoneNo: phone,
      gender: gender,
      age: age,
      email: email,
    };
    console.log("postdata..", data);
    let res = await register(data);
    if (res) {
      navigate("/homepage");
    } else {
      console.log("Error!! Something went Wrong..");
    }
    // axios
    //   .post(
    //     "https://doccure-api.herokuapp.com/api/user/register-user",
    //     postData
    //   )
    //   .then((response) => {
    //     console.log(response, "response register data...");

    //     navigate("/homepage");
    //   })
    //   .catch((err) => {
    //     console.log("Error!! Something went Wrong..");

    //     // setMessage(true);
    //   });
  };

  return (
    <>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="account-content">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-7 col-lg-6 login-left">
                    <img
                      src="assets/img/login-banner.png"
                      class="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div class="col-md-12 col-lg-6 login-right">
                    <div class="login-header">
                      <h3>
                        Patient Register{" "}
                        <a href="doctor-register.html">Are you a Doctor?</a>
                      </h3>
                    </div>

                    <form action="index.html">
                      <div class="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label>Gender</label>
                        <select
                          style={{ height: "50px" }}
                          class="form-select"
                          name="gender"
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option>Select</option>
                          <option class="sorting">Male</option>
                          <option class="sorting">Female</option>
                          <option class="sorting">Other</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Age</label>
                        <input
                          type="number"
                          class="form-control"
                          name="age"
                          id="age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <div class="text-start">
                          <a class="forgot-link" href="login.html">
                            Already have an account?
                          </a>
                        </div>
                      </div>
                      <button
                        class="btn btn-primary btn-lg login-btn"
                        onClick={handleSubmit}
                        type=""
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
    </>
  );
};
