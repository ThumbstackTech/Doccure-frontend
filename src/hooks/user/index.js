import { useDispatch } from "react-redux";
import { setUser } from "../../actions/setUser";
import axios from "../../utils/axios";
import { setToken } from "../../actions/setToken";
import { setBookmark } from "../../actions/setBookmark";
import { toast } from "react-toastify";
import { userAppointments } from "../../actions/userAppointments";
// import { appointments } from "../../actions/appointments";

export const useRegisterUser = () => {
  const dispatch = useDispatch();

  const register = async (data) => {
    try {
      let user = await axios.post("/api/user/register-user", data);
      console.log(user.data);
      dispatch(setUser(user.data.user));
      dispatch(setToken(user.data.token));
      toast.success("User Registered");
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
      return false;
    }
  };

  return register;
};

export const useVerifyUser = () => {
  // const dispatch = useDispatch();

  const verify = async (data) => {
    try {
      let user = await axios.post("/api/user/verify-otp", data);
      console.log("verify user", user.data);
      toast.success("User Verified");

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
      let user = await axios.post("/api/user/send-otp", data);
      console.log(user.data);
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

export const useBookmarkDoc = () => {
  const dispatch = useDispatch();

  const bookmarkDoc = async (data) => {
    console.log("bookmark hook", data);
    try {
      let doctor = await axios.post("/api/user/bookmark-doc", data);
      console.log("bookmark res", doctor.data);
      dispatch(setBookmark(doctor.data));
      toast.success("Bookmarked");
      //   dispatch(setToken(user.data.user.jwt));
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
      return false;
    }
  };

  return bookmarkDoc;
};
// user//get-appointments

export const useUserAppointments = () => {
  const dispatch = useDispatch();

  const userAllAppointments = async (data) => {
    console.log("user app hook", data);
    try {
      let appoint = await axios.post("/api/user/get-appointments", data);
      console.log("user app res", appoint.data);
      dispatch(userAppointments(appoint.data));
      // toast.success("Bookmarked");
      //   dispatch(setToken(user.data.user.jwt));
      return appoint.data;
    } catch (error) {
      console.log("in all appp user", error);
      // toast.error("Error Occuredin all app");
      return false;
    }
  };

  return userAllAppointments;
};

export const useUserByAppointmnet = () => {
  // /get-patient
  const userByAppointment = async (data) => {
    console.log("user app hook", data);
    try {
      let appoint = await axios.post("/api/user/get-patient", data);
      console.log("user app res", appoint.data);
      // dispatch(userAppointments(appoint.data));
      // toast.success("Bookmarked");
      //   dispatch(setToken(user.data.user.jwt));
      return appoint.data;
    } catch (error) {
      console.log("in all appp user", error);
      // toast.error("Error Occuredin all app");
      return false;
    }
  };

  return userByAppointment;
};

export const useGetBookmark = () => {
  const dispatch = useDispatch();

  const bookmarks = async (data) => {
    console.log("bookmark hook", data);
    try {
      let user = await axios.post("/api/user/bookmarks", data);
      console.log("bookmark res", user);
      dispatch(setBookmark(user.data));
      // toast.success("Bookmarked");
      //   dispatch(setToken(user.data.user.jwt));
      return user.data;
    } catch (error) {
      console.log("bookmark", error);
      toast.error("Error Occured");
      return false;
    }
  };

  return bookmarks;
};
