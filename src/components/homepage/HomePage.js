import React, { useEffect, useState } from "react";
import { useDoctorByLocation } from "../../hooks/doctor";
import SearchDoc from "./SearchDoc";
import { SignupPageFooter } from "../forms/SignupPageFooter";
import { SignupPageHeader } from "../forms/SignupPageHeader";
import { Fab } from "../FabButton/fab";
import { useUserAppointments } from "../../hooks/user";

export const HomePage = () => {
  // const [user, setUser] = useState("");
  const [userAppoint, setAppoint] = useState([]);
  const doctorByLocation = useDoctorByLocation();
  const userAllAppointments = useUserAppointments();
  useEffect(() => {
    onSearch(); // eslint-disable-next-line
  }, []);
  // let details;
  const onSearch = async () => {
    let onlineUser = JSON.parse(localStorage.getItem("user"));
    // if (onlineUser) {
    //   setUser(onlineUser);
    // }
    //
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    console.log("today", date);
    const userId = onlineUser.userId;
    // let data = { userId, date };
    let allappres = await userAllAppointments({ userId, date });
    console.log("all app", allappres);
    if (allappres) {
      setAppoint(allappres);
    }
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
        {userAppoint.length > 0 &&
          userAppoint.map((app) => {
            return <Fab userAllAppointment={app} />;
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
