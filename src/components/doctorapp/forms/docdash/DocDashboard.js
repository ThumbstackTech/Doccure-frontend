import React, { useEffect, useState } from "react";
import DocFooter from "../DocFooter";
import DocDashHeader from "./DocDashHeader";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  useDoctorDetails,
  useDoctorAppointments,
  useCreateAppointments,
  useConsultedAppointment,
  useMarkConsulted,
} from "../../../../hooks/doctor";

export const DocDashboard = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const doctorById = useDoctorDetails();
  const doctorAppointment = useDoctorAppointments();
  const createAppointment = useCreateAppointments();
  const consultedAppointment = useConsultedAppointment();
  const markConsulted = useMarkConsulted();
  const doctor = useSelector((state) => state.setDoctor);
  // const doctor = useSelector((state) => state.setUser);
  const appointments = useSelector((state) => state.appointments);
  const consultedappointments = useSelector(
    (state) => state.consultedappointments
  );
  let current = consultedappointments.length;

  let total = appointments.length;
  let left = total - current;
  console.log("doctor dash", doctor);
  console.log("doctor appoint", appointments);
  console.log("doctor consulted", consultedappointments);
  useEffect(() => {
    fetchDoctor();
  }, [appointments]);

  const fetchDoctor = async () => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    if (onlineUser) {
      onlineUser = onlineUser;
      setuser(onlineUser);
    } else {
      onlineUser = "";
      setuser(onlineUser);
    }
    let doctorId = onlineUser.doctorId;
    let data = doctorId;
    // let date = Date();
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    console.log("today", date);
    await doctorById({ doctorId });
    await doctorAppointment({ doctorId, date });
    await consultedAppointment({ doctorId, date });
  };

  const nextToken = async () => {
    const notConsulted = appointments.filter((app) => {
      return !consultedappointments.find(
        (consulted) => consulted.appointmentId === app.appointmentId
      );
    });
    let appointmentId = notConsulted[0].appointmentId;

    console.log("doctor next ", notConsulted[0].appointmentId);
    // console.log("next data", data);
    // console.log("next ", notConsulted);
    await markConsulted({ appointmentId });
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
                      <a href="index.html">Home</a>
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
                          <h5 className="mb-0">
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
                                  <h3>{appointments && appointments.length}</h3>
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
                    <h4 className="sub-heading">Manage Patients</h4>
                    <div className="appointment-tab">
                      <ul
                        style={{ justifyContent: "center" }}
                        className="nav nav-tabs nav-tabs-solid"
                      >
                        <li className="nav-item">
                          <button
                            style={{ borderRadius: "7px", padding: "10px" }}
                            type="button"
                            className="btn btn-primary"
                          >
                            Pass Current Patient
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            style={{ borderRadius: "7px", padding: "10px" }}
                            type="button"
                            className="btn btn-success"
                            onClick={nextToken}
                          >
                            Next Patient
                          </button>
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
