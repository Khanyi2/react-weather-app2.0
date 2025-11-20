import React from "react";
import axios from "axios";
import { useState } from "react";
import './Weather.css';
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    //const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] =useState({ready: false});

    function handleResponse(response){
        
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            date: new Date (response.data.time * 1000),
        });
        //setReady(true);
    }

    if (weatherData.ready){
        return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="text" placeholder="Enter a city..." className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn-primary" />
                </div>
                </div>
            </form>
        <WeatherInfo />    
        <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalized">{weatherData.description}</li>  
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"  className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 10%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
            </div>
        );

    } else {

    const apiKey = "d0o3t764a6d83cea9c0bfd4fda2bd33e";
    //let city = "New York";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    }
    
}