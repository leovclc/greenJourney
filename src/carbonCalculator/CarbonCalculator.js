import React, { useState } from 'react';
import './CarbonCalculator.css';


const CAR_BRANDS = [
  {
    name: "ACURA",
    models: [
      { name: "COMPACT", emission: 160 },
      { name: "MID-SIZE", emission: 230 },
      { name: "FULL-SIZE", emission: 250 }
    ]
  },
  {
    name: "AUDI",
    models: [
      { name: "COMPACT", emission: 200 },
      { name: "MID-SIZE", emission: 230 },
      { name: "FULL-SIZE", emission: 250 }
    ]
  },
  {
    name: "Other",
    models: [
      { name: "COMPACT", emission: 180 },
      { name: "MID-SIZE", emission: 210 },
      { name: "FULL-SIZE", emission: 230 }
    ]
  }
];

function CarbonCalculator() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState("");

  function handleBrandChange(event) {
    setBrand(event.target.value);
    setModel("");
  }

  function handleModelChange(event) {
    setModel(event.target.value);
  }

  function handleDistanceChange(event) {
    setDistance(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const carModel = CAR_BRANDS.find(b => b.name === brand)?.models.find(m => m.name === model);
    if (carModel && distance) {
      const carbonEmission = carModel.emission;
      const carbonTotal = carbonEmission * distance;
      setResult(`${carbonTotal} g`);
    } else {
      setResult("Please select brand, model and distance");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a vehicle type:
          <select value={brand} onChange={handleBrandChange}>
            <option value="">--Select Brand--</option>
            {CAR_BRANDS.map(b => (
              <option key={b.name} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        {brand && (
          <label>
            Choose a car model:
            <select value={model} onChange={handleModelChange}>
              <option value="">--Select Model--</option>
              {CAR_BRANDS.find(b => b.name === brand)?.models.map(m => (
                <option key={m.name} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>
        )}
        {model && (
          <label>
            Distance driven (km):
            <input type="number" value={distance} onChange={handleDistanceChange} />
          </label>
        )}
        <button type="submit">Calculate</button>
      </form>
      {result && <p>Carbon emission: {result}</p>}
    </div>
  );
}

export default CarbonCalculator;
