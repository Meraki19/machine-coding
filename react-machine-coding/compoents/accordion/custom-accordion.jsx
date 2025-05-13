import React, { useState } from "react";
import AccordionItem from "./accordion-item";

const CustomAccordion = () => {

  const data = [
    {
        id:"one",
      title: "Title 1",
      content: "Some contetn",
    },
    {
        id:"two",
      title: "Title 2",
      content: "Some content2",
    },
    {
      id:"three",
    title: "Title 3",
    content: "Some content3",
  },
  ];
  const [isOpenIndex, setIsOpenIndex] = useState(0)
  return(<>
  {
   
    data.map((dataitem,index)=> {
       
       return <AccordionItem key={dataitem.id}
        title= {dataitem.title}
        content={dataitem.content}
        isOpen={isOpenIndex==index}
        handleAccordToggle={
          ()=>{
            setIsOpenIndex(isOpenIndex==index? -1 : index)
          }
        }
        />
       
    })
  }
  </>)
};
export default CustomAccordion;
