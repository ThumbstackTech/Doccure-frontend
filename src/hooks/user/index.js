import { useDispatch } from "react-redux";
import { setUser } from "../../actions/setUser";
import axios from "../../utils/axios";
import { setToken } from "../../actions/setToken";
import { setBookmark } from "../../actions/setBookmark";
// import { toast } from "react-toastify";

export const useRegisterUser = () => {
  const dispatch = useDispatch();

  const register = async (data) => {
    try {
      let user = await axios.post("/api/user/register-user", data);
      console.log(user.data);
      dispatch(setUser(user.data.user));
      dispatch(setToken(user.data.token));
      return true;
    } catch (error) {
      console.log(error);
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
      let user = await axios.post("/api/user/send-otp", data);
      console.log(user.data);
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

export const useBookmarkDoc = () => {
  const dispatch = useDispatch();

  const bookmarkDoc = async (data) => {
    console.log("bookmark hook", data);
    try {
      let doctor = await axios.post("/api/doctor/bookmark-doc", data);
      console.log("bookmark res", doctor.data);
      dispatch(setBookmark(doctor.data));
      //   dispatch(setToken(user.data.user.jwt));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return bookmarkDoc;
};
