import { combineReducers } from "redux";

import setUser from "./setUser";
import setToken from "./setToken";
import setDoctorByLoc from "./setDoctorByLoc";
import setDoctor from "./setDoctor";
import appointments from "./appointments";
import setBookmark from "./setBookmark";
import consultedappointments from "./consultedappointments";

const reducers = combineReducers({
  setToken,
  setUser,
  setDoctorByLoc,
  setDoctor,
  appointments,
  setBookmark,
  consultedappointments,
});

export default reducers;
