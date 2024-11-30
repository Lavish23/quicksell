import React from "react";
import Dropdown from "./Dropdown";


function Header() {
  return (
    <div className="header">
      <div className="header-left">
        {/* <button className="dropdown">Display</button> */}
        <Dropdown/>
      </div>
      
    </div>
  );
}

export default Header;
