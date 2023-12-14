import React, { useState } from "react";
import {RiArrowDropDownLine} from "react-icons/ri"
import "./Card.css";

const Dropdown = ({months,setSelectedMonth ,selectedMonth}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
     const handleSelectMonth = (month) => {
        const selectedIndex = months.indexOf(month);
        setSelectedMonth(selectedIndex);
        setIsOpen(false);
  };
  
    return (
      <div className="dropdown-container ">
        <button className="dropdown-button text-grey-500" onClick={toggleDropdown}>
        {months[selectedMonth]}<RiArrowDropDownLine className="dropdown-icon text-grey-500"  />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
                  {months.map((element) => (
            <p key={element} onClick={() => handleSelectMonth(element)}>{element}</p>
          ))}
          </div>
        )}
      </div>
    );
  };
  

export default Dropdown;