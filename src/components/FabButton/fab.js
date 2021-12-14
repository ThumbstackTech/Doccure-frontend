import React, { useEffect } from "react";
import "./fab.css";
import $ from "jquery";
import { useSelector } from "react-redux";
import icon from "../../icons/icons8-circular-arrows-50.png";
import { useUserAppointments } from "../../hooks/user";
import {
  // useDoctorDetails,
  useDoctorAppointments,
  useConsultedAppointment,
  // useFetchAppointment,
} from "../../hooks/doctor";

// import axios from 'axios';

export const Fab = ({ userAllAppointment }) => {
  const userAllAppointments = useUserAppointments();
  // const doctorAppointment = useDoctorAppointments();
  const doctorAppointment = useDoctorAppointments();
  const consultedAppointment = useConsultedAppointment();
  // const fetchAppointment = useFetchAppointment();
  const appointments = useSelector((state) => state.appointments);
  const userAppointment = useSelector((state) => state.userAppointments);
  const consultedappointments = useSelector(
    (state) => state.consultedappointments
  );
  let current = consultedappointments.length;

  let total = appointments.length;
  let left = total - current;
  console.log("consultedappointments", consultedappointments);
  console.log("userappointments", userAppointment);
  console.log("appointments", appointments);
  console.log("fab appointments", userAllAppointment);
  useEffect(() => {
    getuserAppointments(); // eslint-disable-next-line
  }, []);
  const getuserAppointments = async () => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    console.log("today", date);
    const userId = onlineUser.userId;
    let data = { userId, date };
    await userAllAppointments(data);
    let doctorId = userAllAppointment.appointment.doctorId;
    console.log("user allappres", userAllAppointment.appointment);
    await doctorAppointment({ doctorId, date });
    await consultedAppointment({ doctorId, date });
  };
  return (
    <>
      <div
        id="overlay"
        onClick={() => {
          $(".fab").removeClass("active");
          $("#overlay").removeClass("dark-overlay");
          $("#loadicon").css("display", "block");
        }}
      ></div>
      <div
        class="fab"
        onClick={() => {
          console.log("akash");
          $(".fab").addClass("active");
          $("#overlay").addClass("dark-overlay");
          $("#loadicon").css("display", "none");
        }}
      >
        <img id="loadicon" style={{ position: "absolute" }} src={icon} alt="" />
        <h1 style={{ fontSize: "20px" }}>
          {consultedappointments && consultedappointments.length}
        </h1>
        {/* <div className="drname">
          <h2>Dr.{userAppointment && userAppointment[0].doctor.doctorName}</h2>
        </div> */}

        <div className="row cntt-wrapper">
          <h5 style={{ fontSize: "1.1rem" }} className="text-danger">
            {/* Dr.{userAppointment && userAppointment[0].doctor.doctorName} */}
          </h5>
          <div className="dash-widget-info">
            <h6 style={{ fontSize: "1.1rem" }} className="text-danger">
              Total Patients In Queue{" "}
            </h6>
            <div className="dash-widget-count">
              <h3>{appointments && appointments.length}</h3>
            </div>
          </div>
          <div className="dash-widget-info">
            <h6 style={{ fontSize: "1.1rem" }} className="text-success">
              Current Patient Token No.
            </h6>
            <div className="dash-widget-count">
              <h3>{consultedappointments && consultedappointments.length}</h3>
            </div>
          </div>
          <div className="dash-widget-info">
            <h6 style={{ fontSize: "1.1rem" }} className="text-info">
              Patients Left
            </h6>
            <div className="dash-widget-count">
              <h3>{left}</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-shadow--2dp center m-t-100">
                    <div class="box">
                    <h1>Material Popup</h1>
                    <h4>Just click the fancy button to see the magic</h4>
                    <br></br>
                    <p>This example uses the MDL-Libary for the CSS layout,<br/> the popup itself works it just fine without.</p>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default Fab;
