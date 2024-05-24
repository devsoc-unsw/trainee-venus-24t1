import React from 'react';

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(30, 31, 34)',
        fontFamily: 'sans-serif',
        gap: '10px',
      }}>
      <h1 style={{ marginTop: '0px', padding: '10px', color: 'rgb(190, 210, 240)' }}>About Us</h1>
      <p style={{ fontSize: 'medium', lineHeight: '25px', maxWidth: '460px' }}>
        Time2gather is a web application that allows users to plan events with friends and family. Users can create an event, add a name, date, and time, and invite others to join. The app will then
        show the availability of all participants and suggest the best time for the event. Users can also view the calendar and times of all participants to see when everyone is available. Time2gather
        makes planning events easy and efficient!
      </p>
      <h1 style={{ marginTop: '0px', padding: '5px', color: 'rgb(190, 210, 240)' }}>Our Team</h1>
      <p style={{ fontSize: 'medium', lineHeight: '25px', maxWidth: '460px' }}>
        Time2gather was created by a team of developers who are passionate about making life easier for people. Our team is dedicated to creating innovative solutions that help people connect and
        spend time together. We hope you enjoy using Time2gather!
      </p>
      <h1 style={{ marginTop: '0px', padding: '5px', color: 'rgb(190, 210, 240)' }}>Support</h1>
      <p style={{ fontSize: 'medium', lineHeight: '25px', maxWidth: '460px', marginBottom: '25px' }}>Below is a tutorial video on how to use Time2gather:</p>
      <iframe
        width='460'
        height='315'
        src='https://www.youtube.com/embed/SSdmOOT1sAw?si=357VVuz1i2A4PNd5'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></iframe>
    </div>
  );
};

export default AboutUs;
