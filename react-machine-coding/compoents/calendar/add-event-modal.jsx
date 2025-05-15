import React, { useState } from "react";
import { formatDateTime } from "./helper.js";
import Modal from "../modal/modal";
import "./style.css";
const AddEventModal = ({
  setShowModal,
  setActivityData,
  selectedEventDetails,
  isUpdate
}) => {
  const [activityDetail, setActivityDetail] = useState({
  title: selectedEventDetails.title || "",
  type: selectedEventDetails.type || "TASK",
  start: selectedEventDetails.start || "",
  end: selectedEventDetails.end || "",
  eventId: selectedEventDetails.eventId || Date.now(), // or another fallback
});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityDetail({
      ...activityDetail,
      [name]:name === "end" || name === "start"
          ? new Date(`${value}`).getTime()
          : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isUpdate) {
     setActivityData((prev)=>{
     return prev.map((item)=>item.eventId==activityDetail.eventId ? activityDetail: item)
     })
    }else {
   setActivityData((prev) => {
      const temp = [...prev];
      return [...temp, activityDetail];
    });
    }
 
    setShowModal(false);
  };
  return (
    <Modal title="Create new event" setShowModal={setShowModal}>
      <div className="add-event-modal-container">
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Event name</label>
            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={activityDetail["title"]}
            />
          </div>
          <div className="form-input">
            <label>Event type</label>
            <select
              name="type"
              onChange={handleInputChange}
              value={activityDetail["type"]}
            >
              <option value="TASK">Task</option>
              <option value="HOLIDAY">Holiday</option>
            </select>
          </div>
          <div className="form-input">
            <label>Start Time</label>
            <input
              name="start"
              value={activityDetail["start"]?formatDateTime(activityDetail["start"]): activityDetail["start"]}
              type="datetime-local"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <label>End Time</label>
            <input
              name="end"
              value={activityDetail["end"]?formatDateTime(activityDetail["end"]):activityDetail["end"]}
              type="datetime-local"
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-footer">
            <button className="btn-primary" type="submit">
              {isUpdate? 'Update Event': 'Add Event'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default AddEventModal;
