import React, { useState } from "react";
import RiotGamesDropDownSiteMap from "./RiotGamesDropDownSiteMap";
import DropDownNavbar from "./DropDownNavbar";

const NavBar = () => {
  // Create a state variable to manage the visibility of the dropdown
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };
  return (
    <div>
      <nav className="flex mt-2">
        <div className="px-4 py-2 ">
          <button className="text-left px-3 py-2" onClick={toggleDropDown}>
            <h3 className="leading-3">
              Riot <br /> Games
            </h3>
          </button>
        </div>
        <div className="px-4 py-2 ">
          <DropDownNavbar />
        </div>
      </nav>
      {/* DROP DOWN  */}
      <div className="px-6 py-2">
        {isDropDownVisible && <RiotGamesDropDownSiteMap />}
      </div>
    </div>
  );
};

export default NavBar;
