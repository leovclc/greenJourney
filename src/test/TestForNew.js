import React, { useState, useEffect } from 'react';

const TestForNew = () => {
  const [newInfoList, setNewInfoList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/emissions/allCityName')
      .then(response => response.json())
      .then(data => setNewInfoList(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <select>
      {newInfoList.map(city => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  );
};

export default TestForNew;