import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    const data = props.data;

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalized">{data.description}</li>
      </ul>

      <div className="row mt-3">
        {/*ICON + TEMPERATURE*/}
        <div className="col-6 d-flex align-items-center">
            <WeatherIcon code={data.icon} size={64} />
            <div className="ms-3">
                 <WeatherTemperature celsius={data.temperature} />
            </div>     
        </div>
         

        {/*DETAILS*/}
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}
