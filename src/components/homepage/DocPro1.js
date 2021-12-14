import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignupPageFooter from "../forms/SignupPageFooter";
import SignupPageHeader from "../forms/SignupPageHeader";
import { useSelector } from "react-redux";

// import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useDoctorDetails,
  useDoctorAppointments,
  useCreateAppointments,
  useConsultedAppointment,
} from "../../hooks/doctor";
// import { setToken } from "../../actions/setToken";

export const DocPro1 = () => {
  // const dispatch = useDispatch();
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctorById = useDoctorDetails();
  const doctorAppointment = useDoctorAppointments();
  const createAppointment = useCreateAppointments();
  const consultedAppointment = useConsultedAppointment();

  const doctor = useSelector((state) => state.setDoctor);
  // const user = useSelector((state) => state.setUser);
  const appointments = useSelector((state) => state.appointments);
  const createToken = useSelector((state) => state.createToken);

  const consultedappointments = useSelector(
    (state) => state.consultedappointments
  );

  console.log("individual doc appointments", appointments);
  console.log("doc consulted appointments", consultedappointments);
  console.log("createToken", createToken);
  let appointmentId = createToken && createToken.appointmentId;
  // const [doctor, setDoctor] = useState("");
  const [user, setuser] = useState("");
  useEffect(() => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    if (onlineUser) {
      // onlineUser = onlineUser;
      setuser(onlineUser);
    } else {
      onlineUser = "";
      setuser(onlineUser);
    }
    fetchDoctor(); // eslint-disable-next-line
  }, [doctorId]);

  const fetchDoctor = async () => {
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
    await doctorById({ doctorId });
    await doctorAppointment({ doctorId, date });
    await consultedAppointment({ doctorId, date });
    // const appointed = appointments.filter((app) => {
    //   return userAppointment.find(
    //     (doctorapp) => userAppointment.doctorId === app.doctorId
    //   );
    // });
    // let appointmentId = notConsulted[0].appointmentId;

    // console.log("doctor appointed ", appointed);
  };

  const bookAppointment = async () => {
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    let userId = user.userId;
    let data = { doctorId, date, userId };
    console.log("create app", data);
    await createAppointment(data);
    console.log("create tokena after appointment", createToken);
    // dispatch(setToken(""));
    navigate(`/tokenbooking/${doctorId}/${appointmentId}`);
    // to={`/docpro1/${doctor.doctorId}`}
  };
  return (
    <>
      <div className="main-wrapper">
        <SignupPageHeader />

        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Doctor Profile</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Doctor Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div
                      style={{ width: "100%", flex: "auto" }}
                      className="doctor-img"
                    >
                      <img
                        src="/assets/img/doctors/doctor-08.jpg"
                        className="img-fluid"
                        alt="User pucture"
                      />
                    </div>
                    <div
                      style={{ width: "100%", marginTop: "40px" }}
                      className="doc-info-cont"
                    >
                      <h4 style={{ fontSize: "25px" }} className="doc-name">
                        {"Dr. "}
                        {doctor && doctor.doctorName}
                      </h4>
                      <p
                        style={{ fontSize: "15px" }}
                        className="doc-speciality"
                      >
                        {doctor &&
                          doctor.specialization &&
                          doctor.specialization.map((spec) => {
                            return spec;
                          })}
                      </p>
                      <div className="clinic-details">
                        <p
                          style={{ marginBottom: "0px !important" }}
                          className="doc-location"
                        >
                          <i className="feather-map-pin" /> Mumbai -{" "}
                          <a href="/">Get Directions</a>
                        </p>
                        <p>
                          <i className="feather-calendar" /> Available Now
                        </p>
                        <ul>
                          <li>
                            <i className="far fa-money-bill-alt" /> ${" "}
                            {doctor && doctor.consultationFees}{" "}
                            <i
                              className="feather-info"
                              data-bs-toggle="tooltip"
                              title="Lorem Ipsum"
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", flex: "auto", maxWidth: "530px" }}
                    className="doc-info-right"
                  >
                    <div className="clini-infos">
                      <h4 style={{ margin: "25px 0" }} className="doc-name">
                        Consultation Hours :{" "}
                        <strong className="text-success">9am - 5pm</strong>
                      </h4>
                      <h4 style={{ margin: "25px 0" }} className="doc-name">
                        Patients In Queue -{" "}
                        <strong>
                          {appointments &&
                            appointments.length - consultedappointments.length}
                        </strong>
                      </h4>
                      <h4 style={{ margin: "25px 0" }} className="doc-name">
                        Current Token -{" "}
                        <strong>
                          {consultedappointments &&
                            consultedappointments.length}
                        </strong>
                      </h4>
                      <h4 style={{ margin: "25px 0" }} className="doc-name">
                        Last Token -{" "}
                        <strong>{appointments && appointments.length}</strong>
                      </h4>
                    </div>
                    <div className="clinic-booking">
                      {user ? (
                        <Link
                          to="#"
                          className="apt-btn"
                          onClick={bookAppointment}
                        >
                          Book Token No.
                          {appointments && appointments.length + 1}
                        </Link>
                      ) : (
                        <Link
                          to="/signuppage"
                          // onClick={bookAppointmnet}
                          className="apt-btn"
                        >
                          Login To Book Token No.
                          {appointments && appointments.length + 1}
                        </Link>
                      )}
                      {/* <Link to="/tokenbooking" className="apt-btn">
                        Book Token No.{appointments && appointments.length + 1}
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SignupPageFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default DocPro1;
