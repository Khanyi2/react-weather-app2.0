import react from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalized">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
        <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
        </div>

      <div className="row">
        <div className="col-9 d-flex align-items-center">

          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />

          <div className="ms-2">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="col-3">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  );
}
