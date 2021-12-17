import React, { useEffect, useState } from "react";
import DocFooter from "../DocFooter";
import DocDashHeader from "./DocDashHeader";
import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import {
  useDoctorDetails,
  useDoctorAppointments,
  // useCreateAppointments,
  useConsultedAppointment,
  useMarkConsulted,
  useNonConsultedAppointment,
} from "../../../../hooks/doctor";
import { useUserByAppointmnet } from "../../../../hooks/user";
import $ from "jquery";

export const DocDashboard = () => {
  // const navigate = useNavigate();

  const doctorById = useDoctorDetails();
  const userByAppointment = useUserByAppointmnet();
  const doctorAppointment = useDoctorAppointments();
  // const createAppointment = useCreateAppointments();
  const consultedAppointment = useConsultedAppointment();
  const nonConsultedAppointment = useNonConsultedAppointment();
  const markConsulted = useMarkConsulted();
  const doctor = useSelector((state) => state.setDoctor);
  // const doctor = useSelector((state) => state.setUser);
  const appointments = useSelector((state) => state.appointments);
  const consultedappointments = useSelector(
    (state) => state.consultedappointments
  );
  const nonConsultedappointments = useSelector(
    (state) => state.nonConsultedappointments
  );
  const [notConsultedpat, setNotConsulted] = useState(
    consultedappointments &&
      consultedappointments[consultedappointments.length - 1]
  );
  const [date, setDate] = useState();
  let current = consultedappointments.length;

  let total = appointments.length;
  let left = total - current;
  console.log("doctor dash", doctor);
  console.log("doctor appoint", appointments);
  console.log("doctor consulted", consultedappointments);
  console.log("nonconsulted doctor id dash", nonConsultedappointments);

  useEffect(() => {
    fetchDoctor();

    // eslint-disable-next-line
  }, [nonConsultedappointments]);

  const fetchDoctor = async () => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));

    let doctorId = onlineUser.doctorId;
    // let data = doctorId;
    // let date = Date();
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    setDate(date);
    console.log("today", date);
    await doctorById({ doctorId });
    await doctorAppointment({ doctorId, date });
    await consultedAppointment({ doctorId, date });
    await nonConsultedAppointment({ doctorId, date });
    // console.log("non patient info appoint", nonConsultedappointments);

    // let appointmentId = notConsultedpat && notConsultedpat.appointmentId;
    // let patientinfo = await userByAppointment({ appointmentId });
    // console.log("patient info appoint", consultedappointments);

    // fetchPatient();
  };

  const nextToken = async () => {
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    const notConsulted = appointments.filter((app) => {
      return !consultedappointments.find(
        (consulted) => consulted.appointmentId === app.appointmentId
      );
    });
    let appointmentId = notConsulted[0].appointmentId;
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    let doctorId = onlineUser.doctorId;
    console.log("doctor next ", notConsulted[0].appointmentId);

    // console.log("next data", data);
    // console.log("next ", notConsulted);
    await markConsulted({ appointmentId, date });
    await consultedAppointment({ doctorId, date });
    $('.clini-infos').css('display','none')
    $('.showHide').text('Show Patient Details')
  };
  // console.log("patient info", notConsultedpat);
  const fetchPatient = async () => {
    // let appointmentId =
    //   nonConsultedAppointment[0] && nonConsultedAppointment[0].appointmentId;
    // let patientinfo = await nonConsultedAppointment({ appointmentId });
    // console.log("non patient info appoint", nonConsultedAppointment[0]);
    // setNotConsulted(notConsulted[0].appointmentId);
    // let patientinfo = await userByAppointment({ appointmentId });
    // console.log("patient info appoint", patientinfo);
    // await consultedAppointment({ doctorId, date });
    // let cf =
    //   appointments.length > -1 &&
    //   appointments.filter((app) => {
    //     return !app.consulted;
    //   });
    // console.log("cf", cf);
    // fetchPatient();
    // const notConsulted =
    //   appointments &&
    //   consultedappointments &&
    //   appointments.filter((app) => {
    //     return !consultedappointments.find(
    //       (consulted) => consulted.appointmentId === app.appointmentId
    //     );
    //   });
    // console.log("doctor notConsulted", notConsulted);
    // let appointmentId =
    //   nonConsultedappointments && nonConsultedappointments.appointmentId;
    // let patientinfo = await userByAppointment({ appointmentId });
    // console.log("patient info appoint", patientinfo);
    // if (notConsulted[0]) {
    //   let appointmentId = notConsulted[0] && notConsulted[0].appointmentId;
    //   let patientinfo = await userByAppointment({ appointmentId });
    //   console.log("patient info appoint", patientinfo);
    // }
    // let appointmentId = notConsulted[0].appointmentId;
  };

  // setNotConsulted(cf);

  const showPatientDetails = async () => {
    let appointmentId =
      nonConsultedappointments[0] && nonConsultedappointments[0].appointmentId;
    let data = { appointmentId, date };
    let patientinfo = await userByAppointment(data);
    console.log("nonconsulted patient info appoint", patientinfo);
    setNotConsulted(patientinfo);
    if ($(".clini-infos").css("display") == "none") {
      $(".clini-infos").css("display", "block");
      $(".showHide").text("Hide Patient Details");
    } else {
      $(".clini-infos").css("display", "none");
      $(".showHide").text("Show Patient Details");
    }
  };
  return (
    <>
      <div className="main-wrapper">
        <DocDashHeader />

        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/doctordashboard">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="doctor-profile.html" className="booking-doc-img">
                        <img
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="no"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Dr. {doctor && doctor.doctorName}</h3>
                        <div className="patient-details">
                          <h5 className="mb-2">
                            {doctor &&
                              doctor.specialization &&
                              doctor.specialization.map((spez) => {
                                return spez;
                              })}
                            {/* BDS, MDS - Oral &amp; Maxillofacial Surgery */}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="dash-card">
                      <div className>
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="dash-widget-info">
                                <h6
                                  style={{ fontSize: "1.1rem" }}
                                  className="text-danger"
                                >
                                  Total Patients In Queue
                                </h6>
                                <div className="dash-widget-count">
                                  <h3>{left}</h3>
                                  {/* <h3>{appointments && appointments.length}</h3> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="dash-widget-info">
                                <h6
                                  style={{ fontSize: "1.1rem" }}
                                  className="text-success"
                                >
                                  Current Patient Token No.
                                </h6>
                                <div className="dash-widget-count">
                                  <h3>
                                    {consultedappointments &&
                                      consultedappointments.length}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="dash-widget-info">
                                <h6
                                  style={{ fontSize: "1.1rem" }}
                                  className="text-info"
                                >
                                  Patients Left
                                </h6>
                                <div className="dash-widget-count">
                                  <h3>{left}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h4 style={{ fontSize: "25px" }} className="sub-heading">
                      Manage Patients
                    </h4>
                    <div className="appointment-tab">
                      <div style={{ display: "none" }} className="clini-infos">
                        <h4
                          style={{ margin: "25px 25px" }}
                          className="doc-name"
                        >
                          Patient Name :{" "}
                          <strong className="text-success">
                            {notConsultedpat && notConsultedpat[0].name}
                          </strong>
                        </h4>
                        <h4
                          style={{ margin: "25px 25px" }}
                          className="doc-name"
                        >
                          Patient Age -{" "}
                          <strong>
                            {notConsultedpat && notConsultedpat[0].age}
                          </strong>
                        </h4>
                        <h4
                          style={{ margin: "25px 25px" }}
                          className="doc-name"
                        >
                          Patient Gender -{" "}
                          <strong>
                            {notConsultedpat && notConsultedpat[0].gender}
                          </strong>
                        </h4>
                      </div>
                      <ul
                        style={{
                          paddingBottom: "0px",
                          justifyContent: "center",
                        }}
                        className="nav nav-tabs nav-tabs-solid"
                      >
                        <li className="nav-item">
                          {left > 0 ? (
                            <button
                              style={{
                                borderRadius: "7px",
                                cursor: "pointer",
                              }}
                              type="button"
                              className="showHide btn btn-primary"
                              onClick={showPatientDetails}
                            >
                              Show Patient Details
                            </button>
                          ) : (
                            <button
                              style={{
                                borderRadius: "7px",
                                cursor: "pointer",
                              }}
                              type="button"
                              className="showHide btn btn-primary"
                            >
                              No More Patients to show
                            </button>
                          )}
                        </li>
                      </ul>
                      <h4 style={{ margin: "25px 25px" }} className="doc-name">
                        <i>
                          After successfull checkup press Next Patient to call
                          the next patient in Queue
                        </i>
                      </h4>
                      <ul
                        style={{ justifyContent: "center" }}
                        className="nav nav-tabs nav-tabs-solid"
                      >
                        {/* <li className="nav-item">
                          <button
                            style={{ borderRadius: "7px", padding: "10px" }}
                            type="button"
                            className="btn btn-primary"
                          >
                            Pass Current Patient
                          </button>
                        </li> */}
                        <li className="nav-item">
                          {appointments.length > 0 && left > 0 ? (
                            <button
                              style={{
                                borderRadius: "7px",
                                padding: "10px 50px",
                              }}
                              type="button"
                              className="btn btn-success"
                              onClick={nextToken}
                            >
                              Next Patient
                            </button>
                          ) : (
                            <button
                              style={{
                                borderRadius: "7px",
                                padding: "10px 50px",
                              }}
                              type="button"
                              className="btn btn-success"
                              // onClick={nextToken}
                            >
                              No Patient in Queue
                            </button>
                          )}
                        </li>
                      </ul>
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

export default DocDashboard;
