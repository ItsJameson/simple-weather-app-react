import {useEffect} from "react";
import "./App.css";
import WeatherFunction from "./components/current-weather/CurrentWeather";

function App() {
  useEffect(() =>{
    document.title = "Weather App";
  })
  return <WeatherFunction />;
}

export default App;
