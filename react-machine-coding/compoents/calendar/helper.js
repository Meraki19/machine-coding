export const formatDisplayTime = (hourindex) => {
  let baseHour = new Date();
  baseHour.setHours(hourindex, 0, 0, 0);
  return baseHour.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getEventHours = (starttimestamp) => {
  let p = new Date(starttimestamp);
  return p.getHours();
};

export const getEventDay = (starttimestamp) => {
  let q = new Date(starttimestamp);
  return q.getDay();
};
export const getEventDate = (starttimestamp) => {
  let y = new Date(starttimestamp);
  return y.getDate();
};
export const getbackground = () => {
  let p = `#${Math.floor(Math.random() * 1000)}`;
  return p;
};
export const formatDateTime = (eventTimestamp) => {
  let d = new Date(eventTimestamp);
  let isodate = d.toISOString();
  let formateddate = isodate.slice(0, 10);
  let hours = `${d.getHours()}`.padStart(2, 0);
  let mins = `${d.getMinutes()}`.padStart(2, 0);
  return `${formateddate}T${hours}:${mins}`;
};
export const getStartTimeMinutes = (start)=> {
 return new Date(start).getMinutes()
}
export const taskStyles = {
  HOLIDAY: "rgb(255 0 0 / 60%)",
  TASK: "rgb(22 71 158 / 54%)",
};

export const getDuration= (start,end)=> {

 let  durationInMS = new Date(end) - new Date(start)
  let seconds = durationInMS / 1000
  let minutes = seconds/60
  let hours = minutes/60
  let days = hours/24
// console.log(`${days}:${hours}:${minutes}`)

  return minutes

  
}
getDuration(1747386000000,1747393200000)