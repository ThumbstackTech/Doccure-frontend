import { useDispatch } from "react-redux";

import axios from "../../utils/axios";

import { setDoctorByLoc } from "../../actions/setDoctorByLoc";
import { setDoctor } from "../../actions/setDoctor";
import { appointments } from "../../actions/appointments";
import { consultedappointments } from "../../actions/consultedappointments";
import { setUser } from "../../actions/setUser";
import { setToken } from "../../actions/setToken";

// import { toast } from "react-toastify";

export const useRegisterDoctor = () => {
  const dispatch = useDispatch();

  const register = async (data) => {
    try {
      let user = await axios.post("/api/doctor/register-doctor", data);
      console.log(user.data);
      dispatch(setUser(user.data.doctor));
      dispatch(setToken(user.data.token));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return register;
};

export const useVerifyDoctor = () => {
  // const dispatch = useDispatch();

  const verify = async (data) => {
    try {
      let user = await axios.post("/api/doctor/verify-otp", data);
      console.log("verify user", user.data);

      return user.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return verify;
};

export const useSendOtp = () => {
  // const dispatch = useDispatch();

  const sendOtp = async (data) => {
    try {
      let user = await axios.post("/api/doctor/send-otp", data);
      console.log("doctor", user.data);
      //   dispatch(setUser(user.data.user));
      //   dispatch(setToken(user.data.user.jwt));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return sendOtp;
};

export const useDoctorByLocation = () => {
  const dispatch = useDispatch();

  const doctorByLocation = async (data) => {
    try {
      let doctor = await axios.post("/api/doctor/fetch-location", data);
      console.log("doc by loc", doctor.data);
      dispatch(setDoctorByLoc(doctor.data));
      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  return doctorByLocation;
};

export const useDoctorDetails = () => {
  const dispatch = useDispatch();

  const doctorById = async (data) => {
    console.log("indi doctor id", data);
    try {
      let doctor = await axios.post("/api/doctor/fetch-by-id", data);
      console.log("indi doc ", doctor.data);
      dispatch(setDoctor(doctor.data));
      //   return doctor.data;
      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  return doctorById;
};

export const useDoctorAppointments = () => {
  const dispatch = useDispatch();

  const doctorAppointment = async (data) => {
    console.log("appoint doctor id", data);
    try {
      let doctor = await axios.post("/api/doctor/fetch-appointment", data);
      console.log("appoint ", doctor.data);
      dispatch(appointments(doctor.data.appointments));
      //   return doctor.data;
      dispatch(setDoctor(doctor.data.doctor));
    } catch (error) {
      console.log(error);
    }
  };

  return doctorAppointment;
};

export const useCreateAppointments = () => {
  const dispatch = useDispatch();

  const createAppointment = async (data) => {
    console.log("appoint doctor id", data);
    try {
      let doctor = await axios.post("/api/doctor/create-appointment", data);
      console.log("appoint ", doctor.data);
      dispatch(appointments(doctor.data.appointments));
      dispatch(setDoctor(doctor.data.doctor));

      //   return doctor.data;
      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  return createAppointment;
};

export const useConsultedAppointment = () => {
  const dispatch = useDispatch();

  const consultedAppointment = async (data) => {
    console.log("doc consulted doctor id", data);
    try {
      let doctor = await axios.post("/api/doctor/fetch-consulted", data);
      console.log("doc consulted ", doctor.data);
      dispatch(consultedappointments(doctor.data.appointment));
      //   return doctor.data;
      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  return consultedAppointment;
};

export const useMarkConsulted = () => {
  const dispatch = useDispatch();

  const markConsulted = async (data) => {
    console.log("doc consulted doctor id", data);
    try {
      let doctor = await axios.post("/api/doctor/consulted-appointment", data);
      console.log("doc consulted ", doctor.data);
      dispatch(consultedappointments(doctor.data.appointment));
      //   return doctor.data;
      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  return markConsulted;
};
