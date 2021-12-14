import { combineReducers } from "redux";

import setUser from "./setUser";
import setToken from "./setToken";
import setDoctorByLoc from "./setDoctorByLoc";
import setDoctor from "./setDoctor";
import appointments from "./appointments";
import setBookmark from "./setBookmark";
import consultedappointments from "./consultedappointments";
import createToken from "./createToken";
import userAppointments from "./userAppointments";

const reducers = combineReducers({
  setToken,
  userAppointments,
  setUser,
  setDoctorByLoc,
  setDoctor,
  appointments,
  setBookmark,
  consultedappointments,
  createToken,
});

export default reducers;
