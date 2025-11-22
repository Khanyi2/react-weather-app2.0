import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    //const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] =useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    //Handles the response from the API
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            date: new Date (response.data.time * 1000),
        });
    }

    function search(){
    const apiKey = "d0o3t764a6d83cea9c0bfd4fda2bd33e";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);}

    function handleSubmit(event){
        event.preventDefault();
        search();
        
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    // useEffect(() => {
    //     search();
    // }, []);


    if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
    
}