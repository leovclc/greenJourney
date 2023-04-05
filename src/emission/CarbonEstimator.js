// src/components/CarbonEstimator/CarbonEstimator.js
import React, { useState } from 'react';
import './CarbonEstimator.css';

const CarbonEstimator = () => {
  const [formData, setFormData] = useState({
    type: '',
    distance: '',
  });

  const [resultsList, setResultsList] = useState([]);

  const typeValues = {
    large_car: 209.47,
    medium_car: 170.61,
    small_car:142.08,
    motorbike: 102.89,
    bus: 104.71,
    transit_rail: 35.08,
    large_airplane: 434.46,
    small_airplane: 233.6,
    electric_vehicle: 53.17
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const calculatedResult = formData.distance * typeValues[formData.type];
    setResultsList([...resultsList, calculatedResult]);
  };

  const handleReset = () => {
    setResultsList([]);
  };

  return (
    <div className="carbon-estimator">
      <h1>Carbon Estimator</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="type">Type:</label>
        <select className="select" name="type" id="type" value={formData.type} onChange={handleChange} required>
          <option value="">--Choose Type--</option>
          <option value="large_car">Large Car</option>
          <option value="medium_car">Medium Car</option>
          <option value="small_car">Small Car</option>
          <option value="motorbike">Motorbike</option>
          <option value="large_airplane">Large Airplane</option>
          <option value="bus">Bus</option>
          <option value="transit_rail">Transit Rail</option>
          <option value="large_airplane">Large Airplane</option>
          <option value="small_airplane">Small Airplane</option>
          <option value="electric_vehicle">electric Vehicle</option>
        </select>
       

        <br />
        <label htmlFor="distance">Distance (km):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={formData.distance}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Calculate</button>
      </form>
      <div className="results-total">
        <h2>Total: {resultsList.reduce((a, b) => a + b, 0)}</h2>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CarbonEstimator;
