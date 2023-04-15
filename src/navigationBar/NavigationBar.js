import './NavigationBar.css';
import React from 'react';
import icon from "../pages/icon.jpg";
import { useState } from 'react';

function NavigationBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function handleDropdownToggle() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  return (
    <nav>
      <img src={icon}/>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/footprint">Trace</a>
        </li>
        {/* <li>
          <a href="/quiz">Quiz</a>
        </li>  */}

        {/* <li>
          <a href="/travel">Travel</a>
        </li>   */}
        <li className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <a>Information</a>
          <ul className={isDropdownVisible ? "visible" : "hidden"}>
            <li><a href="/information/city">State Information</a></li>
            <li><a href="/information/transport">Transport Information</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;