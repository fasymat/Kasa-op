import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropdownList = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron-icon ${isOpen ? "rotate" : ""}`}
        />
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        <div className="equipment-list">
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <div key={index} className="equipment-item">
                {item}
              </div>
            ))
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
