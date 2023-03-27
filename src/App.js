import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import DemoAPI from './demoAPI/DemoAPI';
import React, {useState} from 'react'
import axios from 'axios'
import CarbonCalculator from './carbonCalculator/CarbonCalculator';
import Weather from './demoAPI/Weather';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quiz from './quiz/Quiz';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <div>            
            <Weather></Weather>            
          </div>
        </Route>

        <Route path="/footprint">
          <div>
            <CarbonCalculator>

            </CarbonCalculator>
          </div>         
        </Route>

        <Route path="/travel">
          <Quiz></Quiz>
        </Route>
        
        <Route path="/other">
          
        </Route>

      </Switch>
    </Router>
  );
}

export default App;