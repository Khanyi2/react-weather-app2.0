import react from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="d-flex">
            <div>
            <WeatherIcon code={props.data.icon} size={64} />
            </div>
         

      <div className="row">
        <div className="col-9 d-flex align-items-center">
          <div className="ms-2">
            <WeatherTemperature celsius={props.data.temperature} />
            
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
    </div>
    </div>
    
  );
}
