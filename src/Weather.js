import React from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
    const apiKey = "d0o3t764a6d83cea9c0bfd4fda2bd33e";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}&units=metric`;
    return (
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
            <h1>New York</h1>
            <ul>
                <li>Monday 10:00</li>
                <li>Sunny</li>  
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"  className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">25</span>
                    <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 10%</li>
                        <li>Humidity: 60%</li>
                        <li>Wind: 10 km/h</li>
                    </ul>
                </div>
            </div>
            </div>
    )
}