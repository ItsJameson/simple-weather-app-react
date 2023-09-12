import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import { Weather, Forecast } from "../../types";
import skybackground from "../../img/sky-background-2.jpg";

const GetForcast: React.FC<Forecast> = ({ forecastday }) => {
  const itemElements = forecastday.map((item, index) => (
    <div
      key={index}
      className="bg-pale-blue-color p-2 rounded-full h-full shadow-lg"
    >
      <p className="p-2 text-center">Sun</p>
      <p className="p-2 text-center">{Math.ceil(item.day.maxtemp_c)}&deg;</p>
      <p className="p-2 text-center text-text-faded" id="forecase-day-min">
        {Math.ceil(item.day.mintemp_c)}&deg;
      </p>
    </div>
  ));

  return (
    <div className="h-full w-full flex flex-row justify-evenly place-self-center mt-3 mb-3 bg-background-color">
      {itemElements}
    </div>
  );
};

function WeatherFunction() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get<Weather>(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${skybackground})` }}
      className="h-screen flex items-center justify-center flex-col"
    >
      <div className="w-3/4 h-6/12 flex flex-col justify-center place-self-cente rounded-t-xl text-center rounded-3xl shadow-bottomOnly max-w-lg mx-8">
        <div className="h-auto w-full min-h-30 rounded-t-2xl bg-foreground-color">
          <input
            className="w-2/3 min-h-30 rounded-tl-2xl text-center"
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
          />
          <button className="w-1/3" onClick={fetchWeatherData}>
            Search
          </button>
        </div>

        {weatherData && (
          <div className="w-9/12 h-6/12 flex flex-col justify-around place-self-center rounded-xl max-w-md">
            <div className="bg-foreground-color">
              <div className="pt-8 pb-3">
                <p className="font-bold text-2xl">
                  {weatherData.location.name},<br />
                  {weatherData.location.country}
                </p>

                <p className="text-text-faded text-xl">
                  {weatherData.location.localtime.substring(8, 10)}-
                  {weatherData.location.localtime.substring(5, 7)}-
                  {weatherData.location.localtime.substring(0, 4)}
                </p>
              </div>
              <div className="bg-pale-blue-color rounded-3xl w-11/12 place-self-center mb-4 mt-4 max-h-20 p-1 shadow-lg">
                <div className="flex flex-row gap-4 justify-center">
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
    </section>
  );
}

export default WeatherFunction;
