import { useDispatch } from "react-redux";

import axios from "../../utils/axios";

import { setDoctorByLoc } from "../../actions/setDoctorByLoc";
import { setDoctor } from "../../actions/setDoctor";
import { appointments } from "../../actions/appointments";
import { consultedappointments } from "../../actions/consultedappointments";
import { nonConsultedappointments } from "../../actions/nonConsultedappointments";
import { setUser } from "../../actions/setUser";
import { setToken } from "../../actions/setToken";
import { createToken } from "../../actions/createToken";

import { toast } from "react-toastify";

export const useRegisterDoctor = () => {
  const dispatch = useDispatch();

  const register = async (data) => {
    try {
      let user = await axios.post("/api/doctor/register-doctor", data);
      console.log(user.data);
      dispatch(setUser(user.data.doctor));
      dispatch(setToken(user.data.token));
      toast.success("Doctor Registered");
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
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
      toast.success("Doctor Verified");

      return user.data;
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
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
      toast.success("Otp Sent");
      //   dispatch(setUser(user.data.user));
      //   dispatch(setToken(user.data.user.jwt));
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
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
      console.log("fetch appoint ", doctor.data);
      dispatch(appointments(doctor.data.appointments));
      // dispatch(appointments(doctor.data.appointments));
      dispatch(setDoctor(doctor.data.doctor));
      //   return doctor.data;
      // dispatch(setDoctor(doctor.data.doctor));
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
      console.log("create appoint res ", doctor.data);
      dispatch(createToken(doctor.data.appointments));
      // dispatch(setDoctor(doctor.data.doctorId));
      toast.success("Token Booked");
      // dispatch(setDoctor(doctor.data.doctorId));
      return doctor.data.appointments;

      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log("create token", error);
      toast.error("Error Occured");
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
      dispatch(consultedappointments(doctor.data));
      toast.success("Consulted");
      //   return doctor.data;
      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log("mark consulted", error);
      toast.error("Error Occured");
    }
  };

  return markConsulted;
};

export const useFetchAppointment = () => {
  const dispatch = useDispatch();

  const fetchAppointment = async (appointmentId) => {
    console.log("appoint  id", appointmentId);
    try {
      let doctor = await axios.post("/api/doctor/fetch-app", { appointmentId });
      console.log("fetch appoint res ", doctor.data);
      dispatch(createToken(doctor.data.appointment));
      // dispatch(appointments(doctor.data.appointments));
      // dispatch(setDoctor(doctor.data.doctor));
      return doctor.data.doctor;
      // dispatch(setDoctor(doctor.data.doctor));
    } catch (error) {
      console.log(error);
    }
  };

  return fetchAppointment;
};

export const useNonConsultedAppointment = () => {
  const dispatch = useDispatch();

  const nonConsultedAppointment = async (data) => {
    console.log("nonconsulted doctor id", data);
    try {
      let doctor = await axios.post("/api/doctor/fetch-non", data);
      console.log("nonconsulted doctor id res ", doctor.data);
      dispatch(nonConsultedappointments(doctor.data.appointment));
      return doctor.data;
      //   dispatch(setToken(user.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  return nonConsultedAppointment;
};
