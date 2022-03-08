import React, { useState } from "react";
import Event from "./Event";
import "./Events.css";
const Events = () => {
  const [eventData, setEventData] = useState([]);
  return (
    <div className="body">
      <Event
        orgName="TLE Mec"
        img="url(https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80)"
      />
      <Event
        orgName="Placement Cell"
        img="url(https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80)"
      />
    </div>
  );
};

export default Events;
