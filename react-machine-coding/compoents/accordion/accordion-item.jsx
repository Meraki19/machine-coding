import React from 'react'
import './style.css'
const AccordionItem = ({title,content, isOpen, handleAccordToggle})=>{
    console.log("asdf")
    return(<>
      <div className="accordion-item">
        <div className="accordion-header" onClick={handleAccordToggle}>
            <h3>{title}</h3>
            <span>V</span>
        </div>
        <div className= {`accordion-content ${isOpen ? 'show-content':''}`}>
            {isOpen && content}
        </div>
    </div>
    </>)
}
export default AccordionItem