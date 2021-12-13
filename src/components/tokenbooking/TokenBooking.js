import React, { useEffect } from "react";
// import DocFooter from "../doctorapp/forms/DocFooter";
import TokenHeader from "./TokenHeader";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SignupPageFooter from "../forms/SignupPageFooter";
import {
  // useDoctorDetails,
  useDoctorAppointments,
  // useConsultedAppointment,
  useFetchAppointment,
} from "../../hooks/doctor";

export const TokenBooking = () => {
  const { appointmentId, doctorId } = useParams();
  // const doctorById = useDoctorDetails();
  const doctorAppointment = useDoctorAppointments();
  // const consultedAppointment = useConsultedAppointment();
  const fetchAppointment = useFetchAppointment();
  const doctor = useSelector((state) => state.setDoctor);
  // const doctor = useSelector((state) => state.setDoctor);
  // const user = useSelector((state) => state.setUser);
  const appointments = useSelector((state) => state.appointments);
  const consultedappointments = useSelector(
    (state) => state.consultedappointments
  );
  // let current =
  //   appointments.length - 3 > appointments.length
  //     ? appointments.length - 1 > appointments.length
  //       ? appointments.length - 1
  //       : appointments.length
  //     : appointments.length - 1;
  const createToken = useSelector((state) => state.createToken);
  console.log("token appointments", appointments);
  console.log("fetch token doctor", doctor);
  console.log("fetch appointmneyt", appointmentId);
  console.log("createToken", createToken);

  // let doctorId = doctor != null && doctor.doctorId;
  useEffect(() => {
    fetchApp();
    fetchDoctor();
    // eslint-disable-next-line
  }, []);
  const fetchApp = async () => {
    await fetchAppointment(appointmentId);
  };
  const fetchDoctor = async () => {
    // let onlineUser = JSON.parse(localStorage.getItem("user"));
    // if (onlineUser) {
    //   // onlineUser = onlineUser;
    //   // setuser(onlineUser);
    // } else {
    //   onlineUser = "";
    //   // setuser(onlineUser);
    // }

    console.log("fetch doctor id token", doctorId);
    // let data = doctorId;
    // let date = Date();
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    console.log("today", date);

    // await doctorById({ doctorId });
    await doctorAppointment({ doctorId, date });
    // await consultedAppointment({ doctorId, date });
  };

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
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Tokens
                    </li>
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
                  <img src="/assets/img/icons/check-circle.png" alt="logo" />
                  <h3>Token booked Successfully!</h3>
                  <h3 style={{ fontSize: "2rem" }}>
                    Token No. {appointments && appointments.length}
                  </h3>
                  <p style={{ margin: "40px 0" }}>
                    Token booked for{" "}
                    <span className="text-info">
                      <strong>Dr. {doctor && doctor.doctorName}</strong>
                    </span>
                    <br /> on{" "}
                    <strong>
                      <Moment format={"DD-MMM-YYYY"}>
                        {appointments &&
                          appointments.length &&
                          appointments[appointments.length - 1].date}
                        {/* {startDate} */}
                      </Moment>{" "}
                      9:00AM to 5:00PM
                      {/* 12 Nov 2019 9:00AM to 5:00PM */}
                    </strong>
                  </p>
                  <div style={{ width: "100%" }} className="col-md-12 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-widget-info">
                        <h6
                          style={{ fontSize: "1.1rem" }}
                          className="text-danger"
                        >
                          Total Patients In Queue
                        </h6>
                        <div className="dash-widget-count">
                          <h2>{appointments && appointments.length}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "100%" }} className="col-md-12 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-widget-info">
                        <h6
                          style={{ fontSize: "1.1rem" }}
                          className="text-success"
                        >
                          Current Patient Token No.
                        </h6>
                        <div className="dash-widget-count">
                          <h2>
                            {consultedappointments &&
                              consultedappointments.length}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "100%" }} className="col-md-12 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-widget-info">
                        <h6
                          style={{ fontSize: "1.1rem" }}
                          className="text-info"
                        >
                          Last Token
                        </h6>
                        <div className="dash-widget-count">
                          <h2>{appointments && appointments.length}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Notify me
                    <select
                      style={{ width: "30%", margin: "0 20px" }}
                      className="form-select"
                    >
                      <option>15 mins</option>
                      <option className="sorting">30 mins</option>
                      <option className="sorting">1 hr</option>
                      <option className="sorting">2 hr</option>
                      <option className="sorting">3 hr</option>
                      <option className="sorting">4 hr</option>
                    </select>
                    before
                  </p>
                  {/* <a
                    style={{ marginTop: "20px" }}
                    href="invoice-view.html"
                    className="btn btn-primary view-inv-btn"
                  >
                    Delete Token
                  </a> */}
                  <Link
                    to="/"
                    style={{ marginTop: "20px" }}
                    href="invoice-view.html"
                    className="btn btn-primary view-inv-btn"
                  >
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SignupPageFooter />
        {/* <DocFooter /> */}
      </div>
    </>
  );
};

export default TokenBooking;
