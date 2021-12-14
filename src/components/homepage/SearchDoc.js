import React from "react";
// import axios from "axios";
import DocSection from "./DocSection";
import { useSelector } from "react-redux";
// import { setDoctorByLoc } from "../../actions/setDoctorByLoc";

export const SearchDoc = ({ getLocation }) => {
  // const [searchDoc, getSearchDoc] = useState("");
  // const [doctorDetails, setDoctorDetails] = useState([]);
  const doctorbyloc = useSelector((state) => state.setDoctorByLoc);
  console.log("doc by location ", doctorbyloc);
  // let doctorDetails;

  // <DocSection docData={searchDoc} />;

  return (
    <>
      <section className="section section-search">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-wrapper">
                <div className="banner-header">
                  <h1 className="mb-0">Search Doctor,</h1>
                  <h1 className="text-blue">
                    Book a Token and Skip Waiting in Queue For Hours
                  </h1>
                  <p>
                    Discover the best doctors nearest to you and book a token
                    easily.
                  </p>
                </div>
                <div className="search-box">
                  <form action="">
                    {/* <div className="search-item">
                        <div className="form-group search-location">
                          <input type="text" className="form-control" placeholder="Search Location" />
                          <span className="form-text">Based on your Location</span>
                        </div>
                        <div style={{marginBottom: '0px !important'}} className="form-group search-info">
                          <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                          <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                        </div>
                      </div> */}
                    {/* <div style={{marginTop: '10px'}} className="col-md-4 col-6 d-md-block">
                        <div className="sort-by">
                          <span style={{color: 'black'}} className="sort-title">Sort by</span>
                          <span className="sortby-fliter">
                            <select className="form-select">
                              <option>Select</option>
                              <option className="sorting">Name</option>
                              <option className="sorting">Rating</option>
                              <option className="sorting">Popular</option>
                              <option className="sorting">Fees</option>
                              <option className="sorting">Location</option>
                            </select>
                          </span>
                        </div>
                      </div> */}
                    <div className="search-item">
                      <div className="form-group">
                        <input
                          type="radio"
                          className=""
                          value="Current Location"
                          name="location"
                          checked
                        />{" "}
                        Current Location
                        {/* <span className="form-text">
                          Based on your Location
                        </span> */}
                      </div>
                    </div>
                    {/* <button
                      style={{
                        justifyContent: "center",
                        marginTop: "20px !important",
                      }}
                      type=""
                      // onClick={onSearch}
                      className="btn btn-primary search-btn mt-0"
                    >
                      Search
                    </button> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 banner-img">
              <img
                src="assets/img/banner.png"
                className="img-fluid"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
      {doctorbyloc && doctorbyloc.length > 0 && (
        <DocSection docData={doctorbyloc} />
      )}
    </>
  );
};

export default SearchDoc;
