import React from 'react'

import SearchDoc from './SearchDoc';
import { SignupPageFooter } from '../forms/SignupPageFooter';
import { SignupPageHeader } from '../forms/SignupPageHeader';

export const HomePage = () => {

    const getLocation= (location) => {

        console.log(getLocation, "Location asdf" );

    
    }


    return (
        <>

<div className="main-wrapper">
          <SignupPageHeader />
          <div>
              <SearchDoc getLocation = {getLocation} />
             
          </div>
          <SignupPageFooter />
        </div>
            
        </>
    )
}

export default HomePage;