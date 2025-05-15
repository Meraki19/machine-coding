import React, { useEffect, useState } from "react";
import { weekData } from "./mock-data";
import Hours from "./Hours";
import "./style.css";
const Calendar = () => {
  let date = new Date();
  const today = date.getDate(); //give u the date
  const day = date.getDay(); // this gives the current day
  const [activityData, setActivityData] = useState(weekData);
  const [startOfWeekDate, setStartOfWeekDate] = useState(today - day);


  return (
    <div className="calendar-dimension">
      <div className="week-navigator">
        <button onClick={() => setStartOfWeekDate(startOfWeekDate - 7)}>
          ⬅️
        </button>
        <button onClick={() => setStartOfWeekDate(currentWeek)}>
          Current Week
        </button>
        <button onClick={() => setStartOfWeekDate(startOfWeekDate + 7)}>
          ➡️
        </button>
      </div>
      <div className="days">
        <div style={{ width: "100px" }}>
          <p> </p>
        </div>
        {Array.from({ length: 7 }, (_, i) => {
          date.setDate(startOfWeekDate + i);
          return (
            <div key={i * Date.now()} className="day">
              <p>
                {date.toLocaleDateString("en-US", {
                  day: "numeric",
                  weekday: "short",
                })}
              </p>
              {date.getDate() == today && (
                <span className="hightlight-today"></span>
              )}
            </div>
          );
        })}
      </div>

      {
        <div className="hours-container">
          <Hours startOfWeekDate={startOfWeekDate}  weekData={activityData} setActivityData={setActivityData}/>
        </div>
      }
    </div>
  );
};
export default Calendar;
