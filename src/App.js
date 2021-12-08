import "./App.css";
// import RegisterPage from "./forms/register/RegisterPage"
import RegisterPage from "./components/forms/register/RegisterPage";
// import HomePage from './/homepage/HomePage';
import HomePage from "./components/homepage/HomePage";
import Pro2 from "./components/homepage/Pro2";
// import { SignupMain } from "./components/forms/SignupMain";
// import { SignupPageFooter } from "./components/forms/SignupPageFooter";
import SignupPage from "./components/forms/SignupPage";
import FavourPage from "./components/favourities/FavourPage";
// import DocLogin from "./components/doctorapp/forms/DocLogin";
import DocRegister from "./components/doctorapp/forms/DocRegister";
import DocProfile from "./components/doctorapp/forms/docprofile/DocProfile";
import DocDashboard from "./components/doctorapp/forms/docdash/DocDashboard";
import TokenBooking from "./components/tokenbooking/TokenBooking";
import { Routes, Route } from "react-router-dom";

// import axios from "axios";
// import DocPro from "./components/homepage/DocPro";
import DocPro1 from "./components/homepage/DocPro1";
import { Profile3 } from "./components/homepage/Profile3";
import DocLogin from "./components/doctorapp/forms/DocLogin";

const App = () => {
  return (
    <>
      {/* /user/:userName */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/homepage" element={<HomePage />} />

        <Route path="/docpro1/:doctorId" element={<DocPro1 />} />
        <Route path="/docpro2" element={<Profile3 />} />
        <Route path="/docprooo" element={<Pro2 />} />
        {/* <Route path="/prodoc" element={<DocPro />} /> */}
        <Route path="/bookmark" element={<FavourPage />} />
        <Route path="/tokenbooking" element={<TokenBooking />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/doctor-login" element={<DocLogin />} />
        <Route path="/doctor-registration" element={<DocRegister />} />
        <Route path="/doctor-dashboard" element={<DocDashboard />} />
        <Route path="/doctor-profile" element={<DocProfile />} />
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
    </>
  );
};

export default App;
