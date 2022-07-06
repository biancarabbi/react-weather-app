import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  <div className="weather-info">
    <h1>{props.data.city}</h1>
    <ul>
      <li>
        <FormattedDate date={props.data.date} />
      </li>
      <li>{props.data.description}</li>
    </ul>

    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>humidity: {props.data.humidity}%</li>
          <li>wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  </div>;
}