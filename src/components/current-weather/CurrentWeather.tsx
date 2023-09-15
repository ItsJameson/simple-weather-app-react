import React, { useState } from "react";
import "../../App.css";
import { Weather } from "../../types";
import skybackground from "../../img/sky-background.jpg";
import { GetForcast } from "../forecast/Forecast";
import { GetDayOfWeek } from "../dayOfWeek/DayOfWeek";
import { fetchWeatherData } from "../../api/fetchWeatherData";

function WeatherFunction (){
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  const onLoad = async () =>{
    if (weatherData === null) {
      setWeatherData(await fetchWeatherData("Brussels"));
    }
  }
  onLoad();

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const fetchData = async () => {
      let tempData = weatherData;
      let apiData = await fetchWeatherData(city);
      if (apiData != null){
        setWeatherData(apiData);
      }
      else{
        setWeatherData(tempData);
      }
  };

  return (
    <section
      style={{ backgroundImage: `url(${skybackground})` }}
      className="h-screen flex items-center justify-between flex-col"
    >
      <header></header>

      <div id="main" className="w-3/4 h-auto flex flex-col justify-center text-center rounded-3xl shadow-bottomOnly max-w-lg mx-8 bg-background-color">
        {/* Main */}

        <div className="h-auto w-full min-h-30 rounded-t-3xl bg-foreground-color">
          <input
            className="w-2/3 min-h-35 rounded-tl-3xl text-center bg-foreground-color text-lg text-text-faded"
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
          />
          <button
            className="w-1/3 text-lg bg-foreground-color rounded-tr-3xl"
            onClick={fetchData}
          >
            Search
          </button>
        </div>

        {weatherData && (
          <div className="w-full h-full flex flex-col justify-around place-self-center rounded-3xl">
            <div className="bg-foreground-color rounded-b-3xl flex flex-col justify-items-center">
              <div className="pt-8 pb-3">
                <p className="font-bold text-3xl">
                  {weatherData.location.name},<br />
                  {weatherData.location.country}
                </p>

                <p className="text-text-faded text-xl flex flex-row justify-center pt-2">
                  <GetDayOfWeek
                    forecastday={weatherData.forecast.forecastday}
                  />
                  ,{weatherData.location.localtime.substring(8, 10)}-
                  {weatherData.location.localtime.substring(5, 7)}-
                  {weatherData.location.localtime.substring(0, 4)}
                </p>
                <h2 className="text-8xl tracking-tight py-4">
                  {weatherData.current.temp_c}
                  <span>
                    &deg;
                    <a className="text-5xl text-pale-blue-color" href="">
                      c
                    </a>
                  </span>
                </h2>
                <img
                  className="mx-auto w-24"
                  src={weatherData.current.condition.icon}
                  alt=""
                />
                <p>{weatherData.current.condition.text}</p>
              </div>
              <div className="bg-pale-blue-color rounded-3xl w-11/12 place-self-center mb-6 mt-4 p-3 shadow-lg">
                <div className="flex flex-row gap-4 justify-center py-px">
                  <p>
                    H:{" "}
                    {Math.ceil(
                      weatherData.forecast.forecastday[0].day.maxtemp_c
                    )}
                    &deg;
                  </p>
                  <p>
                    L:{" "}
                    {Math.ceil(
                      weatherData.forecast.forecastday[0].day.mintemp_c
                    )}
                    &deg;
                  </p>
                </div>
                <div>
                  <p className="p-1">
                    Humidity: {Math.ceil(weatherData.current.humidity)} %
                  </p>
                  <p className="p-1">
                    Wind: {Math.ceil(weatherData.current.wind_kph)} kph{" "}
                    {weatherData.current.wind_dir}
                  </p>
                </div>
              </div>
            </div>
            <GetForcast forecastday={weatherData.forecast.forecastday} />
          </div>
        )}
      </div>
      <footer className="text-text-faded p-2">&copy; 2023 James Leipert</footer>
    </section>
  );
}

export default WeatherFunction;
