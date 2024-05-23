import { useState } from 'react'
import Calendar from './Calendar'
import Times from './Times'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        backgroundColor: 'rgb(30, 31, 34)',
        fontFamily: 'sans-serif',
        display: 'grid',
        justifyItems: 'center',
        gap: '20px'
      }}
    >
      <h1 style={{ marginTop: '0px', padding: '10px', color: 'rgb(190, 210, 240)' }}>
        Time<span style={{ color: 'rgb(110, 150, 210)' }}>2</span>gather
      </h1>
      <input id='event-name' type='text' placeholder='Enter event Name' 
        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', backgroundColor: 'rgb(220, 225, 240)'}}
      ></input>
      <Calendar/>
      <div>
        <Times/>
        <button id="create-event">
          Create Event
        </button>
      </div>
    </div>
  )
}

export default App
