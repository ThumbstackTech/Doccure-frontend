import logo from './logo.svg';
import './App.css';
import RegisterPage from "./forms/register/RegisterPage"
import HomePage from './homepage/HomePage';
import Pro2 from './homepage/Pro2';
import { SignupMain } from './forms/SignupMain';
import { SignupPageFooter } from './forms/SignupPageFooter';
import SignupPage from './forms/SignupPage';
import FavourPage from './favourities/FavourPage';
import DocLogin from './doctorapp/forms/DocLogin';
import DocRegister from './doctorapp/forms/DocRegister';
import DocProfile from './doctorapp/forms/docprofile/DocProfile';
import DocDashboard from './doctorapp/forms/docdash/DocDashboard';
import TokenBooking from './tokenbooking/TokenBooking';
import {Routes, Route } from 'react-router-dom';


import axios from 'axios';
import DocPro from './homepage/DocPro'
import DocPro1 from './homepage/DocPro1';
import { Profile3 } from './homepage/Profile3';

const App = () => {
  return (

    <>

    <Routes>
      <Route  exact path="/homepage" element={<HomePage/>} />
      <Route path="/docpro1" element={<DocPro1/>} />
      <Route path="/docpro2" element={<Profile3/>} />
      <Route path="/docprooo" element={<Pro2/>} />
      <Route path="/prodoc" element={<DocPro/>} />
      <Route path="/bookmark" element={<FavourPage/>} />
      <Route path="/tokenbooking" element={<TokenBooking/>} />
      <Route path="/signuppage" element={<SignupPage/>} />
      <Route path="/registerpage" element={<RegisterPage/>} />
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
}

export default App;
