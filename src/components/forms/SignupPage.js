import React from "react";
import { SignupMain } from "./SignupMain";
import { SignupPageFooter } from "./SignupPageFooter";
import { SignupPageHeader } from "./SignupPageHeader";
// import axios from 'axios';

export const SignupPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <SignupPageHeader />
        <SignupMain />
        <SignupPageFooter />
      </div>
    </>
  );
};

export default SignupPage;
