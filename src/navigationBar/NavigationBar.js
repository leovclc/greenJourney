import './NavigationBar.css';
import React from 'react';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/footprint">Trace</a>
        </li>
        <li>
          <a href="/quiz">Quiz</a>
        </li> 
        <li>
          <a href="/travel">Travel</a>
        </li>  
        <li>
          <a href="/information">Information</a>
        </li>
           
      </ul>
    </nav>
  );
}

export default NavigationBar;