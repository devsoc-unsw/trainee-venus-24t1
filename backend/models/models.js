import mongoose from "mongoose";
const { Schema } = mongoose;

const TimeSchema = new Schema({
  time: Number,
  count: Number
});

const DateSchema = new Schema({
  date: String,
  times: [TimeSchema]
});

const UserSchema = new Schema({
  name: String,
  password: String,
  timetableId: String,
  timetable: [DateSchema]
});

const TimetableSchema = new Schema({
  start: Number,
  end: Number,
  timetable: [DateSchema]
});

export const User = mongoose.model('User', UserSchema);
export const Timetable = mongoose.model('Timetable', TimetableSchema);
