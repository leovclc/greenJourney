import './NavigationBar.css';
import React from 'react';
import icon from "../pages/icon.jpg";

function NavigationBar() {
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
        </li>  */}

        <li>
          <a href="/information">Information</a>
        </li>
           
      </ul>
    </nav>
  );
}

export default NavigationBar;