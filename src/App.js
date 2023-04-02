import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import DemoAPI from './demoAPI/DemoAPI';
import React, {useState} from 'react'
import axios from 'axios'
import CarbonCalculator from './carbonCalculator/CarbonCalculator';
import Weather from './demoAPI/Weather';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quiz from './quiz/Quiz';
import HomePage from './pages/HomePage';
import Information from './pages/Information';
import Chart from './pages/Chart';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <div>
                        
             <Home></Home>
             <HomePage></HomePage>    
          </div>
        </Route>

        <Route path="/footprint">
          <div>
            <CarbonCalculator>

            </CarbonCalculator>
          </div>         
        </Route>

        <Route path="/quiz">
          <Quiz></Quiz>
        </Route>
        
        <Route path="/travel">
        <Weather></Weather> 
        </Route>

        <Route path="/information">
          <Chart></Chart>
        
        </Route>

      </Switch>
    </Router>
  );
}

export default App;