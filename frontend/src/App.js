import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./components/Login";
import TrainSchedule from "./components/TrainSchedule";
import "./Style/App.css";

function App() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.myjson.com/bins/18p5wd")
      .then((response) => response.json())
      .then((data) => {
        setTrains(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Home />
      <TrainSchedule trains={trains} loading={loading} />
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/stations">Stations</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/Register">Register</a></li>
          <li><a href="/login">Login</a></li>

        </ul>

    </div>
  );
}

export default App;
