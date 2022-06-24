import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeatherController } from "./infra/Controller/weather.controller";

function App() {
  const [data, setData] = useState({});

  const loadData = async () => {
    const getData = await WeatherController.getCurrentByCity("Araras");

    console.log("getData", JSON.stringify(getData, null, 2));
  };

  useEffect(() => {
    console.log("to aqui ein???");
    loadData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
