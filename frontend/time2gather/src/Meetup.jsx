function Meetup({ meetupId }) {
  const timetable = {
    "start": 600,
    "end": 615,
    "timetable": [
      {
        "date": "18-05-2024",
        "times": [
          {
            "time": 600,
            "count": 2
          }
        ]
      }
    ]
  }


  return (
    <>
      <p style={{ color: "white" }}>{meetupId}</p>
    </>
  );
}

export default Meetup;
