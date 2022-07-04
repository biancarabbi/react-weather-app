import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city"
              className="form-control"
            />
          </div>

          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>São Paulo</h1>
      <ul>
        <li>Monday, 15h</li>
        <li>Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="sunny"
          />
          26°C
        </div>
        <div className="col-6">
          <ul>
            <li>rain: 0%</li>
            <li>humidity: 35%</li>
            <li>wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
