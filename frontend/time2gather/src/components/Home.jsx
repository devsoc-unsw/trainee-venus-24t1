import { useState } from 'react';
import Calendar from './Calendar';
import Times from './Times';
import '../style/homeStyle.css';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [page, setPage] = useState('plan');
  const navigate = useNavigate();

  const handleCreateMeetup = () => {
    const meetupId = '13241234'
    console.log(meetupId);
    navigate(`/${meetupId}`);
  };

  return (
    <>
      <NavBar style={{ maxWidth: '300px' }} setStatus={(state) => setPage(state)} />
      {page === 'plan' ? (
        <div
          style={{
            backgroundColor: 'rgb(30, 31, 34)',
            display: 'grid',
            justifyItems: 'center',
            gap: '20px',
            paddingTop: '20px',
          }}>
          <input id='event-name' type='text' placeholder='Enter event Name' style={{ width: '100%', padding: '10px', boxSizing: 'border-box', backgroundColor: 'rgb(220, 225, 240)' }}></input>
          <Calendar />
          <div>
            <Times />
            <button id='create-event' onClick={handleCreateMeetup}>Create Event</button>
          </div>
        </div>
      ) : (
        <AboutUs />
      )}
    </>
  );
}

export default Home;
