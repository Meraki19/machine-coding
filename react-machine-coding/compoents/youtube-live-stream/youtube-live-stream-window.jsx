import React, { useEffect, useRef, useState } from "react";
import ChatItem from "./chat-item";
import "./style.css";

const SIZE_LIMIT = 10;
const YoutubeLiveStreamWindow = () => {
  const [chatItems,setChatItems] = useState([])
  const chatContainerRef = useRef(null);
const displayQueue = useRef([])
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3005/getLiveStreamChat");
      const data = await res.json();
      if (data) {
       displayQueue.current = [...displayQueue.current, ...data]
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      const nextMessage = displayQueue.current.shift()
   
      if(nextMessage) {
        setChatItems((prev)=>{
          let temp = [...prev]
          if(temp.length>SIZE_LIMIT)temp.splice(0,SIZE_LIMIT)
          
           return [...temp,nextMessage]
          })
      }
      
    }, 1000);


    return ()=>{
      clearInterval(timer)
    }
  }, []);

  return (
    <div className="youtube-stream-container">
      <div className="video-container">
        <img
          src="https://marketplace.canva.com/EAE0krlP91c/1/0/1600w/
            canva-orange-yellow-minimalist-aesthetic-a-day-in-my-life-travel-vlog-youtube-thumbnail--kLeYvBPuio.jpg"
        />
      </div>
      <div className="chats">
        <div className="chat-container" ref={chatContainerRef}>
          {chatItems.map((chatItem) => {
         
            return (
              <ChatItem
                key={chatItem?.message}
                {...chatItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default YoutubeLiveStreamWindow;


