import React from 'react';
import Weather from '../demoAPI/Weather';
import CarbonCalculator from '../carbonCalculator/CarbonCalculator';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Weather />
      
    </div>
  );
}

export default Home;