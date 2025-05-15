import React, { useEffect, useState } from "react";
import CalendarActivity from "./calendar-activity";
import AddEventModal from "./add-event-modal";
import {
  formatDisplayTime,
  getEventHours,
  getEventDate,
  taskStyles,
  getEventDay,
  getDuration,
  getStartTimeMinutes,
} from "./helper";
import "./style.css";

let defaultSelectedEventDetails = {
  title: "",
  type: "TASK",
  start: "",
  end: "",
  eventId: Date.now(),
};
const Hours = ({ startOfWeekDate, weekData, setActivityData }) => {
  const [currentWeekData, setCurrentWeekData] = useState([]);
  const [selectedEventDetails, setSelectedEventDetails] = useState(
    defaultSelectedEventDetails
  );
  const [isUpdate, setIsUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    let data = weekData.filter((item) => {
      let endOfWeekDate = startOfWeekDate + 6;
      let activityStartDate = new Date(item.start).getDate();
      return (
        startOfWeekDate <= activityStartDate &&
        activityStartDate <= endOfWeekDate
      );
    });
    setCurrentWeekData(data);
  }, [weekData]);

  const handleOpenAddEventModal = (currentevent, isEdit, e) => {
    e.stopPropagation();
    if (isEdit) {
      setSelectedEventDetails(currentevent);
      setIsUpdate(true);
    } else {
      setSelectedEventDetails(defaultSelectedEventDetails);
    }
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <AddEventModal
          isUpdate={isUpdate}
          setShowModal={setShowModal}
          setActivityData={setActivityData}
          selectedEventDetails={selectedEventDetails}
        />
      )}
      {Array.from({ length: 24 }, (_, hourIndex) => {
        return (
          <div className="hours-section" key={hourIndex}>
            <p className="display-hr">{formatDisplayTime(hourIndex)}</p>
            {/* for each hour u need to find the day the event comes in */}
            {Array.from({ length: 7 }, (_, dayIndex) => {
              //loop through the data and check if the dayindex and hour index matches the given start  if so
              //store it in a array

              let test = currentWeekData.filter((eventItme) => {
                let hourOftheEvent = getEventHours(eventItme.start);
                let dayofEvent = getEventDay(eventItme.start);
                let dateofEvent = getEventDate(eventItme.start);
                let currentHour = hourIndex;
                let currentDay = dayIndex;
                return (
                  hourOftheEvent === currentHour &&
                  dayofEvent === currentDay &&
                  dateofEvent === startOfWeekDate + dayIndex
                );
              });
              if (test.length == 0) {
                return (
                  <div
                    key={hourIndex + dayIndex}
                    className="activity-tab"
                    onClick={(e) => handleOpenAddEventModal(_, false, e)}
                  ></div>
                );
              } else {
                return (
                  <div
                    className="activity-tab"
                    key={`${hourIndex}-${dayIndex}`}
                    onClick={(e) => handleOpenAddEventModal(_, false, e)}
                  >
                    {test.map((item) => (
                      <p
                        onClick={(e) => handleOpenAddEventModal(item, true, e)}
                        style={{
                          backgroundColor: taskStyles[`${item.type}`],
                          height: getDuration(item.start, item.end),
                          top: getStartTimeMinutes(item.start),
                        }}
                        key={item.title}
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </>
  );
};
export default Hours;
