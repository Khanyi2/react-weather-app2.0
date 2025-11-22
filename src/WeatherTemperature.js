import React, {useState} from "react";


export default function WeatherTemperature(props) {
let [unit, setUnit] = useState("celsius");

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}
if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
        <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C | <a href="/" onClick={convertToFahrenheit}>°F</a></span>
        </div>
    );
} else {
    return(
    <div className="WeatherTemperature">
        <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">
                <a href="/" onClick={convertToCelsius}>°C </a>
                {" "}| °F</span>
        </div>
    );
}
}

