import { User, Timetable } from "../models/models.js"

export function authenticateUser(name, password) {
  const user = User.findOne({ name: name })

  if (user) {
    if (user.password === password) {
      return user._id.toString()
    }
    return null
  }
  const newTimetable = new Timetable();

  const newUser = new User({
    name: name,
    password: password,
    timetable: newTimetable
  });
  newUser.save()
  return newUser._id.toString()
}
