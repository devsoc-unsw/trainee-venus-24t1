import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Meetup from './components/Meetup'; // Import Meetup component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/:meetupId" element={<MeetupWithParam/>}/>
      </Routes>
    </Router>
  );
}

function MeetupWithParam() {
  // Accessing the meetupId parameter using useParams
  const { meetupId } = useParams();
  console.log(meetupId);
  // Passing the meetupId as a prop to the Meetup component
  return <Meetup meetupId={meetupId} />;
}

export default App;
