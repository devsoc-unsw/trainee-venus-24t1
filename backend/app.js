import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { User, Timetable } from './models/models.js'
import { authenticateUser } from './routes/auth.js'

const app = express()
const port = 3200
const mongoDBURL = 'mongodb+srv://marcusryan143:tDi0VQg8No0oBmej@cluster0.0jxc2ty.mongodb.net/database-name?retryWrites=true&w=majority&appName=Cluster0';
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/auth', (req, res) => {
  const { name, password } = req.body;
  const userId = authenticateUser(name, password)

  if (!userId) {
    return res.status(401).json({ error: 'Invalid credentials' });
  } else {
    return res.json(userId);
  }
});

app.get('/timetable', (req, res) => {
  const timetableId = req.query.timetableId;
  const timetable = getTimetable(timetableId)

  if (!timetable) {
    return res.status(400).json({ error: 'Invalid input' });
  } else {
    return res.json(timetable);
  }
});

app.post('/timetable', (req, res) => {
  const { start, end, dates } = req.body;
  createTimetable(start, end, dates, (error, timetableId) => {
    if (error) {
      res.status(400).json({ error: 'Invalid input' });
    } else {
      res.json({ timetableId });
    }
  });
});

app.get('/user', (req, res) => {
  const timetableId = req.query.timetableId;
  const userId = req.query.userId;
  getUserTimes(timetableId, userId, (error, userTimes) => {
    if (error) {
      res.status(400).json({ error: 'Invalid input' });
    } else {
      res.json(userTimes);
    }
  });
});

app.put('/user', (req, res) => {
  const timetableId = req.query.timetableId;
  const userId = req.query.userId;
  updateUserTimes(timetableId, userId, (error) => {
    if (error) {
      res.status(400).json({ error: 'Invalid input' });
    } else {
      res.json({});
    }
  });
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