import Timetable from "../models/models.js"

export function getTimetable(timetableId) {
  const timetable = Timetable.findOne(ObjectId(timetableId))

  if (timetable) {
    return timetable
  }
  return null
}
