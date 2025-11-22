import React, {useState} from "react";


export default function WeatherTemperature(props) {
let [unit, setUnit] = useState("celsius");
if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
        <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>

        </div>
    );
} else {
    return "F";
}
}

