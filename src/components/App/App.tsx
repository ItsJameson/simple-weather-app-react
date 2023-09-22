import {useEffect} from "react";
import "./App.css";
import WeatherFunction from "../CurrentWeather/CurrentWeather";

function App() {
  useEffect(() =>{
    document.title = "Weather App";
  })
  return <WeatherFunction />;
}

export default App;
