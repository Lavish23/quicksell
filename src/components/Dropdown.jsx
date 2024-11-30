// import React from "react";
// import "./styles.css";

// function Dropdown() {
//   return (
//     <div className="dropdown-menu">
//       <button>Option 1</button>
//       <button>Option 2</button>
//     </div>
//   );
// }

// export default Dropdown;

import React, { useState } from "react";
import "./styles.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle dropdown toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Display Button */}
      <button className="dropdown-button" onClick={handleToggle}>
        Display <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            <label>Grouping</label>
            <select>
              <option>Status</option>
              <option>User</option>
              <option>Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering</label>
            <select>
              <option>Priority</option>
              <option>Title</option>
            
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

