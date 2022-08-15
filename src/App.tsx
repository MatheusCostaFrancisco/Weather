import React, { useState } from "react";
import "./assets/css/fonts.css";
import "./App.css";
import Icon from "./components/atoms/Icon/Icon";

function App() {
  const [state, setState] = useState("rainy");
  const colors = [
    "rainy",
    "cloudy",
    "night",
    "cloudyNight",
    "snowy",
    "sunny",
    "twilight",
    "sunrise",
  ];
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <div
      className={`base background-${state}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "50px",
      }}
    >
      {colors.map((bg) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #aaa",
              borderRadius: "12px",
              padding: "2px",
              textAlign: "center",
              width: "25vw",
              height: "10vh",
              color: "white",
              cursor: "pointer",
            }}
            className={`background-${bg}`}
            onClick={() => {
              setState(bg);
            }}
          >
            {toTitleCase(bg)}
          </div>
        );
      })}
      <div style={{ width: "54px" }}>
        <Icon name="temperature"></Icon>
      </div>
    </div>
  );
}

export default App;
