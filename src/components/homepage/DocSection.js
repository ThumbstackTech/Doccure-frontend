import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { DoctorCard } from "./DoctorCard";

export const DocSection = ({ docData }) => {
  console.log("doc details", docData);
  const testdata = ["ams", "bms"];

  // const [doctorid, setDoctor] = useState('');
  // const [userid, setUser] = useState('');

  // const [message, setMessage] = useState(false);

  // const createAppoint = (event) => {
  //   event.preventDefault();
  //   console.log('doctorId', doctorid);
  //   console.log('userId', userid);

  //   var postData = {doctorId:doctorid,
  //     userId:userid};

  //     axios
  //     .post('https://doccure-api.herokuapp.com/api/doctor/create-appointment', postData)
  //     .then((response) => {
  //       console.log(response, 'response doctor appoint data...');

  //     })
  //     .catch((err) => {
  //       console.log('Error!! Something went Wrong..');
  //       setMessage(true);
  //     });

  // }

  return (
    <>
      <section className="section section-doctor">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                {testdata.length > 1 &&
                  testdata.map((doc) => {
                    <h2>
                      Doctors <span>Nearby You</span>
                    </h2>;
                  })}
              </div>
              <div className="our-doctor">
                <div className="row">
                  {docData.length > 0 &&
                    docData.map((doc) => {
                      return <DoctorCard doctor={doc} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocSection;
