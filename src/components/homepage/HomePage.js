import React, { useEffect } from "react";
import { useDoctorByLocation } from "../../hooks/doctor";
import SearchDoc from "./SearchDoc";
import { useSelector } from "react-redux";
import { SignupPageFooter } from "../forms/SignupPageFooter";
import { SignupPageHeader } from "../forms/SignupPageHeader";
import { Fab } from "../FabButton/fab";
import { useUserAppointments, useGetBookmark } from "../../hooks/user";
import { appointments } from "../../actions/appointments";

export const HomePage = () => {
  // const [user, setUser] = useState("");
  // const [userAppoint, setAppoint] = useState([]);
  const doctorByLocation = useDoctorByLocation();
  const userAllAppointments = useUserAppointments();
  const bookmarks = useGetBookmark();
  const userAppointment = useSelector((state) => state.userAppointments);
  const userBookmarks = useSelector((state) => state.setBookmark);
  console.log("userBookmarks", userBookmarks);
  useEffect(() => {
    onSearch(); // eslint-disable-next-line
  }, [userAppointment]);
  // let details;
  const onSearch = async () => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));

    if (onlineUser) {
      let userId = onlineUser.userId;
      // let data = user;
      await bookmarks({ userId });
    }

    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    console.log("today", date);
    const userId = onlineUser && onlineUser.userId;
    // let data = { userId, date };
    let allappres = await userAllAppointments({ userId, date });
    console.log("all app", allappres);
    // if (allappres) {
    //   setAppoint(allappres);
    // }
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, "latitude");
      console.log(position.coords.longitude, "longitude");

      // var data = {
      //   lalitude: 18.975,
      //   longitude: 72.8258,
      // };

      // axios
      //   .post(
      //     // "https://doccure-api.herokuapp.com/api/doctor/fetch-location",
      //     "http://localhost:8000/api/doctor/fetch-location",
      //     CurrentLocation
      //   )
      //   .then((response) => {
      //     details = response.data;
      //     console.log("location response ", details);
      //     setDoctorDetails(details);
      //     // doctorDetails = details;
      //     // data = response.data;
      //     console.log("location  ..", doctorDetails);
      //     getSearchDoc(doctorDetails);
      //     getLocation(doctorDetails);
      //   })
      // .catch((err) => {
      //   console.log("Something went wrong!!");
      // });
    });
    var data = {
      lalitude: 18.975,
      longitude: 72.8258,
    };
    await doctorByLocation(data);
  };

  const getLocation = (location) => {
    console.log(getLocation, "Location asdf");
  };

  return (
    <>
      <div className="outerDiv">
        {/* {userAppoint && <Fab />} */}
        {userAppointment.length > 0 &&
          userAppointment.map((app, index) => {
            return <Fab userAllAppointment={app} item={index} />;
          })}
      </div>
      <div className="main-wrapper">
        <SignupPageHeader />
        <div>
          <SearchDoc getLocation={getLocation} />
        </div>
        <SignupPageFooter />
      </div>
    </>
  );
};

export default HomePage;
