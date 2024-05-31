import Timetable from "../models/models.js"

export function getTimetable(timetableId) {
  const timetable = Timetable.findOne(ObjectId(timetableId))

  if (timetable) {
    return timetable
  }
  return null
}

export function createTimetable(start, end, dates) {
  if (typeof start !== 'number' || typeof end !== 'number') {
    return null
  }

  for (const date of dates) {
    if (!(date instanceof Date && !isNaN(date.getTime()))) {
      return null
    }
  }

  const newTimetable = new Timetable(
    {
      start: start,
      end: end,
      timetable: dates
    });

  newTimetable.save()
  return newTimetable._id.toString()
}
