import React, { useState, useEffect } from 'react';

function TrainSchedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch the train schedule data from the server
    fetch('/api/schedule')
      .then(response => response.json())
      .then(data => setSchedule(data));
  }, []);

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Station</th>
            <th>Departure Time</th>
            <th>Arrival Station</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(train => (
            <tr key={train.id}>
              <td>{train.number}</td>
              <td>{train.departureStation}</td>
              <td>{train.departureTime}</td>
              <td>{train.arrivalStation}</td>
              <td>{train.arrivalTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainSchedule;
