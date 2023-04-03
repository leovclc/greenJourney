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
import TrafficMap from './pages/TrafficMap';
import CarbonEstimator from './emission/CarbonEstimator';




function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
             <HomePage></HomePage>
        </Route>

        <Route path="/footprint">
          <div>
           <div className="App">
             <h1>Melbourne Traffic</h1>
             <TrafficMap />
           </div>

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
          <CarbonEstimator></CarbonEstimator>

        
        </Route>

      </Switch>
    </Router>
  );
}

export default App;