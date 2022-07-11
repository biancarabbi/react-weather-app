import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" />
          <div className="forecast-temperatures">
            <span className="temperature-max">19°</span>
            <span className="temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
