import React, { useState } from "react";
import './accordion.css';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordionItem">
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="accordionBtn">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
    </div>
  )
}

export default Accordion;

