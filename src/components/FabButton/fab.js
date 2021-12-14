import React from 'react';
import './fab.css';
import $ from 'jquery';
import { useSelector } from 'react-redux';
import icon from "../../icons/icons8-circular-arrows-50.png";

// import axios from 'axios';

export const Fab = () => {
  const appointments = useSelector((state) => state.appointments);
  const consultedappointments = useSelector(
    (state) => state.consultedappointments
  );
  let current = consultedappointments.length;

  let total = appointments.length;
  let left = total - current;
  return (
    <>
      <div id='overlay' onClick={()=>{
          $('.fab').removeClass('active');
          $('#overlay').removeClass('dark-overlay');
          $('#loadicon').css('display','block');
      }}></div>
      <div class='fab' onClick={()=>{
          $('.fab').addClass('active');
          $('#overlay').addClass('dark-overlay');
          $('#loadicon').css('display','none');
  }}>
        <img id="loadicon" style={{position:"absolute"}} src={icon} alt=""/>
        <h1 style={{fontSize:"20px"}}>7</h1>
        <div className="drname"><h2>Dr.XYZ</h2></div>
        <div className='row cntt-wrapper'>
          <div className='dash-widget-info'>
            <h6 style={{ fontSize: '1.1rem' }} className='text-danger'>
              Total Patients In Queue
            </h6>
            <div className='dash-widget-count'>
              <h3>{appointments && appointments.length}</h3>
            </div>
          </div>
          <div className='dash-widget-info'>
            <h6 style={{ fontSize: '1.1rem' }} className='text-success'>
              Current Patient Token No.
            </h6>
            <div className='dash-widget-count'>
              <h3>{consultedappointments && consultedappointments.length}</h3>
            </div>
          </div>
          <div className='dash-widget-info'>
            <h6 style={{ fontSize: '1.1rem' }} className='text-info'>
              Patients Left
            </h6>
            <div className='dash-widget-count'>
              <h3>{left}</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-shadow--2dp center m-t-100">
                    <div class="box">
                    <h1>Material Popup</h1>
                    <h4>Just click the fancy button to see the magic</h4>
                    <br></br>
                    <p>This example uses the MDL-Libary for the CSS layout,<br/> the popup itself works it just fine without.</p>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default Fab;
