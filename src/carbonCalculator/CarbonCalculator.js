import React, { useState } from 'react';
import './CarbonCalculator.css';


function CarbonCalculator() {
  const [vehicleType, setVehicleType] = useState('');
  const [drivingHours, setDrivingHours] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleDrivingHoursChange = (event) => {
    setDrivingHours(event.target.value);
  };

  const handleCalculateClick = () => {
    let carbonPerHour;
    if (vehicleType === 'car') {
      carbonPerHour = 10;
    } else if (vehicleType === 'truck') {
      carbonPerHour = 20;
    } else {
      return;
    }

    setCarbonFootprint(carbonPerHour * drivingHours);
  };

  return (
    <div>
      <label>
        Choose a vehicle type:
        <select value={vehicleType} onChange={handleVehicleTypeChange}>
          <option value="">--Please choose an option--</option>
          <option value="car">Small Car</option>
          <option value="truck">Large Truck</option>
        </select>
      </label>
      <br />
      <label>
        How many hours did you drive today?
        <input type="number" value={drivingHours} onChange={handleDrivingHoursChange} />
      </label>
      <br />
      <button onClick={handleCalculateClick}>Calculate Carbon Footprint</button>
      <br />
      <p>Your carbon footprint: {carbonFootprint} g CO2e</p>
    </div>
  );
}

export default CarbonCalculator;
