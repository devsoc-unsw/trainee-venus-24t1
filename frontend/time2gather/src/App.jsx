import { useState } from 'react'
import Calendar from './Calendar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        backgroundColor: 'rgb(49, 51, 56)',
        width: '100vw',
        height: '100vh',
        fontFamily: 'sans-serif'
      }}
    >
      <h1 style={{ marginTop: '0px', padding: '10px', color: 'rgb(190, 210, 240)' }}>
        Time<span style={{ color: 'rgb(110, 150, 210)' }}>2</span>gather
      </h1>
      <Calendar/>
    </div>
  )
}

export default App
