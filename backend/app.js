import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
const app = express()
const port = 3200
const mongoDBURL = 'mongodb+srv://marcusryan143:tDi0VQg8No0oBmej@cluster0.0jxc2ty.mongodb.net/database-name?retryWrites=true&w=majority&appName=Cluster0';
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/auth', (req, res) => {
  const { name, password, timetableId } = req.body;
});

app.get('/timetable', (req, res) => {
  const timetableId = req.query.timetableId;
});

app.post('/timetable', (req, res) => {
  const { start, end, dates } = req.body;
});

app.get('/user', (req, res) => {
  const timetableId = req.query.timetableId;
  const userId = req.query.userId;
});

app.put('/user', (req, res) => {
  const { timetableId, userId } = req.body;
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.log(error);
  })

app.use((req, res) => {
  const error = `
    404 Not found - This could be because:
      0. You have defined routes below (not above) this middleware in server.ts
      1. You have not implemented the route ${req.method} ${req.path}
      2. There is a typo in either your test or server, e.g. /posts/list in one
         and, incorrectly, /post/list in the other
      3. You are using ts-node (instead of ts-node-dev) to start your server and
         have forgotten to manually restart to load the new changes
      4. You've forgotten a leading slash (/), e.g. you have posts/list instead
         of /posts/list in your server.ts or test file
  `;
});