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

const TimetableSchema = new Schema({
  start: Number,
  end: Number,
  timetable: [DateSchema]
});

const UserSchema = new Schema({
  name: String,
  password: String,
  timetable: TimetableSchema
});

export const User = mongoose.model('User', UserSchema);
export const Timetable = mongoose.model('Timetable', TimetableSchema);
