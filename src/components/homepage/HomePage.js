import React, { useEffect } from "react";
import { useDoctorByLocation } from "../../hooks/doctor";
import SearchDoc from "./SearchDoc";
import { SignupPageFooter } from "../forms/SignupPageFooter";
import { SignupPageHeader } from "../forms/SignupPageHeader";

export const HomePage = () => {
  const doctorByLocation = useDoctorByLocation();
  useEffect(() => {
    onSearch();
  }, []);
  // let details;
  const onSearch = async () => {
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
