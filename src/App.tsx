import React, { useEffect } from "react";

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

  return <div className="background">Olá</div>;
}

export default App;
