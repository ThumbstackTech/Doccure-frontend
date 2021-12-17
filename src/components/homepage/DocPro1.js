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
import { useUserAppointments } from "../../hooks/user";

export const DocPro1 = () => {
  // const dispatch = useDispatch();
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctorById = useDoctorDetails();
  const doctorAppointment = useDoctorAppointments();
  const createAppointment = useCreateAppointments();
  const consultedAppointment = useConsultedAppointment();
  const userAllAppointments = useUserAppointments();

  const doctor = useSelector((state) => state.setDoctor);
  // const user = useSelector((state) => state.setUser);
  const appointments = useSelector((state) => state.appointments);
  const createToken = useSelector((state) => state.createToken);
  const userAppointment = useSelector((state) => state.userAppointments);
  console.log("user app", userAppointment);
  const [alreadyBooked, setAlreadyBooked] = useState("");

  const consultedappointments = useSelector(
    (state) => state.consultedappointments
  );

  console.log("individual doc appointments", appointments);
  console.log("doc consulted appointments", consultedappointments);
  console.log("createToken before", createToken.appointmentId);
  let appointmentId = createToken && createToken.appointmentId;

  // const [doctor, setDoctor] = useState("");
  const [user, setuser] = useState("");
  // const [haveAppointmet, setHaveAppointmet] = useState("");
  // if (user) {
  //   const appointed = appointments.filter((app) => {
  //     return appointments.find((app) => app.userId === user.userId);
  //   });
  //   // let appointed = setHaveAppointmet(
  //   //   appointments && appointments.filter(appointments.userId === user.userId)
  //   // );
  //   // let appointed = appointments && appointments.includes(user.userId);
  //   console.log("doctor appointed ", appointed);
  // }
  // console.log("haveAppointmet", haveAppointmet);

  useEffect(() => {
    fetchDoctor(); // eslint-disable-next-line
  }, [doctorId]);

  const fetchDoctor = async () => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    const userId = onlineUser && onlineUser.userId;
    if (onlineUser) {
      // onlineUser = onlineUser;
      setuser(onlineUser);
    } else {
      onlineUser = "";
      setuser(onlineUser);
    }
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
    await userAllAppointments({ userId, date });
    const tokenBooked = userAppointment.find(
      (token) => token.doctor.doctorId === doctorId
    );
    // if (userAppointment[0].include(doctorId))
    console.log("user token booked,", tokenBooked);
    setAlreadyBooked(tokenBooked);

    // const appointed = appointments.filter((app) => {
    //   return userAppointment.find(
    //     (doctorapp) => userAppointment.doctorId === app.doctorId
    //   );
    // });
    // let appointmentId = notConsulted[0].appointmentId;
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
    let res = await createAppointment(data);
    if (res) {
      navigate(`/tokenbooking/${doctorId}/${res.appointmentId}`);
    }
    console.log("create tokena after appointment", createToken);
    console.log("createappoint res token", res && res.appointmentId);
    // dispatch(setToken(""));

    // navigate(`/tokenbooking/${doctorId}`);
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
                      {user && !alreadyBooked ? (
                        <Link
                          to="#"
                          className="apt-btn"
                          onClick={bookAppointment}
                        >
                          Book Token No.
                          {appointments && appointments.length + 1}
                        </Link>
                      ) : alreadyBooked ? (
                        <Link
                          to={`/tokenbooking/${doctor.doctorId}`}
                          className="apt-btn"
                          // onClick={bookAppointment}
                        >
                          Already Have a Token
                          {/* {appointments && appointments.length + 1} */}
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
