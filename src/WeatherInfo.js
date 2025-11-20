import react from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalized">{props.data.description}</li>  
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"  className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 10%</li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
            </div>
            );
}