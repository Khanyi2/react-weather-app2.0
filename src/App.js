import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="New York"/>
      <footer>
        This project was coded by Khanyi {" "}
      <a href='https://github.com/Khanyi2/react-weather-app2.0' target='_blank' rel="noreferrer"> and open-sourced on GitHub</a>
      and {" "}
      <a href='https://imozuluyereact.netlify.app' target='_blank' rel="noreferrer">Hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
