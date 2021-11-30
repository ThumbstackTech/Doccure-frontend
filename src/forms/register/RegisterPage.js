import React from 'react'
import { SignupPageFooter } from '../SignupPageFooter';
import { SignupPageHeader } from '../SignupPageHeader';
import { RegisterMain } from './RegisterMain';

export const RegisterPage = () => {
    return (
        <>
           
        <div className="main-wrapper">
          <SignupPageHeader />
          <RegisterMain />
          <SignupPageFooter />
        </div> 
        </>
    )
}

           
export default RegisterPage;