import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordionItem">
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}
    </div>
  )
}

