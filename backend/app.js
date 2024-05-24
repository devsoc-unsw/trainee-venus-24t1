import express from 'express';
const app = express()
const port = 3200

// Import route modules
// import timetableRoutes from './routes/timetable'
// import userRoutes from './routes/user'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Use route modules
// app.use('/timetable', timetableRoutes)
// app.use('/user', userRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})