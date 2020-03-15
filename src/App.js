import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="london, gb" />
      <WeatherEngine location="colombo, lk" />
      <WeatherEngine location="kandy, lk" />
    </div>
  );
}

export default App;
