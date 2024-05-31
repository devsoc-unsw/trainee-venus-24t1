import '../style/meetup.css'

function Meetup({ meetupId }) {
  const currDate = new Date(new Date().setHours(0, 0, 0, 0));
  const nextDate = new Date(currDate);
  nextDate.setDate(currDate.getDate() + 1);

  const nextNextDate = new Date(nextDate);
  nextNextDate.setDate(nextDate.getDate() + 1);

  const timetable = {
    "title": "All my fellas",
    "start": 600,
    "end": 645,
    "timetable": [
      {
        "date": currDate,
        "times": [
          {
            "time": 600,
            "count": 2
          },
          {
            "time": 615,
            "count": 3
          },
          {
            "time": 630,
            "count": 1
          },
          {
            "time": 645,
            "count": 8
          },
        ]
      },
      {
        "date": nextDate,
        "times": [
          {
            "time": 600,
            "count": 5
          },
          {
            "time": 615,
            "count": 4
          },
          {
            "time": 630,
            "count": 1
          },
          {
            "time": 645,
            "count": 4
          },
        ]
      },
      {
        "date": nextNextDate,
        "times": [
          {
            "time": 600,
            "count": 4
          },
          {
            "time": 615,
            "count": 5
          },
          {
            "time": 630,
            "count": 4
          },
          {
            "time": 645,
            "count": 1
          },
        ]
      }
    ]
  }

  function getTimetable() {
    // fetch timetable from backend later
    return timetable;
  }

  function convertMinutesToTime(minutes) {
    // Calculate the hour and minute
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;

    // Determine AM or PM suffix
    let period = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert hour '0' to '12'

    // Format minutes to always have two digits
    mins = mins < 10 ? '0' + mins : mins;

    // Construct the final time string
    let timeString = hours + ":" + mins + " " + period;

    return timeString;
  }

  function Column() {
    const timetable = getTimetable();
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;

    timetable.timetable.forEach(date => {
      date.times.forEach(time => {
        min = Math.min(min, time.count);
        max = Math.max(max, time.count);
      });
    });

    function getColor(count) {
      const maxColor = [90, 101, 234]; // rgb(90, 101, 234)
      const minColor = [200, 200, 200]; // Light grey
      const ratio = (count - min) / (max - min);
      
      const r = Math.floor(minColor[0] + ratio * (maxColor[0] - minColor[0]));
      const g = Math.floor(minColor[1] + ratio * (maxColor[1] - minColor[1]));
      const b = Math.floor(minColor[2] + ratio * (maxColor[2] - minColor[2]));
  
      return `rgb(${r},${g},${b})`;
    }

    const times = [];
    for (let i = getTimetable().start; i <= getTimetable().end + 15; i += 15) {
      times.push(convertMinutesToTime(i));
    }

    return (
      <div style={{ marginRight: "50px" }}>
        <div style={{ display: "flex", borderRadius: "10px" }}>
          <div>
            <div style={{ margin: "15px 3px 0px 0px" }}>
              {times.map(time => (
                <p style={{ margin: "0px", height: "42px", display: "flex", alignItems: "flex-end", fontSize: "0.8rem" }}>{time}</p>
              ))}
            </div>
          </div>
          {timetable.timetable.map((date, index) => (
            <div key={index} id="date">
              <h5 id="day-and-month">{`${date.date.getDate()} ${date.date.toLocaleString('default', { month: 'short' })}`}</h5>
              <h3 id="day-of-week">{date.date.toLocaleString('default', { weekday: 'short' })}</h3>
              <div>
                {date.times.map((time, idx) => (
                  <div id="grid-square"
                    key={idx}
                    style={{
                      width: "100px",
                      height: "40px",
                      border: "2px solid rgb(60,60,60)",
                      backgroundColor: getColor(time.count),
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >{time.count}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{ color: "white", width: "50vw", display: "grid", justifyItems: "center" }}>
      <p style={{ fontSize: "0.5rem" }}>id is {meetupId}</p>
      <h1 id="title">{getTimetable().title}</h1>
      <Column />
    </div>
  );
}

export default Meetup;
