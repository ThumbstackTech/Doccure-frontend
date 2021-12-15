import "./App.css";
// import RegisterPage from "./forms/register/RegisterPage"
import RegisterPage from "./components/forms/register/RegisterPage";
// import HomePage from './/homepage/HomePage';
import HomePage from "./components/homepage/HomePage";

// import { SignupMain } from "./components/forms/SignupMain";
// import { SignupPageFooter } from "./components/forms/SignupPageFooter";
import SignupPage from "./components/forms/SignupPage";
import FavourPage from "./components/favourities/FavourPage";
// import DocLogin from "./components/doctorapp/forms/DocLogin";
import DocRegister from "./components/doctorapp/forms/DocRegister";
// import DocProfile from "./components/doctorapp/forms/docprofile/DocProfile";
import DocDashboard from "./components/doctorapp/forms/docdash/DocDashboard";
import TokenBooking from "./components/tokenbooking/TokenBooking";
import { Routes, Route } from "react-router-dom";

import DocPro1 from "./components/homepage/DocPro1";

import DocLogin from "./components/doctorapp/forms/DocLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      {/* /user/:userName */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/homepage" element={<HomePage />} />

        <Route path="/docpro1/:doctorId" element={<DocPro1 />} />

        <Route path="/bookmark" element={<FavourPage />} />
        <Route path="/tokenbooking/:doctorId" element={<TokenBooking />} />
        {/* <Route
          path="/tokenbooking/:doctorId/:appointmentId"
          element={<TokenBooking />}
        /> */}
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route exact path="/doctorlogin" element={<DocLogin />} />
        <Route path="/doctorregistration" element={<DocRegister />} />
        <Route path="/doctordashboard" element={<DocDashboard />} />
        {/* <Route path="/doctor-profile" element={<DocProfile />} /> */}
      </Routes>
      {/* <SignupPage/>
    <RegisterPage/>
    <HomePage/>
    <DocProfile/>
    <FavourPage/>
    <TokenBooking/> 

    <DocLogin/>
    <DocRegister/>
    <DocDashboard/>
     */}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
