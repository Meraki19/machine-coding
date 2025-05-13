import React, { useEffect, useRef, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";
const InfiniteScroll = () => {
    console.log('am rendered')
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  let timerRef = useRef(null);
  const fetchData = async () => {
   setLoading(true)
    const p = await fetch("https://fakerapi.it/api/v2/books");
    const res = await p.json();
    console.log('test')
   
    setData((prev) => {
        const temp = [...prev];
        return [...temp, ...res["data"]];
      });
     setLoading(false)
     
  };
  const betterThrottle = (fn,limit)=> {
    let flag=true
    return function() {
        if(flag) {
            flag=false
            setTimeout(()=>{
                fn()
                flag=true
            },limit)
        }
       
    }
  }
  useEffect(() => {
    fetchData();
    timerRef.current= betterThrottle(fetchData,500)
  }, []);
  const handleScroll = (e) => {
    let { clientHeight, scrollTop, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
           timerRef.current()     
    }
  };
  return (
    <>
    <div
      className="container"
      style={{
        height: "300px",
        width: "30%",
        overflow: "auto",
      }}
      onScroll={handleScroll}
    >
      {data.map((book) => {
        return (
            <div key={`${book.id + Math.floor(Math.random() * Date.now())}`}>
          <Card >
            <CardHeader>{book.title}</CardHeader>
            <CardBody>{
            <>
            <p>{book.author}</p>
            <p>{book.description}</p>
            </>
            }</CardBody>
          </Card>
          </div>
        );
      })}
      
    </div>
    <div>{loading? <p>Loading....</p>:null}</div></>
  );
};
export default InfiniteScroll;
